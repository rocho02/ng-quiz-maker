import {Component, OnInit} from '@angular/core';
import {TriviaDBService} from "../../service/trivia-db.service";
import {first, Subject} from "rxjs";
import {
  DifficultyOption, OptionClick,
  Question,
  TriviaCategory,
  TriviaDifficulty,
} from "../../type/type";
import {TriviaAPIService} from "../../service/trivia-api.service";
import {shuffle} from "../../util";
import {DomSanitizer} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {

  categories: Subject<TriviaCategory[]>;
  questions$: Subject<Question[] | null>;
  showSubmitButton: boolean = false;

  difficulties: DifficultyOption[] = [
    {
      value: TriviaDifficulty.EASY,
      label: "Easy"
    },
    {
      value: TriviaDifficulty.MEDIUM,
      label: "Medium"
    },
    {
      value: TriviaDifficulty.HARD,
      label: "Hard"
    }
  ];

  filterForm: FormGroup;

  constructor(private db: TriviaDBService,
              private api: TriviaAPIService,
              private fb: FormBuilder,
              private sanitizer: DomSanitizer) {
    this.categories = this.db.getCategories();
    this.questions$ = this.db.getQuestions();

    this.filterForm = this.fb.group({
      category: ['', [Validators.required]],
      difficulty: [TriviaDifficulty.EASY, [Validators.required]],
    });

  }

  protected readonly TriviaDifficulty = TriviaDifficulty;

  load() {
    this.api.getQuestions(5, this.filterForm.value.category, this.filterForm.value.difficulty, "multiple")
      .subscribe(value => {
        const questions = value.results.map((triviaQuestion): Question => {
          const question: Question = {
            question: triviaQuestion.question,
            options: [
              triviaQuestion.correct_answer,
              ...triviaQuestion.incorrect_answers
            ],
            correct: triviaQuestion.correct_answer
          };
          question.options = shuffle(question.options);
          return question;
        });
        this.questions$.next(questions);
      })
  }

  onSubmit() {
    console.info(this.filterForm.value);
    this.load();
  }

  ngOnInit(): void {
    this.filterForm.patchValue({
      'difficulty': TriviaDifficulty.EASY,
      'category': ''
    });
    this.questions$.next(null);

  }

  optionClicked(value: OptionClick) {
    this.questions$
      .pipe(first())
      .subscribe(questions => {
        this.showSubmitButton = false;
        if (questions) {
          this.showSubmitButton = true;
          questions.forEach((question) => {
            if (value.question == question.question) {
              question.selected = value.selected;
            }
            if ( !question.selected ){
              this.showSubmitButton = false;
            }
          });
        }
      })

  }
}
