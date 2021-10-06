import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({
    movieReducer: movieReducer,
    favoriteReducer: favoriteReducer
})
export default rootReducer;