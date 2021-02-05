import axios from 'axios';
import {
  BASE_API, MY_FAVOURITES_API,
  ACCOMMODATION_PROFILE_API,
} from '../../assets/samples/apis';
import {
  GET_ALL_FAVOURITES_ACTION,
  GET_MY_FAVOURITES_ACTION,
  GET_ACCOMMODATION_PROFILE,
} from './actionsTypes';

export const getAllFavouritesAction = () => async dispatch => {
  const favouriteAccomm = await axios.get(BASE_API);
  dispatch({ allFavourites: favouriteAccomm.data, type: GET_ALL_FAVOURITES_ACTION });
};

export const getMyFavouritesAction = () => async dispatch => {
  const favouriteAccomm = await axios.get(MY_FAVOURITES_API);
  dispatch({ myFavourites: favouriteAccomm.data, type: GET_MY_FAVOURITES_ACTION });
};

export const getAccommodationProfile = accommId => async dispatch => {
  const accommProfile = await axios.get(ACCOMMODATION_PROFILE_API(accommId));
  dispatch({ accommodationProfile: accommProfile.data, type: GET_ACCOMMODATION_PROFILE });
};
