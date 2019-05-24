import axios from 'axios';
import { serverUrl} from '../environment/environment';

// action type
export const NEW_MOVIE_FULFILLED = "NEW_MOVIE_FULFILLED";
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED";
export const NEW_MOVIE_PENDING = "NEW_MOVIE_PENDING";

// action type for fetch movies
export const FETCH_MOVIE_FULFILLED = "FETCH_MOVIE_FULFILLED";
export const FETCH_MOVIE_REJECTED = "FETCH_MOVIE_REJECTED";
export const FETCH_MOVIE_PENDING = "FETCH_MOVIE_PENDING";

export function onNewMovieSubmit({ title, cover }) {
    const data = {title, cover}
    return dispatch => {
        dispatch({
            type: "NEW_MOVIE",
            payload: axios.post(serverUrl + 'movies', data )
                .then(result => console.log('result: ', result))
        })
    }
}

// GET:Id movie by Id
export function fetchMovie(id) {
    return dispatch => {
        dispatch({
            type: "FETCH_MOVIE",
            payload: axios.get(serverUrl + 'movies/' + id)
                .then(result => result.data)
        })
    }
}