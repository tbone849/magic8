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
  				inputPlaceholder='Ask a question'
  				buttonLabel='Ask'
  				(onSubmit)='askedQuestion($event)'>
  			</question-input>
			  <eight-ball *ngIf='!hideBall'></eight-ball>
        <answer message='{{answer}}'></answer>
  			`
})
export class AppComponent  {
  constructor(private answersService: AnswersService){}
  answer:string;
	hideBall = false;
	askedQuestion(asked: boolean){
		this.hideBall = asked;
    this.answer = this.answersService.getAnswer();
    console.log(this.answer);
		console.log('question asked: ', asked)
	}
}
