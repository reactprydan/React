import {
  DEBIT_DETAIL_FETCHING,
  DEBIT_DETAIL_SUCCESS,
  DEBIT_DETAIL_FAILURE
} from './MyAccountDebitAction';

const initialState = {
  isFetching: false,
  result: [],
  error: null
};

const DebitDetails = (state = initialState, action) => {
  switch (action.type) {
    case DEBIT_DETAIL_FETCHING:
      return { ...state, isFetching: true };
    case DEBIT_DETAIL_SUCCESS:
      return { ...state, isFetching: false, result: action.data };
    case DEBIT_DETAIL_FAILURE:
      return { ...state, isFetching: false, error: 'error' };
    default:
      return state;
  }
};

export default DebitDetails;
