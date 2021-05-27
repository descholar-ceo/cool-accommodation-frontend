import axios from 'axios';
import {
  MY_FAVOURITES_API,
  LOGIN_API,
  ALL_ACCOMMODATIONS_API,
  ADD_ACCOMMODATION_TO_FAVOURITES_API,
  REMOVE_ACCOMMODATION_FROM_FAVOURITES_API,
  SIGNUP_API,
} from '../../assets/samples/apis';
import {
  GET_MY_FAVOURITES_ACTION,
  LOGIN_ACTION,
  CREDENTIAL_TYPING_ACTION,
  GET_ERRORS_ACTION,
  GET_ALL_ACCOMMODATIONS_ACTION,
  SIGNUP_ACTION,
} from './actionsTypes';

export const getAllAccommodations = token => async dispatch => {
  try {
    const accommodations = await axios.get(ALL_ACCOMMODATIONS_API,
      { headers: { token } });
    dispatch({ allAccommodations: accommodations.data, type: GET_ALL_ACCOMMODATIONS_ACTION });
  } catch (err) {
    dispatch({ error: err.response.data, type: GET_ERRORS_ACTION });
  }
};

export const getMyFavouritesAction = (myId, token) => async dispatch => {
  try {
    const favouriteAccomm = await axios.get(MY_FAVOURITES_API(myId), { headers: { token } });
    dispatch({ myFavourites: favouriteAccomm.data, type: GET_MY_FAVOURITES_ACTION });
  } catch (err) {
    dispatch({ error: err.response.error, type: GET_ERRORS_ACTION });
  }
};
export const addAccommToMyFavsAction = (myId, favData, token) => async dispatch => {
  try {
    const favouriteAccomm = await axios
      .post(ADD_ACCOMMODATION_TO_FAVOURITES_API(myId), { favourite: favData },
        { headers: { token } });
    dispatch({ myFavourites: favouriteAccomm.data, type: GET_MY_FAVOURITES_ACTION });
  } catch (err) {
    dispatch({ error: err.response.error, type: GET_ERRORS_ACTION });
  }
};
export const removeAccommFromMyFavsAction = (myId, favId, token) => async dispatch => {
  try {
    const favouriteAccomm = await axios
      .post(REMOVE_ACCOMMODATION_FROM_FAVOURITES_API(myId, favId), { headers: { token } });
    dispatch({ myFavourites: favouriteAccomm.data, type: GET_MY_FAVOURITES_ACTION });
  } catch (err) {
    dispatch({ error: err.response.error, type: GET_ERRORS_ACTION });
  }
};

export const loginAction = credentials => async dispatch => {
  try {
    const results = await axios.post(LOGIN_API, credentials);
    localStorage.setItem('token', JSON.stringify(results.data));
    dispatch({ token: results.data, type: LOGIN_ACTION });
  } catch (err) {
    dispatch({ error: err.response.data, type: GET_ERRORS_ACTION });
  }
};

export const signupAction = userDetails => async dispatch => {
  console.log({ submittedData: userDetails });
  try {
    const results = await axios.post(SIGNUP_API, userDetails);
    localStorage.setItem('token', JSON.stringify(results.data));
    dispatch({ token: results.data, type: SIGNUP_ACTION });
  } catch (err) {
    dispatch({ error: err.response.data, type: GET_ERRORS_ACTION });
  }
};

export const credentialTypingAction = credentials => ({
  credentials, type: CREDENTIAL_TYPING_ACTION,
});
