import OfferData from '../../OfferData';

export const FETCHING_TRADDLEOFFER_REQUEST = 'FETCHING_TRADDLEOFFER_REQUEST';
export const FETCHING_TRADDLEOFFER_SUCCESS = 'FETCHING_TRADDLEOFFER_SUCCESS';
export const FETCHING_TRADDLEOFFER_FAILURE = 'FETCHING_TRADDLEOFFER_FAILURE';

export const fetchingTraddleOfferRequest = () => ({
  type: FETCHING_TRADDLEOFFER_REQUEST
});

export const fetchingTraddleOfferSuccess = data => ({
  type: FETCHING_TRADDLEOFFER_SUCCESS,
  data
});

export const fetchingTraddleOfferFailure = error => ({
  type: FETCHING_TRADDLEOFFER_FAILURE,
  error
});

export function fetchTraddleOffer() {
  return dispatch => {
    dispatch(fetchingTraddleOfferRequest());
    setTimeout(() => {
      dispatch(fetchingTraddleOfferSuccess(OfferData.payload.data));
    }, 2000);
  };
}
