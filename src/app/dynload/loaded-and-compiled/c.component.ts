declare var module: {
    id: string;
}

import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'lac-c-component',
    template: '<span>I am C component</span>'
})

export class LACBComponent {
    constructor() {

    }
}