import { Component, Input } from '@angular/core';

@Component({
	selector: 'answer',
	template: `
				<div class='circle'>
					<div class='triangle'>
						<div class='message'>{{message | uppercase}}</div>
					</div>
				</div>
			`
})
export class Answer{
	@Input() message:string;
}