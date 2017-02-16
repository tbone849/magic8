import { AnswersService } from './answers.service';


describe('App component', () => {
  let service: AnswersService;

  it('should return an answer', () => {
    const service = new AnswersService();
    let answer = service.getAnswer();
    expect(typeof answer).toBe('string');
  });  

});