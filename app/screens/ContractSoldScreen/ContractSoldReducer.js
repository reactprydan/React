import {
  FETCHING_SOLDCONTRACT_REQUEST,
  FETCHING_SOLDCONTRACT_SUCCESS,
  FETCHING_SOLDCONTRACT_FAILURE
} from './ContractSoldActon';

const initialState = {
  isFetching: false,
  result: [],
  error: null
};

const ContractSoldReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SOLDCONTRACT_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_SOLDCONTRACT_SUCCESS:
      return { ...state, isFetching: false, result: action.data };
    case FETCHING_SOLDCONTRACT_FAILURE:
      return { ...state, isFetching: false, error: 'error' };
    default:
      return state;
  }
};

export default ContractSoldReducer;
