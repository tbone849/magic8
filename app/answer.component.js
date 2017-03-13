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
var Answer = (function () {
    function Answer() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Answer.prototype, "message", void 0);
    Answer = __decorate([
        core_1.Component({
            selector: 'answer',
            template: "\n\t\t\t\t<div class='circle answer-container'>\n\t\t\t\t\t<div class='triangle'>\n\t\t\t\t\t\t<div class='message'>{{message | uppercase}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Answer);
    return Answer;
}());
exports.Answer = Answer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hbnN3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFZakQ7SUFBQTtJQUVBLENBQUM7SUFEQTtRQUFDLFlBQUssRUFBRTs7MkNBQUE7SUFYVDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsNkxBTVA7U0FDSCxDQUFDOztjQUFBO0lBR0YsYUFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksY0FBTSxTQUVsQixDQUFBIiwiZmlsZSI6ImFuc3dlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2Fuc3dlcicsXHJcblx0dGVtcGxhdGU6IGBcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPSdjaXJjbGUgYW5zd2VyLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPSd0cmlhbmdsZSc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9J21lc3NhZ2UnPnt7bWVzc2FnZSB8IHVwcGVyY2FzZX19PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5zd2Vye1xyXG5cdEBJbnB1dCgpIG1lc3NhZ2U6c3RyaW5nO1xyXG59Il19
