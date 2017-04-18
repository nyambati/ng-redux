import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    CLEAR_SESSION_ERRORS
} from './actionTypes';

function registerUserAction(session) {
    return {
        type: REGISTER_USER_SUCCESS,
        session,
    };
}

function registerUserErrorAction(error) {
    return {
        type: REGISTER_USER_ERROR,
        error,
    };
}

function loginUserAction(session) {
    return {
        type: LOGIN_USER_SUCCESS,
        session,
    };
}

function loginUserErrorAction(error) {
    return {
        type: LOGIN_USER_ERROR,
        error,
    };
}

function clearSessionErrorsAction() {
    return {
        type: CLEAR_SESSION_ERRORS
    }
}

function clearSession() {
    return {
        type: CLEAR_SESSION
    }
}

export default function SessionService($http) {
    function registerUser(user) {
        return dispatch => $http.post('/api/users', user)
            .then(response => dispatch(registerUserAction(response.data)))
            .catch(error => dispatch(registerUserErrorAction({
                message: 'Register user failed check your crendials and try again',
            })));
    }

    function loginUser(user) {
        return dispatch => $http.get(`/api/users?email=${user.email}`)
            .then((response) => {
                if (Object.keys(response.data[0]).length !== 5) {
                    return dispatch(loginUserErrorAction({
                        message: 'Login failed check your crendials and try again',
                    }));
                }
                localStorage.setItem('session', JSON.stringify(response.data[0]))
                return dispatch(loginUserAction(response.data[0]));
            })
            .catch(error => dispatch(loginUserErrorAction({
                message: 'Login user failed check your crendials and try again',
            })));
    }

    function clearSessionErrors() {
        return dispatch => dispatch(clearSessionErrorsAction());
    }

    function logOut() {
        return dispatch => dispatch(clearSession());
    }

    return {
        loginUser,
        registerUser,
        clearSessionErrors
    };
}
