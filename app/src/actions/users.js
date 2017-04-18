import {
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ERROR,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR
} from './actionTypes';

function getAllUsersAction(users) {
    return {
        type: GET_ALL_USERS_SUCCESS,
        users
    }
}

function getAllUsersErrorAction(error) {
    return {
        type: GET_ALL_USERS_ERROR,
        error
    }
}

function updateUserAction(user) {
    return {
        type: UPDATE_USER_SUCCESS,
        user
    }
}

function updateUserErrorAction(error) {
    return {
        type: UPDATE_USER_ERROR,
        error
    }
}

function deleteUserAction(id) {
    return {
        type: DELETE_USER_SUCCESS,
        id
    }
}

function deleteUserErrorAction(error) {
    return {
        type: DELETE_USER_ERROR,
        error
    }
}

export default function UserService($http) {
    function getAllUsers() {
        return dispatch => {
            return $http.get('/api/users')
                .then(response => dispatch(getAllUsersAction(response.data)))
                .catch(error => dispatch(getAllUsersErrorAction({
                    message: 'Failed to fetch all users'
                })))
        }
    }

    function updateUser(user) {
        return dispatch => {
            return $http.put(`/api/users/${user.id}`, user)
                .then(response => dispatch(updateUserAction(response.data)))
                .catch(error => dispatch(updateUserErrorAction({
                    message: `Failed to update user ${user.firstName} ${user.lastName}`
                })));
        }
    }

    function deleteUser(id) {
        return dispatch => {
            return $http.delete(`/api/users/${id}`)
                .then(response => dispatch(deleteUserAction(id)))
                .catch(error => dispatch(deleteUserErrorAction(error.data)));
        }
    }

    return {
        getAllUsers,
        updateUser,
        deleteUser
    }
}