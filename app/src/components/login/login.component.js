import { Component, Inject } from '../../angular/core';
import template from './login.component.html';
import './login.scss';

@Component({
    template
})

export default class UserLogin {
    constructor( @Inject($ngRedux, SessionActions) $ngRedux, SessionActions) {
        this.unsubscribe = $ngRedux.connect(mapStateToThis, SessionActions)(this);
    }

    $onDestroy() {
        if (this.errors.session && this.errors.session.message) {
            this.clearSessionErrors()
        }
        return this.unsubscribe();
    }

    login(user) {
        this.loginUser(user);
        return this.user = null;
    }
}

function mapStateToThis(state) {
    let { session, errors } = state;
    return { session, errors };
}