import { Component } from '@angular/core';
import { Question } from './question.component';
import { EightBall } from './eight-ball.component';


@Component({
  selector: 'app',
  template: `
  			<question-input 
  				inputPlaceholder='Ask a question'
  				buttonLabel='Ask'
  				(onSubmit)='askedQuestion($event)'>
  			</question-input>
			<eight-ball *ngIf='!hideBall'></eight-ball>
  			`
})
export class AppComponent  {
	hideBall = false
	askedQuestion(asked: boolean){
		this.hideBall = asked;
		console.log('question asked: ', asked)
	}
}
