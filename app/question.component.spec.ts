import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { Question } from './question.component';

describe('Question component', () => {

  let comp:    Question;
  let fixture: ComponentFixture<Question>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let submit: HTMLElement;
  let question: HTMLInputElement;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question ], // declare the test component
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(Question);

    comp = fixture.componentInstance; // BannerComponent test instance
    comp.inputPlaceholder = 'Ask a question';
    comp.buttonLabel = 'Ask';
    // query for the title <h1> by CSS element selector
    question = fixture.debugElement.query(By.css('.question-input')).nativeElement;
    submit = fixture.debugElement.query(By.css('.question-submit')).nativeElement;
    fixture.detectChanges();
  });

  it('should have a defined component', () => {
    expect(comp).toBeDefined();
  })

  it('should have a button label', () => {
    expect(submit.textContent).toContain(comp.buttonLabel);
  })

  it('should send an event when clicked', () => {
    let isSubmitted = '';
    fixture.debugElement.componentInstance.question = 'Am I doing this right?';
    fixture.detectChanges();
    comp.onSubmit.subscribe((submitted: string) => isSubmitted = submitted);
    fixture.debugElement.query(By.css('.question-submit')).triggerEventHandler('click', null);
    expect(isSubmitted).toBe('Am I doing this right?');
  })
});
