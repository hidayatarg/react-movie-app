import { FETCHED_MOVIES, FETCHED_MOVIES_ERROR } from '../actions/movies';

const initialState = {
    fetching: false,
    fetched: false,
    movies: [],
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type){
        case FETCHED_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case FETCHED_MOVIES_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}