import { Component, input, output } from '@angular/core';
import { QuizQuestion } from '../../models/models';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class Question {
  question = input.required<QuizQuestion>();

  answerSelected = output<string>();

  selectAnswer(answer: string) {
    this.answerSelected.emit(answer);
  }
}
