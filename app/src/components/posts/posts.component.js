import { Component, Inject } from '../../angular/core';
import template from './posts.component.html'

@Component({
    template
})

export default class PostsList {
    constructor( @Inject($ngRedux, PostsActions) $ngRedux, PostsActions) {

        function mapStateToThis(state) {
            let { errors, posts, session } = state;
            return {
                errors,
                posts,
                session
            }
        }

        function mapActionsToThis() {
            let { createPost } = PostsActions;
            return {
                createPost
            }
        }

        this.header = "Write some awesome post"
        this.unsubscribe = $ngRedux.connect(mapStateToThis, mapActionsToThis())(this)
    }

    addPost(event) {
        this.createPost(Object.assign({}, event.data, { userId: this.session.id }))
    }

    $onDestroy() {
        this.unsubscribe();
    }
}