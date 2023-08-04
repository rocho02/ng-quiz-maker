import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { QuizPageComponent } from './page/quiz-page/quiz-page.component';
import { ResultPageComponent } from './page/result-page/result-page.component';
import {QuizQuestionComponent} from "./component/quiz-question/quiz-question.component";
import { QuizOptionComponent } from './component/quiz-option/quiz-option.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SanitizeHtmlPipe } from './pipe/sanitize-html.pipe';
import { QuizResultComponent } from './component/quiz-result/quiz-result.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizPageComponent,
    ResultPageComponent,
    QuizQuestionComponent,
    QuizOptionComponent,
    SanitizeHtmlPipe,
    QuizResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
