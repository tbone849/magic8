import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule }   from '@angular/forms';
let Velocity = require('../node_modules/velocity-animate/velocity.min.js');
let $ = require('../node_modules/jquery/dist/jquery.min.js')

@Component({
	selector: 'question-input',
	template: `
			<div class='center question-container'>
				<input [(ngModel)]='question' class='question-input' type='text' [placeholder]='inputPlaceholder'
					(ngModelChange)='onChange($event)'>
				<div 
					class='question-submit'
					(click)='submit(question); question = "";'>
					{{buttonLabel}}
				</div>
			</div>
			`,
})
export class Question{
	showSubmit = false;
	@Input() inputPlaceholder:string;
	@Input() buttonLabel:string;
	@Output() onSubmit = new EventEmitter<string>();
	submit(question: string) {
		console.log(question);
		this.onSubmit.emit(question);
	}
	onChange(newValue:string){
		if(newValue.length && this.showSubmit === false){
			this.showSubmit = true;
			$('.question-submit').velocity('fadeIn', { display: 'inline-block',duration: 1500});
		} else if(!newValue.length) {
			this.showSubmit = false;
			$('.question-submit').hide();
		}
	}
}