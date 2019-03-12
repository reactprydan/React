import OfferData from '../../DebitData';

export const DEBIT_DETAIL_FETCHING = 'DEBIT_DETAIL_FETCHING';
export const DEBIT_DETAIL_SUCCESS = 'DEBIT_DETAIL_SUCCESS';
export const DEBIT_DETAIL_FAILURE = 'DEBIT_DETAIL_FAILURE';

export const fetchingMyDebitDetailRequest = () => ({
  type: DEBIT_DETAIL_FETCHING
});

export const fetchingMyDebitDetailSuccess = data => ({
  type: DEBIT_DETAIL_SUCCESS,
  data
});

export const fetchingMyOfferFailure = error => ({
  type: DEBIT_DETAIL_FAILURE,
  error
});

export function fetchMyDebitDetail() {
  return dispatch => {
    dispatch(fetchingMyDebitDetailRequest());
    setTimeout(() => {
      dispatch(fetchingMyDebitDetailSuccess(OfferData.payload.data));
    }, 2000);
  };
}
