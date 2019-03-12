import {
  FETCHING_CONTRACT_REQUEST,
  FETCHING_CONTRACT_SUCCESS,
  FETCHING_CONTRACT_FAILURE
} from './ContractBoughtAction';

const initialState = {
  isFetching: false,
  result: [],
  error: null
};

const ContractReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CONTRACT_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_CONTRACT_SUCCESS:
      return { ...state, isFetching: false, result: action.data };
    case FETCHING_CONTRACT_FAILURE:
      return { ...state, isFetching: false, error: 'error' };
    default:
      return state;
  }
};

export default ContractReducer;
