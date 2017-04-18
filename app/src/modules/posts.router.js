import { Inject } from '../angular/core';
const PostsRouter = {
    name: 'posts',
    url: '/posts',
    template: '<posts-list> </posts-list>',
};


export default function Router( @Inject($stateProvider) $stateProvider) {
    $stateProvider.state(PostsRouter);
    return $stateProvider;
}