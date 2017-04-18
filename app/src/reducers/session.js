import { LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS, CLEAR_SESSION } from '../actions/actionTypes';

export default function session(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return Object.assign({}, action.session, { isAuthenticated: true, message: 'Login successful' });
        case REGISTER_USER_SUCCESS:
            return Object.assign({}, action.session, { isAuthenticated: true, message: 'signup successful' });
        case CLEAR_SESSION:
            return Object.assign({}, { isAuthenticated: true, message: 'signout successful' })
        default:
            return state;
    }
}
