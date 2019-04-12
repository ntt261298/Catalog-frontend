import reducer from '../app';
import * as actions from '../../actions/types';

describe('src/reducers/user', () => {
  let mockState;

  beforeEach(() => {
    mockState = {
      modal: '',
    };
  });


  it('should handle default', () => {
    const action = {
      type: actions.SOME_ACTION,
    };
    expect(reducer(mockState, action)).toEqual({
      modal: '',
    });
  });

  it('should handle SHOW_LOGIN_MODAL', () => {
    const action = {
      type: actions.SHOW_LOGIN_MODAL,
    };
    expect(reducer(mockState, action)).toEqual({
      modal: 'login',
    });
  });

  it('should handle SHOW_SIGNUP_MODAL', () => {
    const action = {
      type: actions.SHOW_SIGNUP_MODAL,
    };
    expect(reducer(mockState, action)).toEqual({
      modal: 'signup',
    });
  });

  it('should handle SHOW_ADD_ITEM_MODAL', () => {
    const action = {
      type: actions.SHOW_ADD_ITEM_MODAL,
    };
    expect(reducer(mockState, action)).toEqual({
      modal: 'addItem',
    });
  });
  it('should handle SHOW_EDIT_ITEM_MODAL', () => {
    const action = {
      type: actions.SHOW_EDIT_ITEM_MODAL,
    };
    expect(reducer(mockState, action)).toEqual({
      modal: 'editItem',
    });
  });
  it('should handle SHOW_DELETE_ITEM_MODAL', () => {
    const action = {
      type: actions.SHOW_DELETE_ITEM_MODAL,
    };
    expect(reducer(mockState, action)).toEqual({
      modal: 'deleteItem',
    });
  });
  it('should handle HIDE_MODAL', () => {
    const action = {
      type: actions.HIDE_MODAL,
    };
    expect(reducer(mockState, action)).toEqual({
      modal: '',
    });
  });
});
