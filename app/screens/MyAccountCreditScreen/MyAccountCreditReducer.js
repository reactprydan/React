import {
  CREDIT_DETAIL_FETCHING,
  CREDIT_DETAIL_SUCCESS,
  CREDIT_DETAIL_FAILURE
} from './MyAccountCreditAction';

const initialState = {
  isFetching: false,
  result: [],
  error: null
};

const CreditDetails = (state = initialState, action) => {
  switch (action.type) {
    case CREDIT_DETAIL_FETCHING:
      return { ...state, isFetching: true };
    case CREDIT_DETAIL_SUCCESS:
      return { ...state, isFetching: false, result: action.data };
    case CREDIT_DETAIL_FAILURE:
      return { ...state, isFetching: false, error: 'error' };
    default:
      return state;
  }
};

export default CreditDetails;
