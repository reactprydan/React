import ContractDataSample from '../../ContractDataSample';

export const FETCHING_SOLDCONTRACT_REQUEST = 'FETCHING_SOLDCONTRACT_REQUES';
export const FETCHING_SOLDCONTRACT_SUCCESS = 'FETCHING_SOLDCONTRACT_SUCCESS';
export const FETCHING_SOLDCONTRACT_FAILURE = 'FETCHING_SOLDCONTRACT_FAILURE';

export const fetchingSoldContractRequest = () => ({
  type: FETCHING_SOLDCONTRACT_REQUEST
});

export const fetchingSoldContractSuccess = data => ({
  type: FETCHING_SOLDCONTRACT_SUCCESS,
  data
});

export const fetchingSoldContractFailure = error => ({
  type: FETCHING_SOLDCONTRACT_FAILURE,
  error
});

export function fetchSoldContract() {
  return dispatch => {
    dispatch(fetchingSoldContractRequest());
    setTimeout(() => {
      dispatch(fetchingSoldContractSuccess(ContractDataSample.payload.data));
    }, 2000);
  };
}
