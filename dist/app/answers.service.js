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
var answers_1 = require('./answers');
var AnswersService = (function () {
    function AnswersService() {
    }
    AnswersService.prototype.getAnswer = function () {
        return answers_1.ANSWERS[Math.floor(Math.random() * answers_1.ANSWERS.length)];
    };
    AnswersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AnswersService);
    return AnswersService;
}());
exports.AnswersService = AnswersService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hbnN3ZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFHcEM7SUFBQTtJQUlBLENBQUM7SUFIQSxrQ0FBUyxHQUFUO1FBQ0MsTUFBTSxDQUFDLGlCQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFKRjtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBS2IscUJBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLHNCQUFjLGlCQUkxQixDQUFBIiwiZmlsZSI6ImFuc3dlcnMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQU5TV0VSUyB9IGZyb20gJy4vYW5zd2Vycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbnN3ZXJzU2VydmljZSB7XHJcblx0Z2V0QW5zd2VyKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gQU5TV0VSU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqQU5TV0VSUy5sZW5ndGgpXTtcclxuXHR9XHJcbn0iXX0=
