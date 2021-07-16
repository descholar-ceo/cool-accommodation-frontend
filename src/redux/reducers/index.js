import { combineReducers } from 'redux';
import favouritesReducer from './favourites';
import loginReducer from './login';
import accommodationsReducer from './accommodation';
import signupReducer from './signup';

export default combineReducers({
  favouritesReducer, loginReducer, accommodationsReducer, signupReducer,
});
