import { GET_ERRORS_ACTION, SIGNUP_ACTION, SIGNUP_DETAILS_TYPING_ACTION } from '../actions/actionsTypes';

const initialState = {
  token: '',
  error: '',
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_ACTION:
      return { ...state, token: action.token };
    case SIGNUP_DETAILS_TYPING_ACTION:
      return { ...state, signupDetails: action.signupDetails };
    case GET_ERRORS_ACTION:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default signupReducer;
