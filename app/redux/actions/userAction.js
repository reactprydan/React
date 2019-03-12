import { AsyncStorage } from 'react-native';

export const GET_USER = 'GET_USER';
export const CHECK_USER = 'CHECK_USER';

export const getUserDetail = payload => ({
  type: GET_USER,
  payload
});

export const checkUser = payload => ({
  type: CHECK_USER,
  payload
});

export const getUserDetailFunction = () => {
  return async dispatch => {
    const userToken = await AsyncStorage.getItem('userToken');
    const user = { token: userToken };
    dispatch(getUserDetail(user));
  };
};

export const checkUserDetailFunction = () => {
  return async dispatch => {
    const user = { isConfirm: true };
    dispatch(checkUser(user));
  };
};
