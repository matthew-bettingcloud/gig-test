import { combineReducers } from 'redux';

import categoriesReducer from './categoriesReducer';
import filterReducer from './filterReducer';
import gamesReducer from './gamesReducer';

const reducers = combineReducers({
    categories: categoriesReducer,
    games: gamesReducer,
    filter: filterReducer
});

export default reducers;