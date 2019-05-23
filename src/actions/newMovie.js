import axios from 'axios';
import { serverUrl} from '../environment/environment';

// action type
export const NEW_MOVIE_FULFILLED = "NEW_MOVIE_FULFILLED";
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED";
export const NEW_MOVIE_PENDING = "NEW_MOVIE_PENDING";

export function onNewMovieSubmit({ title, cover }) {
    const data = {title, cover}
    return dispatch => {
        dispatch({
            type: "NEW_MOVIE",
            payload: axios.post(serverUrl + 'moviessss', data )
                .then(result => console.log('result: ', result))
        })
    }
}