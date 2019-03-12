import OfferData from '../../OfferData';

export const FETCHING_BUYINGOFFER_DETAIL_REQUEST =
  'FETCHING_BUYINGOFFER_DETAIL_REQUEST';
export const FETCHING_BUYINGOFFER_DETAIL_SUCCESS =
  'FETCHING_BUYINGOFFER_DETAIL_SUCCESS';
export const FETCHING_BUYINGOFFER_DETAIL_FAILURE =
  'FETCHING_BUYINGOFFER_DETAIL_FAILURE';

export const fetchingByuingOfferDetailRequest = () => ({
  type: FETCHING_BUYINGOFFER_DETAIL_REQUEST
});

export const fetchingByuingOfferDetailSuccess = data => ({
  type: FETCHING_BUYINGOFFER_DETAIL_SUCCESS,
  data
});

export const fetchingByuingOfferDetailFailure = error => ({
  type: FETCHING_BUYINGOFFER_DETAIL_FAILURE,
  error
});

export function fetchBuyingOfferDetail() {
  return dispatch => {
    dispatch(fetchingByuingOfferDetailRequest());
    setTimeout(() => {
      dispatch(fetchingByuingOfferDetailSuccess(OfferData.payload.data));
    }, 2000);
  };
}
