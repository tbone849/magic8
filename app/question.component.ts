import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule }   from '@angular/forms';
let $ = require('../node_modules/jquery/dist/jquery.min.js')

@Component({
	selector: 'question-input',
	template: `
			<div class='center'>
				<input [(ngModel)]='question' class='question-input' type='text' [placeholder]='inputPlaceholder'
					(ngModelChange)='onChange($event)'>
				<div 
					class='question-submit hidden'
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
		if(newValue.length){
			$(".question-submit").removeClass("hidden");
			$(".question-submit").addClass("fadeIn animated");
		} else {
			$(".question-submit").removeClass("fadeIn animated");
			$(".question-submit").addClass("hidden");
		}
	}
}