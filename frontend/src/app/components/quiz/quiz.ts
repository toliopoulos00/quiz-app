import { Component, inject, OnInit, signal } from '@angular/core';
import { Question } from '../question/question';
import { TriviaApiService } from '../../services/trivia-api-service';
import { QuizSettings, QuizQuestion } from '../../models/models';
import { mapQuestion } from '../../utils/question-mapper';

@Component({
  selector: 'app-quiz',
  imports: [ Question ],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz implements OnInit {
  private triviaApiService = inject(TriviaApiService);
  questions = signal<QuizQuestion[]>([]);

  ngOnInit(){

    this.triviaApiService.getCategories().subscribe({
      next: (response) => {
        console.log('Categories:', response);
      },
      error: (error) => {
        console.error('Failed to fetch categories:', error);
      }
    })

    const settings: QuizSettings = {
      amount: 5,
      category: '9',
      difficulty: 'easy'
    };

    this.triviaApiService.getQuestions(settings).subscribe({
      next: (response) => {
        if (response.response_code !== 0) {
          console.error('API returned an error:', response.response_code);
          return;
        }

        this.questions.set(response.results.map(mapQuestion));

        console.log('Mapped questions:', this.questions());
      },
      error: (error) => {
        console.error('Failed to fetch questions:', error);
      }
    });
  }

  onAnswerSelected(answer: string) {
    console.log('Selected answer:', answer);
  }
}
