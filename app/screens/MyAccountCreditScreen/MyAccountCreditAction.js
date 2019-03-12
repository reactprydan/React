import OfferData from '../../DebitData';

export const CREDIT_DETAIL_FETCHING = 'CREDIT_DETAIL_FETCHING';
export const CREDIT_DETAIL_SUCCESS = 'CREDIT_DETAIL_SUCCESS';
export const CREDIT_DETAIL_FAILURE = 'CREDIT_DETAIL_FAILURE';

export const fetchingMyCreditDetailRequest = () => ({
  type: CREDIT_DETAIL_FETCHING
});

export const fetchingMyCreditDetailSuccess = data => ({
  type: CREDIT_DETAIL_SUCCESS,
  data
});

export const fetchingMyCreditFailure = error => ({
  type: CREDIT_DETAIL_FAILURE,
  error
});

export function fetchMyCreditDetail() {
  return dispatch => {
    dispatch(fetchingMyCreditDetailRequest());
    setTimeout(() => {
      dispatch(fetchingMyCreditDetailSuccess(OfferData.payload.data));
    }, 2000);
  };
}
