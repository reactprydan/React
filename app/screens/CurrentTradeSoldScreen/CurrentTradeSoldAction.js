import OfferData from '../../OfferData';

export const FETCHING_CURRENT_TRADE_SOLD_REQUEST =
  'FETCHING_CURRENT_TRADE_SOLD_REQUEST';
export const FETCHING_CURRENT_TRADE_SOLD_SUCCESS =
  'FETCHING_CURRENT_TRADE_SOLD_SUCCESS';
export const FETCHING_CURRENT_TRADE_SOLD_FAILURE =
  'FETCHING_CURRENT_TRADE_SOLD_FAILURE';

export const fetchingCurrentTadeSoldRequest = () => ({
  type: FETCHING_CURRENT_TRADE_SOLD_REQUEST
});

export const fetchingCurrentTadeSoldSuccess = data => ({
  type: FETCHING_CURRENT_TRADE_SOLD_SUCCESS,
  data
});

export const fetchingCurrentTadeSoldFailure = error => ({
  type: FETCHING_CURRENT_TRADE_SOLD_FAILURE,
  error
});

export function fetchingCurrentTadeSold() {
  return dispatch => {
    dispatch(fetchingCurrentTadeSoldRequest());
    setTimeout(() => {
      dispatch(fetchingCurrentTadeSoldSuccess(OfferData.payload.data));
    }, 2000);
  };
}
