import {
  FETCHING_CURRENT_TRADE_BROUGHT_REQUEST,
  FETCHING_CURRENT_TRADE_BROUGHT_SUCCESS,
  FETCHING_CURRENT_TRADE_BROUGHT_FAILURE
} from './CurrentTradeBoughtAction';

const initialState = {
  isFetching: false,
  result: [],
  error: null
};

const CurrentTradeBought = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CURRENT_TRADE_BROUGHT_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_CURRENT_TRADE_BROUGHT_SUCCESS:
      return { ...state, isFetching: false, result: action.data };
    case FETCHING_CURRENT_TRADE_BROUGHT_FAILURE:
      return { ...state, isFetching: false, error: 'error' };
    default:
      return state;
  }
};

export default CurrentTradeBought;
