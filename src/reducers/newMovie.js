import {
    NEW_MOVIE_PENDING,
    NEW_MOVIE_FULFILLED,
    NEW_MOVIE_REJECTED,
    FETCH_MOVIE_PENDING,
    FETCH_MOVIE_FULFILLED,
    FETCH_MOVIE_REJECTED
} from '../actions/newMovie';

const initialState = {
    fetching: false,
    done: false,
    movie: {},
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            };
        case NEW_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };
        case NEW_MOVIE_FULFILLED:
            return {
                ...state,
                movies: action.payload,
                fetching: false,
                // when data come
                done: true
            };
// fetching movie
        case FETCH_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            };
        case FETCH_MOVIE_REJECTED:
            return {
                ...state,
                fetching: false               
            };
        case FETCH_MOVIE_FULFILLED:
            return {
                ...state,
                movie: action.payload,
                fetching: false
            };
     
        default:
            return state;
    }
}