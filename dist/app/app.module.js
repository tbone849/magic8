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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var question_component_1 = require('./question.component');
var eight_ball_component_1 = require('./eight-ball.component');
var answer_component_1 = require('./answer.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent,
                question_component_1.Question,
                eight_ball_component_1.EightBall,
                answer_component_1.Answer],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsc0JBQThCLGdCQUFnQixDQUFDLENBQUE7QUFFL0MsOEJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsbUNBQXlCLHNCQUFzQixDQUFDLENBQUE7QUFDaEQscUNBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFDbkQsaUNBQXVCLG9CQUFvQixDQUFDLENBQUE7QUFVNUM7SUFBQTtJQUF5QixDQUFDO0lBUjFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFPLENBQUUsZ0NBQWEsRUFBRSxtQkFBVyxDQUFFO1lBQzVDLFlBQVksRUFBRSxDQUFFLDRCQUFZO2dCQUN0Qiw2QkFBUTtnQkFDUixnQ0FBUztnQkFDVCx5QkFBTSxDQUFFO1lBQ2QsU0FBUyxFQUFLLENBQUUsNEJBQVksQ0FBRTtTQUMvQixDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSAnLi9xdWVzdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFaWdodEJhbGwgfSBmcm9tICcuL2VpZ2h0LWJhbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQW5zd2VyIH0gZnJvbSAnLi9hbnN3ZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogICAgICBbIEJyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbIEFwcENvbXBvbmVudCxcclxuICBcdFx0XHRcdCAgUXVlc3Rpb24sXHJcbiAgXHRcdFx0XHQgIEVpZ2h0QmFsbCxcclxuICBcdFx0XHRcdCAgQW5zd2VyIF0sXHJcbiAgYm9vdHN0cmFwOiAgICBbIEFwcENvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
