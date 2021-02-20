import { GET_ERRORS_ACTION, LOGIN_ACTION, LOGIN_CREDENTIAL_TYPING_ACTION } from '../actions/actionsTypes';

const initialState = {
  token: '',
  loginCredentials: {},
  error: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, token: action.token };
    case LOGIN_CREDENTIAL_TYPING_ACTION:
      return { ...state, loginCredentials: action.credentials };
    case GET_ERRORS_ACTION:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default loginReducer;
