import {
  FETCHING_BUYINGOFFER_REQUEST,
  FETCHING_BUYINGOFFER_SUCCESS,
  FETCHING_BUYINGOFFER_FAILURE
} from './BuyingOfferAction';

const initialState = {
  isFetching: false,
  result: [],
  error: null
};

const BuyingOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BUYINGOFFER_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_BUYINGOFFER_SUCCESS:
      return { ...state, isFetching: false, result: action.data };
    case FETCHING_BUYINGOFFER_FAILURE:
      return { ...state, isFetching: false, error: 'error' };
    default:
      return state;
  }
};

export default BuyingOfferReducer;
