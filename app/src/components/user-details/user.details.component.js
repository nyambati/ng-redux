import { Component } from '../../angular/core';
import template from './user.details.component.html'

@Component({
    template,
    bindings: {
        onUpdate: '&',
        onDelete: '&',
        data: '<'
    }
})

export default class UserDetails {
    deleteUser(id) {
        this.onDelete({ $event: { id } })
    }

    updateUser(user) {
        this.onUpdate({ $event: { user } })
    }
}