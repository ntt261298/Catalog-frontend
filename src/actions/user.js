import {
  USER_LOGIN, USER_SIGNUP, USER_LOGOUT, USER_CURRENT_ITEM,
} from './types';
import { post } from '../utils/request';

export const onLogin = (username, password) => {
  const data = {
    username,
    password,
  };
  return {
    type: USER_LOGIN,
    promise: post('/users/auth', data),
  };
};

export const onSignup = (username, password) => {
  const data = {
    username,
    password,
  };
  return {
    type: USER_SIGNUP,
    promise: post('/users', data),
  };
};

export const onLogout = () => ({
  type: USER_LOGOUT,
});

export const setCurrentItem = item => ({
  type: USER_CURRENT_ITEM,
  payload: item,
});
