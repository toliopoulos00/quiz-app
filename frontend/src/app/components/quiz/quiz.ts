import { Component } from '@angular/core';
import { Question } from '../question/question';

@Component({
  selector: 'app-quiz',
  imports: [ Question ],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {}
