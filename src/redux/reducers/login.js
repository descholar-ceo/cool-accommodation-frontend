import { LOGIN_ACTION } from '../actions/actionsTypes';

const initialState = {
  token: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default loginReducer;
