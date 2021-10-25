import { combineReducers } from 'redux';

import categoriesReducer from './categoriesReducer';
import filterReducer from './filterReducer';
import gamesReducer from './gamesReducer';
import viewModeReducer from './viewModeReducer';

const reducers = combineReducers({
    categories: categoriesReducer,
    games: gamesReducer,
    filter: filterReducer,
    viewMode: viewModeReducer
});

export default reducers;