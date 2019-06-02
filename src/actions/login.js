import axios from 'axios';
import { serverUrl } from '../environment/environment';

// action type
export const LOGIN_FULFILLED = "LOGIN_FULFILLED";
export const LOGIN_REJECTED = "LOGIN_REJECTED";
export const LOGIN_PENDING = "LOGIN_PENDING";

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
                })
        })
    }
}