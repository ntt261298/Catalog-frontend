import {
  SHOW_LOGIN_MODAL, SHOW_SIGNUP_MODAL, HIDE_MODAL,
} from './types';

export const showLogin = () => ({
  type: SHOW_LOGIN_MODAL,
});

export const showSignup = () => ({
  type: SHOW_SIGNUP_MODAL,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
