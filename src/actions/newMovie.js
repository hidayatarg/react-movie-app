import axios from 'axios';
import { serverUrl} from '../environment/environment';

// action type
export const NEW_MOVIE_FULFILLED = "NEW_MOVIES_FULFILLED";
export const NEW_MOVIE_REJECTED = "NEW_MOVIES_REJECTED";
export const NEW_MOVIE_PENDING = "NEW_MOVIES_PENDING";

export function onNewMovieSubmit({ title, cover }) {
    const data = {title, cover}
    console.log('data: ', data);
    return dispatch => {
        dispatch({
            type: "NEW_MOVIE",
            payload: axios.post(serverUrl + 'movies', data )
                .then(result => console.log('result: ', result)
                )
        })
    }
}