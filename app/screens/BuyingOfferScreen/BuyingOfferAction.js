import ContractDataSample from '../../ContractDataSample';

export const FETCHING_BUYINGOFFER_REQUEST = 'FETCHING_BUYINGOFFER_REQUEST';
export const FETCHING_BUYINGOFFER_SUCCESS = 'FETCHING_BUYINGOFFER_SUCCESS';
export const FETCHING_BUYINGOFFER_FAILURE = 'FETCHING_BUYINGOFFER_FAILURE';

export const fetchingByuingOfferRequest = () => ({
  type: FETCHING_BUYINGOFFER_REQUEST
});

export const fetchingByuingOfferSuccess = data => ({
  type: FETCHING_BUYINGOFFER_SUCCESS,
  data
});

export const fetchingByuingOfferFailure = error => ({
  type: FETCHING_BUYINGOFFER_FAILURE,
  error
});

export function fetchBuyingOffer() {
  return dispatch => {
    dispatch(fetchingByuingOfferRequest());
    setTimeout(() => {
      dispatch(fetchingByuingOfferSuccess(ContractDataSample.payload.data));
    }, 2000);
  };
}
