import {
  USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,
  USER_SIGNUP, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, USER_LOGOUT,
} from '../actions/types';
import { saveToken, removeToken, loadToken } from '../utils/localStorage';

export const initialState = {
  loading: false,
  loggedIn: Boolean(loadToken()),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      saveToken(action.payload.access_token);
      return {
        ...state,
        loading: false,
        loggedIn: true,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loggedIn: false,
        loading: false,
      };
    case USER_SIGNUP:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGNUP_SUCCESS:
      saveToken(action.payload.access_token);
      return {
        ...state,
        loading: false,
        loggedIn: true,
      };
    case USER_SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
      };
    case USER_LOGOUT:
      removeToken();
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
}
