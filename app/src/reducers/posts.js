import initialState from '../store/state';
import {
    CREATE_POST_SUCCESS,
    GET_ALL_POSTS,
    UPDATE_POSTS_SUCCESS,
    DELETE_POST_SUCCESS
} from '../actions/actionTypes';

function getPostIndex(postsArray, postId) {
    return postsArray.findIndex(post => post.id === postId);
}

export default function posts(state = initialState.posts, action) {
    let postIndex;
    switch (action.type) {
        case CREATE_POST_SUCCESS:
            return [...state, action.post];
        case GET_ALL_POSTS:
            return [...action.posts];
        case UPDATE_POSTS_SUCCESS:
            postIndex = getPostIndex(state, action.post.id);
            return [...state.slice(0, postIndex), action.post, ...state.slice(postIndex + 1)];
        case DELETE_POST_SUCCESS:
            postIndex = getPostIndex(state, action.id);
            return [...state.slice(0, postIndex), ...state.slice(postIndex + 1)];
        default:
            return state;
    }
}