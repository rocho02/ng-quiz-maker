import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OptionClick, Question} from "../../type/type";
import {State} from "../quiz-option/quiz-option.component";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent {

  @Input()
  question?: Question;

  @Output()
  optionClick: EventEmitter<OptionClick> = new EventEmitter<OptionClick>();

  @Input()
  showResult: boolean = false;

  constructor() {
  }


  optionClicked(value: string) {
    if( this.question){
      this.optionClick.next({
        selected: value,
        question: this.question.question
      });
    }
  }

  isSelected(option: string){
    return this.question?.selected == option;
  }

  getOptionState(option:string ): State  {
    const selected =  this.question?.selected == option;
    if ( this.showResult ){
      const isCorrectAnswer = option == this.question?.correct;
      if ( selected && !isCorrectAnswer){
        return 'danger';
      } else if ( isCorrectAnswer ){
        return 'success';
      }
      return 'normal';
    }else{
      return  selected ? 'selected' : 'normal';
    }
  }
}
