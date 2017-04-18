import {
    CREATE_POST_SUCCESS,
    GET_ALL_POSTS,
    UPDATE_POSTS_SUCCESS,
    DELETE_POST_SUCCESS,
    CREATE_POST_ERROR,
    UPDATE_POSTS_ERROR,
    DELETE_POST_ERROR,
    GET_ALL_POSTS_ERROR
} from './actionTypes';

import axios from 'axios';
import { Injectable } from '../angular/core';

@Injectable()
export default class PostsActions {
    createPost(post) {
        return dispatch => {
            return axios.post('/api/posts', post)
                .then(response => dispatch(createPostAction(response.data)))
                .catch(error => dispatch(createPostErrorAction(error.data)));
        }
    }

    getAllPosts(post) {
        return dispatch => {
            return axios.get('/api/posts')
                .then(response => dispatch(getAllPostsAction(response.data)))
                .catch(error => dispatch(getAllPostsErrorAction(error.data)));
        }
    }

    updatePosts(post) {
        return dispatch => {
            return axios.put(`/api/posts/${post.id}`, post)
                .then(response => dispatch(updatePostsAction(response.data)))
                .catch(error => dispatch(updatePostsErrorAction(error.data)));
        }
    }

    deletePosts(id) {
        return dispatch => {
            return axios.get(`/api/posts/${id}`)
                .then(response => dispatch(deletePostsAction(response.data)))
                .catch(error => dispatch(deletePostsErrorAction(error.data)));
        }
    }
}

function createPostAction(post) {
    return {
        type: CREATE_POST_SUCCESS,
        post
    }
}

function createPostErrorAction(error) {
    return {
        type: CREATE_POST_ERROR,
        error
    }
}

function getAllPostsAction(posts) {
    return {
        type: GET_ALL_POSTS,
        posts
    }
}

function getAllPostsErrorAction(error) {
    return {
        type: GET_ALL_POSTS_ERROR,
        error
    }
}

function updatePostsAction(post) {
    return {
        type: UPDATE_POSTS_SUCCESS,
        post
    }
}

function updatePostsErrorAction(error) {
    return {
        type: UPDATE_POSTS_ERROR,
        error
    }
}

function deletePostsAction(id) {
    return {
        type: DELETE_POST_SUCCESS,
        id
    }
}

function deletePostsErrorAction(error) {
    return {
        type: DELETE_POST_ERROR,
        error
    }
}