import {
  FETCHING_SELLINGOFFER_REQUEST,
  FETCHING_SELLINGOFFER_SUCCESS,
  FETCHING_SELLINGOFFER_FAILURE
} from './SellingOfferAction';

const initialState = {
  isFetching: false,
  result: [],
  error: null
};

const SellingOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SELLINGOFFER_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_SELLINGOFFER_SUCCESS:
      return { ...state, isFetching: false, result: action.data };
    case FETCHING_SELLINGOFFER_FAILURE:
      return { ...state, isFetching: false, error: 'error' };
    default:
      return state;
  }
};

export default SellingOfferReducer;
