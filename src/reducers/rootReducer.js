// Here Combining all Reducers
import { combineReducers } from 'redux';

// Combine Reducers
// Combine Reducers
import movies from './movies';
import newMovie from './newMovie';

export default combineReducers({
    movies,
    newMovie
});