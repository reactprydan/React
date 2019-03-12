import {
  FETCHING_MYOFFER_REQUEST,
  FETCHING_MYOFFER_SUCCESS,
  FETCHING_MYFFER_FAILURE
} from './MyOfferAction';

const initialState = {
  result: [],
  isFetching: false
};

const MyOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MYOFFER_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_MYOFFER_SUCCESS:
      return { ...state, isFetching: false, result: action.data };
    case FETCHING_MYFFER_FAILURE:
      return { ...state, isFetching: false, error: 'error' };
    default:
      return state;
  }
};

export default MyOfferReducer;
