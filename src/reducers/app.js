import {
  SHOW_LOGIN_MODAL, SHOW_SIGNUP_MODAL, SHOW_ADD_ITEM_MODAL, HIDE_MODAL,
} from '../actions/types';

const initialState = {
  modal: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_LOGIN_MODAL:
      return {
        ...state,
        modal: 'login',
      };
    case SHOW_SIGNUP_MODAL:
      return {
        ...state,
        modal: 'signup',
      };
    case SHOW_ADD_ITEM_MODAL:
      return {
        ...state,
        modal: 'addItem',
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: '',
      };
    default:
      return state;
  }
}
