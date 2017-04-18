import {
    GET_ALL_USERS_ERROR,
    UPDATE_USER_ERROR,
    DELETE_USER_ERROR,
    REGISTER_USER_ERROR,
    LOGIN_USER_ERROR,
    CLEAR_SESSION_ERRORS,
    CLEAR_All_ERRORS
} from '../actions/actionTypes';

export default function errors(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER_ERROR:
            return Object.assign({}, state, { session: action.error });
        case REGISTER_USER_ERROR:
            return Object.assign({}, state, { session: action.error });
        case GET_ALL_USERS_ERROR:
            return Object.assign({}, state, { users: action.error });
        case UPDATE_USER_ERROR:
            return Object.assign({}, state, { users: action.error });
        case DELETE_USER_ERROR:
            return Object.assign({}, state, { users: action.error });
        case CLEAR_All_ERRORS:
            return {}
        case CLEAR_SESSION_ERRORS:
            return Object.assign({}, state, { session: {} })
        default:
            return state;
    }
}