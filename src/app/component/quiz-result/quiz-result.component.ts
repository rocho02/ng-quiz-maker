import {Component, Input, OnInit} from '@angular/core';
import {first, Subject} from "rxjs";
import {Question} from "../../type/type";
import {TriviaDBService} from "../../service/trivia-db.service";
import {TriviaAPIService} from "../../service/trivia-api.service";
import {FormBuilder} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  @Input()
  questions: Question[] | null = [];
  score: number = 0;


  ngOnInit(): void {
    this.score = 0;
    if (this.questions) {
      this.questions.forEach(question => {
        if (question.selected == question.correct) {
          this.score += 1;
        }
      });
    }
  }

}


