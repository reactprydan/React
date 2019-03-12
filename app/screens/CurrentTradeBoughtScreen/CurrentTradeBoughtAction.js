import OfferData from '../../OfferData';

export const FETCHING_CURRENT_TRADE_BROUGHT_REQUEST =
  'FETCHING_CURRENT_TRADE_BROUGHT_REQUEST';
export const FETCHING_CURRENT_TRADE_BROUGHT_SUCCESS =
  'FETCHING_CURRENT_TRADE_BROUGHT_SUCCESS';
export const FETCHING_CURRENT_TRADE_BROUGHT_FAILURE =
  'FETCHING_CURRENT_TRADE_BROUGHT_FAILURE';

export const fetchingCurrentTadeBroghtRequest = () => ({
  type: FETCHING_CURRENT_TRADE_BROUGHT_REQUEST
});

export const fetchingCurrentTadeBroghtSuccess = data => ({
  type: FETCHING_CURRENT_TRADE_BROUGHT_SUCCESS,
  data
});

export const fetchingCurrentTadeBroghtFailure = error => ({
  type: FETCHING_CURRENT_TRADE_BROUGHT_FAILURE,
  error
});

export function fetchingCurrentTadeBroght() {
  return dispatch => {
    dispatch(fetchingCurrentTadeBroghtRequest());
    setTimeout(() => {
      dispatch(fetchingCurrentTadeBroghtSuccess(OfferData.payload.data));
    }, 2000);
  };
}
