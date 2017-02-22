import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { Question } from './question.component';
import { EightBall } from './eight-ball.component';
import { Answer } from './answer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
  				  Question,
  				  EightBall,
  				  Answer ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
