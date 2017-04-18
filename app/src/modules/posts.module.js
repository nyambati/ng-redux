import { NgModule } from '../angular/core';
import PostsRouter from './posts.router';
import PostsActions from '../actions/posts';

import PostsComponent from '../components/posts/posts.component';
import PostFormComponent from '../components/posts-form/post.form.component';

@NgModule({
    name: 'ng-redux.posts',
    modules: [],
    providers: [PostsActions],
    components: [PostsComponent, PostFormComponent]
})

class PostsModule { }
PostsModule.config(['$stateProvider', PostsRouter]);

export default PostsModule.name;