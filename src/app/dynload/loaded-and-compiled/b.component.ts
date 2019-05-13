declare var module: {
    id: string;
}

import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'lac-b-component',
    template: '<span>I am B component</span>'
})

export class LACBComponent {
    constructor() {

    }
}