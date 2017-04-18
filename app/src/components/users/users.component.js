import { Component, Inject } from '../../angular/core';
import template from './users.component.html';

@Component({
    template
})

export default class UsersInfo {
    constructor( @Iject($ngRedux, UsersActions) $ngRedux, UsersActions) {
        function mapStateToThis(state) {
            let { errors, users } = state;
            return { errors, users };
        }

        this.unsubscribe = $ngRedux.connect(mapStateToThis, UsersActions)(this)
    }

    showUpdateForm(event) {
        this.backUp = Object.assign({}, event.user);
        this.user = Object.assign({}, event.user);
    }

    removeUser(event) {
        this.deleteUser(event.id)
    }

    updateUserDetails(event) {
        this.updateUser(event.user);
        this.user = null;
    }

    discardChanges() {
        this.user = Object.assign({}, this.backUp)
    }

    $onDestroy() {
        this.unsubscribe();
    }

}