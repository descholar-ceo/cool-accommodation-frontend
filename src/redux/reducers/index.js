import { combineReducers } from 'redux';
import favouritesReducer from './favourites';
import loginReducer from './login';

export default combineReducers({ favouritesReducer, loginReducer });
