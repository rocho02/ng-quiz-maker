import {Injectable} from '@angular/core';
import {Question, TriviaCategory, TriviaQuestion} from "../type/type";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TriviaDBService {


    categories: Subject<TriviaCategory[]> = new BehaviorSubject<TriviaCategory[]>([]);
    questions: Subject<Question[]|null> = new BehaviorSubject<Question[]|null>([]);

    constructor() {
    }

    getCategories(): Subject<TriviaCategory[]> {
        return this.categories;
    }

    setCategories(categories: TriviaCategory[]) {
        this.categories.next(categories);
    }

    getQuestions(): Subject<Question[]|null> {
        return this.questions;
    }

    setQuestions(questions: Question[]) {
       this.questions.next(questions);
    }
}
