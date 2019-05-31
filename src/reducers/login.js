import {
    LOGIN_FULFILLED,
    LOGIN_REJECTED,
    LOGIN_PENDING
} from '../actions/login';

const initialState = {
    fetching: false,
    done: false,
    token: {},
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

        default:
            return state;
    }
}