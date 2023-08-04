import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizPageComponent} from "./page/quiz-page/quiz-page.component";
import {ResultPageComponent} from "./page/result-page/result-page.component";

const routes: Routes = [
    {
        path: 'quiz',
        component: QuizPageComponent
    },
    {
        path: 'result',
        component: ResultPageComponent
    },
    {
        path: '**',
        component: QuizPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
