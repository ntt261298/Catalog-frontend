import { TOGGLE_LOGIN_MODAL, TOGGLE_SIGNUP_MODAL } from '../actions/types';

const initialState = {
  loginModal: false,
  signupModal: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        loginModal: !state.loginModal,
      };
    case TOGGLE_SIGNUP_MODAL:
      return {
        ...state,
        signupModal: !state.signupModal,
      };
    default:
      return state;
  }
}
