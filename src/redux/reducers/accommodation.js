import { GET_ALL_ACCOMMODATIONS_ACTION, GET_ERRORS_ACTION } from '../actions/actionsTypes';
import { accommodations } from '../../assets/samples/sample-accommodations';

const initialState = {
  allAccommodations: accommodations,
};

const accommodationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ACCOMMODATIONS_ACTION:
      return { ...state, allAccommodations: action.allAccommodations };
    case GET_ERRORS_ACTION:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default accommodationsReducer;
