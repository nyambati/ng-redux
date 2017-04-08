import { NgModule, bootstrap } from './angular/core';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import store from './store';

// import router
import Router from './router';

// import services
import SessionActions from './actions/session';
// import components
import NavBarComponent from './components/navbar/navbar.component';
import LoginComponent from './components/login/login.component';
import RegisterComponent from './components//register/register.component';
import AlertComponent from './components/alert/alert.component';

let appConfig = {
    name: 'ng-redux',
    modules: [uiRouter, ngRedux],
    components: [NavBarComponent, LoginComponent, RegisterComponent, AlertComponent]
}

@NgModule(appConfig)

export class App { }

App.service('SessionActions', SessionActions)
App.config(Router);
App.config(store);

bootstrap(App.name)
