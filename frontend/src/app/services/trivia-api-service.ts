import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriesApiResponse, QuizApiResponse, QuizSettings } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class TriviaApiService {
  private apiUrl = "https://opentdb.com";

  constructor(private http: HttpClient){}

  getCategories() {
    return this.http.get<CategoriesApiResponse>(`${this.apiUrl}/api_category.php`);
  }

  getQuestions(settings: QuizSettings){
    return this.http.get<QuizApiResponse>(
      `${this.apiUrl}/api.php`,
      {
        params: {
          amount: settings.amount,
          category: settings.category,
          difficulty: settings.difficulty
        }
      }
    );
  }
}
