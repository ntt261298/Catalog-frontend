import {
  SHOW_LOGIN_MODAL, SHOW_SIGNUP_MODAL, SHOW_ADD_ITEM_MODAL, SHOW_DELETE_ITEM_MODAL, HIDE_MODAL,
} from './types';

export const showLogin = () => ({
  type: SHOW_LOGIN_MODAL,
});

export const showSignup = () => ({
  type: SHOW_SIGNUP_MODAL,
});

export const showAddItem = () => ({
  type: SHOW_ADD_ITEM_MODAL,
});

export const showDeleteItem = () => ({
  type: SHOW_DELETE_ITEM_MODAL,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
