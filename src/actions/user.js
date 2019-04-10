import {
  USER_LOGIN, USER_SIGNUP, USER_LOGOUT, USER_CURRENT_ITEM,
} from './types';
import { post } from '../utils/request';

export const onLogin = (username, password) => async (dispatch) => {
  const data = {
    username,
    password,
  };
  return post(dispatch, USER_LOGIN, '/users/auth', data);
};

export const onSignup = (username, password) => async (dispatch) => {
  const data = {
    username,
    password,
  };
  return post(dispatch, USER_SIGNUP, '/users', data);
};

export const onLogout = () => ({
  type: USER_LOGOUT,
});

export const setCurrentItem = item => ({
  type: USER_CURRENT_ITEM,
  payload: item,
});
