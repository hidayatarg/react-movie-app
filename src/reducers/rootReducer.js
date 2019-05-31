// Here Combining all Reducers
import { combineReducers } from 'redux';

// Combine Reducers
// Combine Reducers
import movies from './movies';
import newMovie from './newMovie';
import login from './login';

export default combineReducers({
    login,
    movies,
    newMovie
});