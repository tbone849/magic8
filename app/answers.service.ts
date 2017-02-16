import { Injectable } from '@angular/core';
import { ANSWERS } from './answers';

@Injectable()
export class AnswersService {
	getAnswer(): string {
		return ANSWERS[Math.floor(Math.random()*ANSWERS.length)];
	}
}