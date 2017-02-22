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
    de = fixture.debugElement.query(By.css('.question-submit'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should have a defined component', () => {
    expect(comp).toBeDefined();
  })

  it('should have a button label', () => {
    expect(el.textContent).toContain(comp.buttonLabel);
  })

  it('should send an event when clicked', () => {
    let isSubmitted = false;
    comp.onSubmit.subscribe((submitted: boolean) => isSubmitted = submitted);
    de.triggerEventHandler('click');
    expect(isSubmitted).toBe(true);
  })
});
