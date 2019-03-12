import {
  FETCHING_CURRENT_TRADE_SOLD_REQUEST,
  FETCHING_CURRENT_TRADE_SOLD_SUCCESS,
  FETCHING_CURRENT_TRADE_SOLD_FAILURE
} from './CurrentTradeSoldAction';

const initialState = {
  isFetching: false,
  result: [],
  error: null
};

const CurrentTradeSold = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CURRENT_TRADE_SOLD_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_CURRENT_TRADE_SOLD_SUCCESS:
      return { ...state, isFetching: false, result: action.data };
    case FETCHING_CURRENT_TRADE_SOLD_FAILURE:
      return { ...state, isFetching: false, error: 'error' };
    default:
      return state;
  }
};

export default CurrentTradeSold;
