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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var b_component_1 = require("./b.component");
var FRAComponent = /** @class */ (function () {
    function FRAComponent(_resolver) {
        this._resolver = _resolver;
    }
    FRAComponent.prototype.ngAfterViewInit = function () {
        var cmpFactory = this._resolver.resolveComponentFactory(b_component_1.FRBComponent);
        this._container.createComponent(cmpFactory);
    };
    __decorate([
        core_1.ViewChild('vc', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], FRAComponent.prototype, "_container", void 0);
    FRAComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fr-a-component',
            template: 'I am A component that inserts dynamic B component below: <div #vc></div>'
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], FRAComponent);
    return FRAComponent;
}());
exports.FRAComponent = FRAComponent;
//# sourceMappingURL=a.component.js.map