import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizOptionComponent } from './quiz-option.component';

describe('QuizOptionComponent', () => {
  let component: QuizOptionComponent;
  let fixture: ComponentFixture<QuizOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizOptionComponent]
    });
    fixture = TestBed.createComponent(QuizOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
