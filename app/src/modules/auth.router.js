import { Inject } from '../angular/core';
const LoginRouter = {
    name: 'login',
    url: '/',
    template: '<user-login> </user-login>',
};

const RegisterRouter = {
    name: 'register',
    url: '/register',
    template: '<user-register> </user-register>',
};

export default function Router($stateProvider) {
    $stateProvider.state(LoginRouter);
    $stateProvider.state(RegisterRouter);
    return $stateProvider;
}