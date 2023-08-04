import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-quiz-option',
  templateUrl: './quiz-option.component.html',
  styleUrls: ['./quiz-option.component.scss']
})
export class QuizOptionComponent {

  @Input()
  value: string = "";

  @Input()
  state?: 'normal' | 'selected' |'success' | 'danger';

  @Output()
  optionClick: EventEmitter<string> = new EventEmitter<string>();


  onClick() {
    console.info("option clicked", this.value);
    this.optionClick.next(this.value);
  }
}

export type State = 'normal' | 'selected' |'success' | 'danger' ;
