import session from '../reducers/session';
import users from '../reducers/users';
import errors from '../reducers/errors';
import posts from '../reducers/posts'
import { combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Inject } from '../angular/core'

const reducers = combineReducers({
    session,
    users,
    errors,
    posts
});

const logger = createLogger();

export function store( @Inject($ngReduxProvider) $ngReduxProvider) {
    return $ngReduxProvider.createStoreWith(reducers, [ReduxThunk, logger]);
}

export function initialState( @Inject($ngRedux, UsersActions, PostsActions) $ngRedux, UsersActions, PostsActions) {
    $ngRedux.dispatch(UsersActions.getAllUsers())
    $ngRedux.dispatch(PostsActions.getAllPosts())
    return $ngRedux;
}
