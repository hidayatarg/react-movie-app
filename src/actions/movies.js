import axios from 'axios';
import { serverUrl} from '../environment/environment'
export function fetchMovies() {
    return dispatch => {
        axios.get(serverUrl + 'movies')
        .then(result => result.data)
        .then (data => {
            if (data.success){
                console.log('Gelen Data: ', data.data)
            } else {
                console.warn ('data gelmedi')
            }
        })
        .catch( error => console.log(error))
    }
}