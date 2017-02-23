import { Component } from '@angular/core';
import { Question } from './question.component';
import { EightBall } from './eight-ball.component';
import { AnswersService } from './answers.service';
import { Answer } from './answer.component';
import * as $ from 'jquery';
import * as Velocity from 'velocity';
require('../node_modules/velocity-animate/velocity.ui.min.js');

@Component({
  selector: 'app',
  providers: [AnswersService],
  template: `
  			<question-input 
  				inputPlaceholder='Ask your question...'
  				buttonLabel='Ask the mystic 8 ball'
  				(onSubmit)='askedQuestion($event)'>
  			</question-input>
			  <eight-ball></eight-ball>
        <answer message='{{answer}}'></answer>
        <div class='center'>
          <div class='hidden' id='reset' (click)='reset()'>Ask Another Question</div>
        </div>
  			`
})
export class AppComponent  {
  constructor(private answersService: AnswersService){}
  answer:string;
	askedQuestion(question: string){
    this.answer = this.answersService.getAnswer();
    $('.question-container').velocity({translateY: "-2000px"}, {duration: 500});
	}
  reset(){
    this.showAnswer = false;
    this.showEight = false;
    this.showInput = true;
  }
}
