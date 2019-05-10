// Here Combining all Reducers
import { combineReducers } from 'redux';

// Combine Reducers
import movies from './movies';

export default combineReducers({
    movies
});