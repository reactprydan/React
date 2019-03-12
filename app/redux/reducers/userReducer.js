// @flow
import { GET_USER, CHECK_USER } from '../actions/userAction';

const initialState = {
  token: null,
  userType: 'broker',
  isConfirm: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, ...action.payload };
    case CHECK_USER:
      return { ...state, ...action.payload };
    default: {
      return state;
    }
  }
};

export default userReducer;
