import { Component } from '../../angular/core';
import template from './alert.component.html';

@Component({
    bindings: {
        error: '<',
        success: '<'
    },
    template
})

export default class Alert {
    constructor() {
        this.class = ''
    }

    $onChanges() {
        if (this.error !== undefined) {
            this.class = 'danger'
            this.message = this.error;
        }
        if (this.success) {
            this.class = 'success'
            this.message = this.success
        }
    }
}