import { GET_ERRORS_ACTION, SIGNUP_ACTION, CREDENTIAL_TYPING_ACTION } from '../actions/actionsTypes';

const initialState = {
  token: '',
  signupDetails: {},
  error: '',
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_ACTION:
      return { ...state, token: action.token };
    case CREDENTIAL_TYPING_ACTION:
      return { ...state, signupDetails: action.credentials };
    case GET_ERRORS_ACTION:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default signupReducer;
