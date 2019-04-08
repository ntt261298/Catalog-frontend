import {
  USER_LOGIN, USER_SIGNUP, USER_LOGOUT,
} from './types';
import { Post } from '../utils/request';

export const onLogin = (username, password) => async (dispatch) => {
  const data = {
    username,
    password,
  };
  Post(dispatch, USER_LOGIN, '/users/auth', data);
};

export const onSignup = (username, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP });
  const data = {
    username,
    password,
  };
  Post(dispatch, USER_SIGNUP, '/users', data);
};

export const onLogout = () => ({
  type: USER_LOGOUT,
});
