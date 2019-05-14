import axios from 'axios';
import { serverUrl} from '../environment/environment';

// action type
export const FETCHED_MOVIES = "FETCHED_MOVIES";
export const FETCHED_MOVIES_ERROR = "FETCHED_MOVIES_ERROR";

export function fetchMovies() {
    return dispatch => {
        axios.get(serverUrl + 'movies')
        .then(result => result.data)
        // use it in the reducer
        .then (data => dispatch({
            type: FETCHED_MOVIES,
            payload: data.data
        }))
        .catch( error => dispatch ({
            type: FETCHED_MOVIES_ERROR,
            payload: error    
        }))
    }
}