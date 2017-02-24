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
        <div class='center reset-container'>
          <div class='hidden' id='reset' (click)='reset()'>Ask Another Question</div>
        </div>
  			`
})
export class AppComponent  {
  constructor(private answersService: AnswersService){}
  answer:string;
  rotations = [5,-5,20,-20,15,-15,10,-10];
	askedQuestion(question: string){
    this.answer = this.answersService.getAnswer();
    $('.question-container').velocity('transition.bounceUpOut', {duration: 500});
    $('.eight').delay(1000).velocity('transition.bounceRightIn', {duration: 500, display: 'table-cell'}).delay(500).velocity('callout.shake', {duration: 1000}).delay(500).velocity('transition.bounceLeftOut', {duration: 500});
    $('.answer-container').delay(5000).velocity('transition.bounceRightIn', {duration: 500});
    $('.triangle').delay(6500).velocity('transition.fadeIn', {duration: 2000})
    setTimeout(()=> {
      $('.triangle').velocity({rotateZ: this.rotations[Math.floor(Math.random() * this.rotations.length)]}, {queue: false, duration: 2000});
    }, 6500);
    $('#reset').delay(9000).velocity('transition.bounceRightIn', {display: 'inline-block'});
	}
  reset(){
    $('#reset').velocity('transition.bounceLeftOut');
    $('.answer-container').velocity('transition.bounceLeftOut');
    $('.triangle').velocity('transition.fadeOut');
    $('.question-container').velocity('transition.bounceDownIn', {duration: 500});

  }
}
