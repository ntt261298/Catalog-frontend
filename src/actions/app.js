import {
  TOGGLE_LOGIN_MODAL, TOGGLE_SIGNUP_MODAL,
} from './types';

export const toggleLogin = () => ({
  type: TOGGLE_LOGIN_MODAL,
});

export const toggleSignup = () => ({
  type: TOGGLE_SIGNUP_MODAL,
});
