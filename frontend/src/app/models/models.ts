export interface QuizApiResponse{
    response_code: number;
    results: QuizApiQuestion[];
}

export interface QuizApiQuestion {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface QuizQuestion {
    question: string;
    category: string;
    difficulty: string;
    answers: string[];
    correctAnswer: string;
}

export interface QuizSettings {
    difficulty: string;
    amount: number;
    category: string;
}

export interface AnswerRecord {
    question: QuizQuestion;
    selectedAnswer: string;
    isCorrect: boolean;
}