import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import * as Velocity from 'velocity-animate';
import * as $ from 'jquery';

@Component({
	selector: 'question-input',
	template: `
			<div class='center question-container'>
				<input [(ngModel)]='question' class='question-input' type='text' [placeholder]='inputPlaceholder'
					(ngModelChange)='onChange($event)'>
				<div 
					class='question-submit'
					(click)='submit(question); question = ""'>
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
		console.log('submit called');
		this.showSubmit === false;
		this.onSubmit.emit(question);
		this.onChange('');
	}
	onChange(newValue:string){
		console.log(typeof newValue);
		console.log(newValue.length);
		console.log(this.showSubmit);
		if(newValue.length && this.showSubmit === false){
			this.showSubmit = true;
			$('.question-submit').velocity('fadeIn', { display: 'inline-block',duration: 500});
		} else if(!newValue.length) {
			this.showSubmit = false;
			$('.question-submit').hide();
		}
	}
}