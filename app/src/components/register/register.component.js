import { Component } from '../../angular/core';
import template from './register.component.html';
import './register.scss';

@Component({
    template
})

export default class UserRegister {
    constructor( @Inject($ngRedux, SessionActions) $ngRedux, SessionActions) {
        function mapStateToThis(state) {
            let { session } = state;
            return { session };
        }

        this.unsubscribe = $ngRedux.connect(mapStateToThis, SessionActions)(this);
    }

    $onDestroy() {
        this.unsubscribe();
        this.session.message = null
        this.session.error = null
    }

    register(event) {
        this.registerUser(event.user);
        return this.user = null;
    }
}