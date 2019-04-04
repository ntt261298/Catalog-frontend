import {
  USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,
  USER_SIGNUP, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, USER_LOGOUT,
} from '../actions/types';
import { saveState, loadState, removeState } from '../helper/localStorage';

const initialState = {
  loading: false,
  message: '',
  accessToken: loadState(),
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      if (action.payload.statusCode === 200) {
        saveState(action.payload.access_token);
        return {
          ...state,
          loading: false,
          accessToken: action.payload.access_token,
        };
      }
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case USER_SIGNUP:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGNUP_SUCCESS:
      if (action.payload.statusCode === 201) {
        saveState(action.payload.access_token);
        return {
          ...state,
          loading: false,
          accesToken: action.payload.access_token,
        };
      }
      return {
        ...state,
        loading: false,
        message: action.payload.message,

      };
    case USER_SIGNUP_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case USER_LOGOUT:
      removeState(state.accessToken);
      return {
        ...state,
        accessToken: undefined,
      };
    default:
      return state;
  }
}
