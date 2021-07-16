import { GET_MY_FAVOURITES_ACTION, GET_ERRORS_ACTION } from '../actions/actionsTypes';

const initialState = {
  myFavourites: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_FAVOURITES_ACTION:
      return { ...state, myFavourites: action.myFavourites };
    case GET_ERRORS_ACTION:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default favouritesReducer;
