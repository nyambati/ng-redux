import { Inject } from '../angular/core';
const UsersRouter = {
    name: 'users',
    url: '/users',
    template: '<users-info> </users-info>',
};


export default function Router( @Inject($stateProvider) $stateProvider) {
    $stateProvider.state(UsersRouter);
    return $stateProvider;
}