declare var module: {
    id: string;
}

import { Compiler, Component, Injector, ViewChild, ViewContainerRef } from "@angular/core";

declare const System;

@Component({
    moduleId: module.id,
    selector: 'lac-a-component',
    template: 'I am _A component that inserts dynamic B component below: <div #vc></div>'
})

export class LACAComponent {
    @ViewChild('vc', { read: ViewContainerRef }) _container: ViewContainerRef;
    currentMod;

    constructor(private _compiler: Compiler, private _injector: Injector) {
        this.currentMod = 'dashboard/lac-lazy.module.js';
    }

    // 'src/app/dynload/loaded-and-compiled/lac-lazyC.module.js'
    ngAfterViewInit() {
        import(`src/app/${this.currentMod}`).then((module) => {
            this._compiler.compileModuleAndAllComponentsAsync(module.LACLazyModule)
                .then((compiled) => {
                    const factory = compiled.componentFactories[0];
                    this._container.createComponent(factory);
                })
        })
    }
}
