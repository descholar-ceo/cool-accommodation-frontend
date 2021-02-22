export const BASE_API = 'https://cool-accommodation-backend.herokuapp.com/';
export const ALL_ACCOMMODATIONS_API = `${BASE_API}accommodations`;
export const MY_FAVOURITES_API = myId => `${BASE_API}users/${myId}/favourites`;
export const ACCOMMODATION_PROFILE_API = accommId => `${BASE_API}accommodations/${accommId}`;
export const LOGIN_API = `${BASE_API}login`;
