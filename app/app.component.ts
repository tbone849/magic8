import { Component } from '@angular/core';
import { Question } from './question.component';
import { EightBall } from './eight-ball.component';
import { AnswersService } from './answers.service';
import { Answer } from './answer.component';


@Component({
  selector: 'app',
  providers: [AnswersService],
  template: `
  			<question-input 
          *ngIf='showInput'
  				inputPlaceholder='Ask your question...'
  				buttonLabel='Ask the mystic 8 ball'
  				(onSubmit)='askedQuestion($event)'>
  			</question-input>
			  <eight-ball *ngIf='showEight'></eight-ball>
        <answer *ngIf='showAnswer' message='{{answer}}'></answer>
        <div class='center'>
          <div class='reset' *ngIf='showAnswer' (click)='reset()'>Ask Another Question</div>
        </div>
  			`
})
export class AppComponent  {
  constructor(private answersService: AnswersService){}
  answer:string;
  showEight = false;
  showAnswer = false;
  showInput = true;
	askedQuestion(question: string){
		this.showInput = false;
    this.showEight = true;
    this.answer = this.answersService.getAnswer();
    setTimeout(() => {
      this.showAnswer = true;
      this.showEight = false;
    }, 3000);
	}
  reset(){
    this.showAnswer = false;
    this.showEight = false;
    this.showInput = true;
  }
}
