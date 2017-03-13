"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var answers_service_1 = require('./answers.service');
var $ = require('jquery');
require('node_modules/velocity-animate/velocity.ui.min.js');
var AppComponent = (function () {
    function AppComponent(answersService) {
        this.answersService = answersService;
        this.rotations = [5, -5, 20, -20, 15, -15, 10, -10];
    }
    AppComponent.prototype.askedQuestion = function (question) {
        var _this = this;
        this.answer = this.answersService.getAnswer();
        $('.question-container').velocity('transition.bounceUpOut', { duration: 500 });
        $('.eight').delay(1000).velocity('transition.bounceRightIn', { duration: 500, display: 'table-cell' }).delay(500).velocity('callout.shake', { duration: 1000 }).delay(500).velocity('transition.bounceLeftOut', { duration: 500 });
        $('.answer-container').delay(5000).velocity('transition.bounceRightIn', { duration: 500 });
        $('.triangle').delay(6500).velocity('transition.fadeIn', { duration: 2000 });
        setTimeout(function () {
            $('.triangle').velocity({ rotateZ: _this.rotations[Math.floor(Math.random() * _this.rotations.length)] }, { queue: false, duration: 2000 });
        }, 6500);
        $('#reset').delay(9000).velocity('transition.bounceRightIn', { display: 'inline-block' });
    };
    AppComponent.prototype.reset = function () {
        $('#reset').velocity('transition.bounceLeftOut');
        $('.answer-container').velocity('transition.bounceLeftOut');
        $('.triangle').velocity('transition.fadeOut');
        $('.question-container').velocity('transition.bounceDownIn', { duration: 500 });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            providers: [answers_service_1.AnswersService],
            template: "\n  \t\t\t<question-input \n  \t\t\t\tinputPlaceholder='Ask your question...'\n  \t\t\t\tbuttonLabel='Ask the mystic 8 ball'\n  \t\t\t\t(onSubmit)='askedQuestion($event)'>\n  \t\t\t</question-input>\n\t\t\t  <eight-ball></eight-ball>\n        <answer message='{{answer}}'></answer>\n        <div class='center reset-container'>\n          <div class='hidden' id='reset' (click)='reset()'>Ask Another Question</div>\n        </div>\n  \t\t\t"
        }), 
        __metadata('design:paramtypes', [answers_service_1.AnswersService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFHMUMsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFFbkQsSUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFFNUIsT0FBTyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7QUFrQjVEO0lBQ0Usc0JBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUVsRCxjQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUZZLENBQUM7SUFHdEQsb0NBQWEsR0FBYixVQUFjLFFBQWdCO1FBQTlCLGlCQVVDO1FBVEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLDBCQUEwQixFQUFFLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLEVBQUUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUM3TixDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLDBCQUEwQixFQUFFLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDekYsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtRQUMxRSxVQUFVLENBQUM7WUFDVCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3hJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLDBCQUEwQixFQUFFLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUNBLDRCQUFLLEdBQUw7UUFDRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBRWhGLENBQUM7SUFyQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzNCLFFBQVEsRUFBRSwwYkFXTjtTQUNMLENBQUM7O29CQUFBO0lBdUJGLG1CQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSxvQkFBWSxlQXNCeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSAnLi9xdWVzdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFaWdodEJhbGwgfSBmcm9tICcuL2VpZ2h0LWJhbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQW5zd2Vyc1NlcnZpY2UgfSBmcm9tICcuL2Fuc3dlcnMuc2VydmljZSc7XHJcbmltcG9ydCB7IEFuc3dlciB9IGZyb20gJy4vYW5zd2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICogYXMgVmVsb2NpdHkgZnJvbSAndmVsb2NpdHktYW5pbWF0ZSc7XHJcbnJlcXVpcmUoJ25vZGVfbW9kdWxlcy92ZWxvY2l0eS1hbmltYXRlL3ZlbG9jaXR5LnVpLm1pbi5qcycpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gIHByb3ZpZGVyczogW0Fuc3dlcnNTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIFx0XHRcdDxxdWVzdGlvbi1pbnB1dCBcclxuICBcdFx0XHRcdGlucHV0UGxhY2Vob2xkZXI9J0FzayB5b3VyIHF1ZXN0aW9uLi4uJ1xyXG4gIFx0XHRcdFx0YnV0dG9uTGFiZWw9J0FzayB0aGUgbXlzdGljIDggYmFsbCdcclxuICBcdFx0XHRcdChvblN1Ym1pdCk9J2Fza2VkUXVlc3Rpb24oJGV2ZW50KSc+XHJcbiAgXHRcdFx0PC9xdWVzdGlvbi1pbnB1dD5cclxuXHRcdFx0ICA8ZWlnaHQtYmFsbD48L2VpZ2h0LWJhbGw+XHJcbiAgICAgICAgPGFuc3dlciBtZXNzYWdlPSd7e2Fuc3dlcn19Jz48L2Fuc3dlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjZW50ZXIgcmVzZXQtY29udGFpbmVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2hpZGRlbicgaWQ9J3Jlc2V0JyAoY2xpY2spPSdyZXNldCgpJz5Bc2sgQW5vdGhlciBRdWVzdGlvbjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gIFx0XHRcdGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCAge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5zd2Vyc1NlcnZpY2U6IEFuc3dlcnNTZXJ2aWNlKXt9XHJcbiAgYW5zd2VyOnN0cmluZztcclxuICByb3RhdGlvbnMgPSBbNSwtNSwyMCwtMjAsMTUsLTE1LDEwLC0xMF07XHJcblx0YXNrZWRRdWVzdGlvbihxdWVzdGlvbjogc3RyaW5nKXtcclxuICAgIHRoaXMuYW5zd2VyID0gdGhpcy5hbnN3ZXJzU2VydmljZS5nZXRBbnN3ZXIoKTtcclxuICAgICQoJy5xdWVzdGlvbi1jb250YWluZXInKS52ZWxvY2l0eSgndHJhbnNpdGlvbi5ib3VuY2VVcE91dCcsIHtkdXJhdGlvbjogNTAwfSk7XHJcbiAgICAkKCcuZWlnaHQnKS5kZWxheSgxMDAwKS52ZWxvY2l0eSgndHJhbnNpdGlvbi5ib3VuY2VSaWdodEluJywge2R1cmF0aW9uOiA1MDAsIGRpc3BsYXk6ICd0YWJsZS1jZWxsJ30pLmRlbGF5KDUwMCkudmVsb2NpdHkoJ2NhbGxvdXQuc2hha2UnLCB7ZHVyYXRpb246IDEwMDB9KS5kZWxheSg1MDApLnZlbG9jaXR5KCd0cmFuc2l0aW9uLmJvdW5jZUxlZnRPdXQnLCB7ZHVyYXRpb246IDUwMH0pO1xyXG4gICAgJCgnLmFuc3dlci1jb250YWluZXInKS5kZWxheSg1MDAwKS52ZWxvY2l0eSgndHJhbnNpdGlvbi5ib3VuY2VSaWdodEluJywge2R1cmF0aW9uOiA1MDB9KTtcclxuICAgICQoJy50cmlhbmdsZScpLmRlbGF5KDY1MDApLnZlbG9jaXR5KCd0cmFuc2l0aW9uLmZhZGVJbicsIHtkdXJhdGlvbjogMjAwMH0pXHJcbiAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAkKCcudHJpYW5nbGUnKS52ZWxvY2l0eSh7cm90YXRlWjogdGhpcy5yb3RhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5yb3RhdGlvbnMubGVuZ3RoKV19LCB7cXVldWU6IGZhbHNlLCBkdXJhdGlvbjogMjAwMH0pO1xyXG4gICAgfSwgNjUwMCk7XHJcbiAgICAkKCcjcmVzZXQnKS5kZWxheSg5MDAwKS52ZWxvY2l0eSgndHJhbnNpdGlvbi5ib3VuY2VSaWdodEluJywge2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snfSk7XHJcblx0fVxyXG4gIHJlc2V0KCl7XHJcbiAgICAkKCcjcmVzZXQnKS52ZWxvY2l0eSgndHJhbnNpdGlvbi5ib3VuY2VMZWZ0T3V0Jyk7XHJcbiAgICAkKCcuYW5zd2VyLWNvbnRhaW5lcicpLnZlbG9jaXR5KCd0cmFuc2l0aW9uLmJvdW5jZUxlZnRPdXQnKTtcclxuICAgICQoJy50cmlhbmdsZScpLnZlbG9jaXR5KCd0cmFuc2l0aW9uLmZhZGVPdXQnKTtcclxuICAgICQoJy5xdWVzdGlvbi1jb250YWluZXInKS52ZWxvY2l0eSgndHJhbnNpdGlvbi5ib3VuY2VEb3duSW4nLCB7ZHVyYXRpb246IDUwMH0pO1xyXG5cclxuICB9XHJcbn1cclxuIl19
