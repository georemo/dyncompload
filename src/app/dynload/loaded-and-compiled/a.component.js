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
var LACAComponent = /** @class */ (function () {
    function LACAComponent(_compiler, _injector) {
        this._compiler = _compiler;
        this._injector = _injector;
    }
    LACAComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        System.import('app/loaded-and-compiled/lac-lazy2.module.js').then(function (module) {
            _this._compiler.compileModuleAndAllComponentsAsync(module.LACLazyModule)
                .then(function (compiled) {
                var factory = compiled.componentFactories[0];
                _this._container.createComponent(factory);
            });
        });
    };
    __decorate([
        core_1.ViewChild('vc', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], LACAComponent.prototype, "_container", void 0);
    LACAComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lac-a-component',
            template: 'I am _A component that inserts dynamic B component below: <div #vc></div>'
        }),
        __metadata("design:paramtypes", [core_1.Compiler, core_1.Injector])
    ], LACAComponent);
    return LACAComponent;
}());
exports.LACAComponent = LACAComponent;
//# sourceMappingURL=a.component.js.map