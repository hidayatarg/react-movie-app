import {
    LOGIN_FULFILLED,
    LOGIN_REJECTED,
    LOGIN_PENDING,
    SET_CURRENT_USER
} from '../actions/login';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    fetching: false,
    isAuthenticated: false,
    done: false,
    user: {},
    error: {}
};

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN_PENDING:
            return {
                ...state,
                fetching: true,
                done: false
            };
        case LOGIN_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };
        case LOGIN_FULFILLED:
            return {
                // set the token 
                ...state,
                // token: action.payload.token,
                fetching: false,
                done: true
            }
        // get the current user information
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };

        default:
            return state;
    }
}