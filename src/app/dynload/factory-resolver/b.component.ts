declare var module: {
    id: string;
}

import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'fr-b-component',
    template: '<span>I am B component</span>'
})

export class FRBComponent {
    constructor() {

    }
}