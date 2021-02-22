import { combineReducers } from 'redux';
import favouritesReducer from './favourites';
import loginReducer from './login';
import accommodationsReducer from './accommodation';

export default combineReducers({ favouritesReducer, loginReducer, accommodationsReducer });
