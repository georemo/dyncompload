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
var NMLAComponent = /** @class */ (function () {
    function NMLAComponent(_injector, loader) {
        this._injector = _injector;
        this.loader = loader;
    }
    NMLAComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.loader.load('app/ng-module-loader/nml-lazy.module.js#NMLLazyModule').then(function (factory) {
            var module = factory.create(_this._injector);
            var resolver = module.componentFactoryResolver;
            var cmpFactory = resolver.resolveComponentFactory(b_component_1.NMLBComponent);
            _this._container.createComponent(cmpFactory);
        });
    };
    __decorate([
        core_1.ViewChild('vc', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], NMLAComponent.prototype, "_container", void 0);
    NMLAComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nml-a-component',
            providers: [
                {
                    provide: core_1.NgModuleFactoryLoader,
                    useClass: core_1.SystemJsNgModuleLoader
                }
            ],
            template: 'I am A component that inserts dynamic B component below: <div #vc></div>'
        }),
        __metadata("design:paramtypes", [core_1.Injector, core_1.NgModuleFactoryLoader])
    ], NMLAComponent);
    return NMLAComponent;
}());
exports.NMLAComponent = NMLAComponent;
//# sourceMappingURL=a.component.js.map