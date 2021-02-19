import { LOGIN_ACTION, LOGIN_CREDENTIAL_TYPING_ACTION } from '../actions/actionsTypes';

const initialState = {
  token: '',
  loginCredentials: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, token: action.token };
    case LOGIN_CREDENTIAL_TYPING_ACTION:
      return { ...state, loginCredentials: action.credentials };
    default:
      return state;
  }
};

export default loginReducer;
