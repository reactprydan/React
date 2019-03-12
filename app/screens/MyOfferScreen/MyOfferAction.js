import OfferData from '../../OfferData';

export const FETCHING_MYOFFER_REQUEST = 'FETCHING_MYOFFER_REQUEST';
export const FETCHING_MYOFFER_SUCCESS = 'FETCHING_MYOFFER_SUCCESS';
export const FETCHING_MYFFER_FAILURE = 'FETCHING_MYFFER_FAILURE';

export const fetchingMyOfferRequest = () => ({
  type: FETCHING_MYOFFER_REQUEST
});

export const fetchingMyOfferSuccess = data => ({
  type: FETCHING_MYOFFER_SUCCESS,
  data
});

export const fetchingMyOfferFailure = error => ({
  type: FETCHING_MYFFER_FAILURE,
  error
});

export function fetchMyOffer() {
  return dispatch => {
    dispatch(fetchingMyOfferRequest());
    setTimeout(() => {
      dispatch(fetchingMyOfferSuccess(OfferData.payload.data));
    }, 2000);
  };
}
