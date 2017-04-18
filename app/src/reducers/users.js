import {
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ERROR,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR
} from '../actions/actionTypes';

export default function users(state = [], action) {
    let userIndex;
    switch (action.type) {
        case GET_ALL_USERS_SUCCESS:
            return [...action.users]
        case GET_ALL_USERS_ERROR:
            return state;
        case UPDATE_USER_SUCCESS:
            userIndex = state.findIndex(user => user.id === action.user.id)
            return [...state.slice(0, userIndex), action.user, ...state.slice(userIndex + 1)]
        case UPDATE_USER_ERROR:
            return [...state];
        case DELETE_USER_SUCCESS:
            userIndex = state.findIndex(user => user.id === action.id)
            console.log(userIndex)
            return [...state.slice(0, userIndex), ...state.slice(userIndex + 1)]
        case DELETE_USER_ERROR:
            return [...state];
        default:
            return state;
    }
}