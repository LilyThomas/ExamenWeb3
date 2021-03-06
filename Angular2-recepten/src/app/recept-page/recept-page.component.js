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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var recept_service_1 = require("../service/recept.service");
var recept_1 = require("../service/recept");
var ReceptPageComponent = (function () {
    function ReceptPageComponent(receptService) {
        this.receptService = receptService;
        this.recept = new forms_1.FormGroup({
            receptnaam: new forms_1.FormControl(''),
            receptkcal: new forms_1.FormControl(''),
            receptingredienten: new forms_1.FormControl(''),
            receptbereidingstijd: new forms_1.FormControl('')
        });
        this.recepten = this.receptService.getAllRecepten();
    }
    ReceptPageComponent.prototype.onSubmit = function () {
        var ingredienten = this.recept.value.receptingredienten.trim().split(',');
        var rec = new recept_1.Recept(this.recept.value.receptnaam, Number(this.recept.value.receptkcal), ingredienten, Number(this.recept.value.receptbereidingstijd));
        this.receptService.addRecept(rec);
        this.recepten = this.receptService.getAllRecepten();
    };
    return ReceptPageComponent;
}());
ReceptPageComponent = __decorate([
    core_1.Component({
        selector: 'recept-page',
        templateUrl: './recept-page.component.html'
    }),
    __metadata("design:paramtypes", [recept_service_1.ReceptService])
], ReceptPageComponent);
exports.ReceptPageComponent = ReceptPageComponent;
//# sourceMappingURL=recept-page.component.js.map