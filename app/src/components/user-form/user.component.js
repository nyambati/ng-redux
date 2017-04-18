import { Component } from '../../angular/core';
import template from './user.component.html'

@Component({
    template,
    bindings: {
        button: "@",
        onSubmit: '&',
        reset: '&',
        data: '<'
    }
})

export default class UserForm {
    $onInit() {
    }
    submitForm(user) {
        this.onSubmit({ $event: { user } })
    }

    discardChanges() {
        this.reset()
    }
}