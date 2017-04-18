import { NgModule, bootstrap } from './angular/core';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import { store } from './store';
import { initialState } from './store'

import AuthModule from './modules/auth.module';
import UsersModule from './modules/users.module';
import PostsModule from './modules/posts.module';
import NavBarComponent from './components/navbar/navbar.component';
import UserFormComponent from './components/user-form/user.component';
import UserDetailsComponent from './components/user-details/user.details.component';

@NgModule({
    name: 'ng-redux',
    modules: [uiRouter, ngRedux, AuthModule, UsersModule, PostsModule],
    components: [NavBarComponent, UserFormComponent, UserDetailsComponent]
})

export default class App { }

App.config(store);
App.config($locationProvider => $locationProvider.html5Mode(true));
App.run(initialState)

bootstrap(App.name)
