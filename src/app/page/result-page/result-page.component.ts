import { Component } from '@angular/core';
import {Subject} from "rxjs";
import {Question} from "../../type/type";
import {TriviaDBService} from "../../service/trivia-db.service";

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent {
  questions$: Subject<Question[]|null>;

  constructor(private db: TriviaDBService) {
    this.questions$ = this.db.getQuestions();

  }


}
