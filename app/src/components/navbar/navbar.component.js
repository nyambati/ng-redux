import { Component, Inject } from '../../angular/core';
import template from './navbar.component.html';
import './navbar.scss';

@Component({
    template
})

export default class NavBar {
    constructor( @Iject($ngRedux, $state, SessionActions) $ngRedux, $state, SessionActions) {
        this.$state = $state;
        function mapStateToThis(state) {
            let { session } = state;
            return {
                session
            }
        }
        this.unsubscribe = $ngRedux.connect(mapStateToThis, SessionActions)(this);
    }

    $onInit() {
        let session = JSON.parse(localStorage.getItem('session'))
        if (session) {
            this.loginUser(session);
            this.$state.go('posts');
        }
    }

    $onDestroy() {
        this.unsubscribe();
    }
}