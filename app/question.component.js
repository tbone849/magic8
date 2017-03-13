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
var $ = require('jquery');
var Question = (function () {
    function Question() {
        this.showSubmit = false;
        this.onSubmit = new core_1.EventEmitter();
    }
    Question.prototype.submit = function (question) {
        console.log('submit called');
        this.showSubmit === false;
        this.onSubmit.emit(question);
        this.onChange('');
    };
    Question.prototype.onChange = function (newValue) {
        console.log(typeof newValue);
        console.log(newValue.length);
        console.log(this.showSubmit);
        if (newValue.length && this.showSubmit === false) {
            this.showSubmit = true;
            $('.question-submit').velocity('fadeIn', { display: 'inline-block', duration: 500 });
        }
        else if (!newValue.length) {
            this.showSubmit = false;
            $('.question-submit').hide();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Question.prototype, "inputPlaceholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Question.prototype, "buttonLabel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Question.prototype, "onSubmit", void 0);
    Question = __decorate([
        core_1.Component({
            selector: 'question-input',
            template: "\n\t\t\t<div class='center question-container'>\n\t\t\t\t<input [(ngModel)]='question' class='question-input' type='text' [placeholder]='inputPlaceholder'\n\t\t\t\t\t(ngModelChange)='onChange($event)'>\n\t\t\t\t<div \n\t\t\t\t\tclass='question-submit'\n\t\t\t\t\t(click)='submit(question); question = \"\"'>\n\t\t\t\t\t{{buttonLabel}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t",
        }), 
        __metadata('design:paramtypes', [])
    ], Question);
    return Question;
}());
exports.Question = Question;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9xdWVzdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1RCxlQUFlLENBQUMsQ0FBQTtBQUd2RSxJQUFZLENBQUMsV0FBTSxRQUFRLENBQUMsQ0FBQTtBQWdCNUI7SUFBQTtRQUNDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFHVCxhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFtQmpELENBQUM7SUFsQkEseUJBQU0sR0FBTixVQUFPLFFBQWdCO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0QsMkJBQVEsR0FBUixVQUFTLFFBQWU7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsQ0FBQSxDQUFDO1lBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQ3BGLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixDQUFDO0lBQ0YsQ0FBQztJQXBCRDtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7aURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7OENBQUE7SUFsQlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsc1hBVVA7U0FDSCxDQUFDOztnQkFBQTtJQXdCRixlQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXZCWSxnQkFBUSxXQXVCcEIsQ0FBQSIsImZpbGUiOiJxdWVzdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgKiBhcyBWZWxvY2l0eSBmcm9tICd2ZWxvY2l0eS1hbmltYXRlJztcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdxdWVzdGlvbi1pbnB1dCcsXHJcblx0dGVtcGxhdGU6IGBcclxuXHRcdFx0PGRpdiBjbGFzcz0nY2VudGVyIHF1ZXN0aW9uLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0PGlucHV0IFsobmdNb2RlbCldPSdxdWVzdGlvbicgY2xhc3M9J3F1ZXN0aW9uLWlucHV0JyB0eXBlPSd0ZXh0JyBbcGxhY2Vob2xkZXJdPSdpbnB1dFBsYWNlaG9sZGVyJ1xyXG5cdFx0XHRcdFx0KG5nTW9kZWxDaGFuZ2UpPSdvbkNoYW5nZSgkZXZlbnQpJz5cclxuXHRcdFx0XHQ8ZGl2IFxyXG5cdFx0XHRcdFx0Y2xhc3M9J3F1ZXN0aW9uLXN1Ym1pdCdcclxuXHRcdFx0XHRcdChjbGljayk9J3N1Ym1pdChxdWVzdGlvbik7IHF1ZXN0aW9uID0gXCJcIic+XHJcblx0XHRcdFx0XHR7e2J1dHRvbkxhYmVsfX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbntcclxuXHRzaG93U3VibWl0ID0gZmFsc2U7XHJcblx0QElucHV0KCkgaW5wdXRQbGFjZWhvbGRlcjpzdHJpbmc7XHJcblx0QElucHV0KCkgYnV0dG9uTGFiZWw6c3RyaW5nO1xyXG5cdEBPdXRwdXQoKSBvblN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cdHN1Ym1pdChxdWVzdGlvbjogc3RyaW5nKSB7XHJcblx0XHRjb25zb2xlLmxvZygnc3VibWl0IGNhbGxlZCcpO1xyXG5cdFx0dGhpcy5zaG93U3VibWl0ID09PSBmYWxzZTtcclxuXHRcdHRoaXMub25TdWJtaXQuZW1pdChxdWVzdGlvbik7XHJcblx0XHR0aGlzLm9uQ2hhbmdlKCcnKTtcclxuXHR9XHJcblx0b25DaGFuZ2UobmV3VmFsdWU6c3RyaW5nKXtcclxuXHRcdGNvbnNvbGUubG9nKHR5cGVvZiBuZXdWYWx1ZSk7XHJcblx0XHRjb25zb2xlLmxvZyhuZXdWYWx1ZS5sZW5ndGgpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5zaG93U3VibWl0KTtcclxuXHRcdGlmKG5ld1ZhbHVlLmxlbmd0aCAmJiB0aGlzLnNob3dTdWJtaXQgPT09IGZhbHNlKXtcclxuXHRcdFx0dGhpcy5zaG93U3VibWl0ID0gdHJ1ZTtcclxuXHRcdFx0JCgnLnF1ZXN0aW9uLXN1Ym1pdCcpLnZlbG9jaXR5KCdmYWRlSW4nLCB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLGR1cmF0aW9uOiA1MDB9KTtcclxuXHRcdH0gZWxzZSBpZighbmV3VmFsdWUubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMuc2hvd1N1Ym1pdCA9IGZhbHNlO1xyXG5cdFx0XHQkKCcucXVlc3Rpb24tc3VibWl0JykuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ==
