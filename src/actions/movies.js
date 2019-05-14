import axios from 'axios';
import { serverUrl} from '../environment/environment';

// action type
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED";

export function fetchMovies() {
    return dispatch => {
        dispatch({
            type: "FETCH_MOVIES",
            payload: axios.get(serverUrl + 'movies')
                .then(result => result.data.data)
        })
    }
}