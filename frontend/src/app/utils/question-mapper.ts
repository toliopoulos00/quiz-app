import { QuizQuestion, QuizApiQuestion } from "../models/models";

export function decodeHTML(text: string): string {
    const parser = new DOMParser();
    const document = parser.parseFromString(text, 'text/html');

    return document.body.textContent ?? text;
}

export function shuffleAnswers(answers: string[]): string[] {
    const shuffled = [...answers];

    for (let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

export function mapQuestion(raw: QuizApiQuestion): QuizQuestion {
    const correctAnswer = decodeHTML(raw.correct_answer);

    const incorrectAnswers = raw.incorrect_answers.map(
        answer => decodeHTML(answer)
    );

    const answers = shuffleAnswers([
        correctAnswer,
        ...incorrectAnswers
    ]);

    return {
        question: decodeHTML(raw.question),
        category: decodeHTML(raw.category),
        difficulty: decodeHTML(raw.difficulty),
        answers,
        correctAnswer
    };
}