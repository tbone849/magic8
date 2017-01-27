import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'question-input',
	template: `
			<input class='question-input' type='text' [placeholder]='inputPlaceholder'><button (click)='submit(true)' class='question-submit'>{{buttonLabel}}</button>
			`
})
export class Question{
	@Input() inputPlaceholder:string;
	@Input() buttonLabel:string;
	@Output() onSubmit = new EventEmitter<boolean>();
	submit(submitted: boolean) {
		this.onSubmit.emit(submitted);
	}
}