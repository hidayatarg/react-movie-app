import axios from 'axios';
import { serverUrl} from '../environment/environment';

// action type
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED";
export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";

// action type
export const DELETE_MOVIE_FULFILLED = "DELETE_MOVIE_FULFILLED";
export const DELETE_MOVIE_REJECTED = "DELETE_MOVIE_REJECTED";
export const DELETE_MOVIE_PENDING = "DELETE_MOVIE_PENDING";

export function fetchMovies() {
    return dispatch => {
        dispatch({
            type: "FETCH_MOVIES",
            payload: axios.get(serverUrl + 'movies')
                .then(result => result.data.data)
        })
    }
}

// DELETE movie
export function deleteMovie(id) {
    return dispatch => {
        dispatch({
            type: "DELETE_MOVIE",
            payload: axios.delete(serverUrl + 'movies/' + id)
                .then(result => {
                    const res = Object.assign({}, result, { id })
                    console.log('REESS', res)
                    return res
                })
        })
    }
}