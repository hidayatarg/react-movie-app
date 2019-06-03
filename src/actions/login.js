import axios from 'axios';
import { serverUrl } from '../environment/environment';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
// action type
export const LOGIN_FULFILLED = "LOGIN_FULFILLED";
export const LOGIN_REJECTED = "LOGIN_REJECTED";
export const LOGIN_PENDING = "LOGIN_PENDING";

export const SET_CURRENT_USER = "SET_CURRENT_USER"

export function setCurrentUser(user) {
    return {
       type: SET_CURRENT_USER,
       user
    }
}

export function logout() {
    return dispatch => {
        // remove token
        localStorage.removeItem('token');
        // set authorization token
        // delete authorization header from future requests
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));

    }
}

export function loginUser({ username, password }) {
    return dispatch => {
        const data = { username, password }
        dispatch({
            type: "LOGIN",
            payload: axios.post(serverUrl + 'auth/login', data)
                .then(result => {
                    const token = result.data.token
                    console.log('cikan data: ' ,result.data);
                    localStorage.setItem('token', token);
                    setAuthorizationToken(token);
                    console.log('decode token sonucu: ', jwt.decode(token));
                    dispatch(setCurrentUser(jwt.decode(token)));
                })
        })
    }
}