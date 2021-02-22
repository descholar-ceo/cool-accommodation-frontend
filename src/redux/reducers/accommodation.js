import { GET_ALL_ACCOMMODATIONS_ACTION } from '../actions/actionsTypes';

const initialState = {
  allFavourites: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ACCOMMODATIONS_ACTION:
      return { ...state, allFavourites: action.allFavourites };
    default:
      return state;
  }
};

export default favouritesReducer;
