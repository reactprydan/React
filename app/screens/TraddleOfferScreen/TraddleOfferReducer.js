import {
  FETCHING_TRADDLEOFFER_REQUEST,
  FETCHING_TRADDLEOFFER_SUCCESS,
  FETCHING_TRADDLEOFFER_FAILURE
} from './TraddleOfferAction';

const initialState = {
  result: [],
  isFetching: false
};

const TraddleOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TRADDLEOFFER_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_TRADDLEOFFER_SUCCESS:
      return { ...state, isFetching: false, result: action.data };
    case FETCHING_TRADDLEOFFER_FAILURE:
      return { ...state, isFetching: false, error: 'error' };
    default:
      return state;
  }
};

export default TraddleOfferReducer;
