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
var OTFAComponent = /** @class */ (function () {
    function OTFAComponent(_compiler, _injector, _m) {
        this._compiler = _compiler;
        this._injector = _injector;
        this._m = _m;
    }
    OTFAComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var template = '<span>I am {{name}}</span>';
        var tmpCmp = core_1.Component({ template: template })(/** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }()));
        var tmpModule = core_1.NgModule({ declarations: [tmpCmp] })(/** @class */ (function () {
            function class_2() {
            }
            return class_2;
        }()));
        this._compiler.compileModuleAndAllComponentsAsync(tmpModule)
            .then(function (factories) {
            var f = factories.componentFactories[0];
            var cmpRef = f.create(_this._injector, [], null, _this._m);
            cmpRef.instance.name = 'B component';
            _this._container.insert(cmpRef.hostView);
        });
    };
    __decorate([
        core_1.ViewChild('vc', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], OTFAComponent.prototype, "_container", void 0);
    OTFAComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'otf-a-component',
            template: 'I am A component that inserts dynamic B component below: <div #vc></div>'
        }),
        __metadata("design:paramtypes", [core_1.Compiler,
            core_1.Injector,
            core_1.NgModuleRef])
    ], OTFAComponent);
    return OTFAComponent;
}());
exports.OTFAComponent = OTFAComponent;
//# sourceMappingURL=a.component.js.map