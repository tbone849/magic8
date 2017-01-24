import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  template: `
  			<div class='ball'>
  				<input class='question-input' type='text' placeholder='Ask a yes or no question'><button class='question-submit'>Ask</button>
  				<div class='inner-circle'>8</div>
  			</div>
  			`
})
export class AppComponent  {}
