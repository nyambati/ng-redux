import { NgModule } from '../angular/core';
import LoginComponent from '../components/login/login.component';
import RegisterComponent from '../components//register/register.component';
import AlertComponent from '../components/alert/alert.component';
import SessionActions from '../actions/session';
import AuthRouter from './auth.router'

@NgModule({
    name: 'ng-redux.auth',
    modules: [],
    components: [LoginComponent, RegisterComponent, AlertComponent]
})

class AuthModule { }

AuthModule.service('SessionActions', SessionActions)
AuthModule.config(['$stateProvider', AuthRouter]);

export default AuthModule.name;