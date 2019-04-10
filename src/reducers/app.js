import {
  SHOW_LOGIN_MODAL, SHOW_SIGNUP_MODAL, SHOW_ADD_ITEM_MODAL, SHOW_EDIT_ITEM_MODAL, SHOW_DELETE_ITEM_MODAL, HIDE_MODAL,
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
    case SHOW_EDIT_ITEM_MODAL:
      return {
        ...state,
        modal: 'editItem',
      };
    case SHOW_DELETE_ITEM_MODAL:
      return {
        ...state,
        modal: 'deleteItem',
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
