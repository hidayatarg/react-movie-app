import axios from 'axios';
import { serverUrl} from '../environment/environment';

// action type
export const NEW_MOVIE_FULFILLED = "NEW_MOVIES_FULFILLED";
export const NEW_MOVIE_REJECTED = "NEW_MOVIES_REJECTED";
export const NEW_MOVIE_PENDING = "NEW_MOVIES_PENDING";

export function newMovie() {
    return dispatch => {
        dispatch({
            type: "NEW_MOVIE",
            payload: axios.post(serverUrl + 'movies')
                .then(result => console.log('result: ', result)
                )
        })
    }
}