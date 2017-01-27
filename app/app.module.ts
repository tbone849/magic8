import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Question } from './question.component';
import { EightBall } from './eight-ball.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
  				  Question,
  				  EightBall ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
