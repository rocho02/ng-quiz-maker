import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TriviaCategoryResponse, TriviaDifficulty, TriviaQuestionResponse, TriviaQuestionType} from "../type/type";

@Injectable({
  providedIn: 'root'
})
export class TriviaAPIService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<TriviaCategoryResponse> {
    return this.http.get<TriviaCategoryResponse>("https://opentdb.com/api_category.php");
  }

  public getQuestions(amount: number, category: number,difficulty: TriviaDifficulty, type: TriviaQuestionType): Observable<TriviaQuestionResponse> {
    return this.http.get<TriviaQuestionResponse>(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);
  }

}
