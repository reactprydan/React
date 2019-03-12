import ContractDataSample from '../../ContractDataSample';

export const FETCHING_CONTRACT_REQUEST = 'FETCHING_CONTRACT_REQUEST';
export const FETCHING_CONTRACT_SUCCESS = 'FETCHING_CONTRACT_SUCCESS';
export const FETCHING_CONTRACT_FAILURE = 'FETCHING_CONTRACT_FAILURE';

export const fetchingByuingOfferRequest = () => ({
  type: FETCHING_CONTRACT_REQUEST
});

export const fetchingByuingOfferSuccess = data => ({
  type: FETCHING_CONTRACT_SUCCESS,
  data
});

export const fetchingByuingOfferFailure = error => ({
  type: FETCHING_CONTRACT_FAILURE,
  error
});

export function fetchContractData() {
  return dispatch => {
    dispatch(fetchingByuingOfferRequest());
    setTimeout(() => {
      dispatch(fetchingByuingOfferSuccess(ContractDataSample.payload.data));
    }, 2000);
  };
}
