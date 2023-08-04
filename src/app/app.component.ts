import {Component, OnInit} from '@angular/core';
import {TriviaAPIService} from "./service/trivia-api.service";
import {TriviaCategory, TriviaQuestion} from "./type/type";
import {TriviaDBService} from "./service/trivia-db.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'quiz';

  categories: TriviaCategory[] = [];
  questions: TriviaQuestion[] = [];

  constructor(private api: TriviaAPIService, private db: TriviaDBService) {

  }
  ngOnInit(): void {
    this.api.getCategories().subscribe(
      value => {
        this.categories = value.trivia_categories;
        this.db.setCategories(value.trivia_categories);
      }
    )
  }

}
