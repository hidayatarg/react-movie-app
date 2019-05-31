import {
    LOGIN_FULFILLED,
    LOGIN_REJECTED,
    LOGIN_PENDING
} from '../actions/login';

const initialState = {
    fetching: false,
    done: false,
    error: {},
};

export default (state = initialStatem, action) => {
    switch(action.type){
        case LOGIN_PENDING:
            return {
                ...state,
                fetching: true
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
                // token: action.payload,
                fetching: false,
                done: true
            }
    }
}