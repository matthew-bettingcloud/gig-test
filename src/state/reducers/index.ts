import { combineReducers } from 'redux';

import categoriesReducer from './categoriesReducer';
import gamesReducer from './gamesReducer';

const reducers = combineReducers({
    categories: categoriesReducer,
    games: gamesReducer
});

export default reducers;