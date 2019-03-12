import ContractDataSample from '../../ContractDataSample';

export const FETCHING_SELLINGOFFER_REQUEST = 'FETCHING_SELLINGOFFER_REQUEST';
export const FETCHING_SELLINGOFFER_SUCCESS = 'FETCHING_SELLINGOFFER_SUCCESS';
export const FETCHING_SELLINGOFFER_FAILURE = 'FETCHING_SELLINGOFFER_FAILURE';

export const fetchingSellingOfferRequest = () => ({
  type: FETCHING_SELLINGOFFER_REQUEST
});

export const fetchingSellingOfferSuccess = data => ({
  type: FETCHING_SELLINGOFFER_SUCCESS,
  data
});

export const fetchingSellingOfferFailure = error => ({
  type: FETCHING_SELLINGOFFER_FAILURE,
  error
});

export function fetchSellingOffer() {
  return dispatch => {
    dispatch(fetchingSellingOfferRequest());
    setTimeout(() => {
      dispatch(fetchingSellingOfferSuccess(ContractDataSample.payload.data));
    }, 2000);
  };
}
