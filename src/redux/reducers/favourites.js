import { GET_MY_FAVOURITES_ACTION } from '../actions/actionsTypes';
import { favourites } from '../../assets/samples/sample-accommodations';

const initialState = {
  allFavourites: favourites,
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_FAVOURITES_ACTION:
      return { ...state, myFavourites: action.myFavourites };
    default:
      return state;
  }
};

export default favouritesReducer;
