import { GET_ALL_FAVOURITES_ACTION, GET_MY_FAVOURITES_ACTION } from '../actions/actionsTypes';
import { favourites } from '../../assets/samples/sample-accommodations';

const initialState = {
  allFavourites: favourites,
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_FAVOURITES_ACTION:
      return { ...state, myFavourites: action.myFavourites };
    case GET_ALL_FAVOURITES_ACTION:
      return { ...state, allFavourites: action.allFavourites };
    default:
      return state;
  }
};

export default favouritesReducer;
