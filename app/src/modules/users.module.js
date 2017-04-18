import { NgModule } from '../angular/core';
import UsersRouter from './users.router';
import UsersComponent from '../components/users/users.component';
import UsersActions from '../actions/users';

@NgModule({
    name: 'ng-redux.users',
    modules: [],
    components: [UsersComponent]
})

class UsersModule { }
UsersModule.service('UsersActions', UsersActions)
UsersModule.config(['$stateProvider', UsersRouter]);


export default UsersModule.name;