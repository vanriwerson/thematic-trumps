import { combineReducers } from 'redux';
import settings from './settings';
import player from './player';

const rootReducer = combineReducers({ settings, player });

export default rootReducer;
