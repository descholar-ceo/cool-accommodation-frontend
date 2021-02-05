import axios from 'axios';
import { BASE_API, MY_FAVOURITES_API } from '../../assets/samples/apis';
import { GET_ALL_FAVOURITES, GET_MY_FAVOURITES } from './actionsTypes';

export const getAllFavouritesAction = () => async dispatch => {
  const favouriteAccomm = await axios.get(BASE_API);
  dispatch({ cities: favouriteAccomm.data, type: GET_ALL_FAVOURITES });
};
export const getMyFavouritesAction = () => async dispatch => {
  const favouriteAccomm = await axios.get(MY_FAVOURITES_API);
  dispatch({ cities: favouriteAccomm.data, type: GET_MY_FAVOURITES });
};
