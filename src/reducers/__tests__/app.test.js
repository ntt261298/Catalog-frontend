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
    const startAction = {
      type: actions.SOME_ACTION,
    };
    expect(reducer(mockState, startAction)).toEqual({
      modal: '',
    });
  });

  it('should handle SHOW_LOGIN_MODAL', () => {
    const startAction = {
      type: actions.SHOW_LOGIN_MODAL,
    };
    expect(reducer(mockState, startAction)).toEqual({
      modal: 'login',
    });
  });

  it('should handle SHOW_SIGNUP_MODAL', () => {
    const startAction = {
      type: actions.SHOW_SIGNUP_MODAL,
    };
    expect(reducer(mockState, startAction)).toEqual({
      modal: 'signup',
    });
  });

  it('should handle SHOW_ADD_ITEM_MODAL', () => {
    const startAction = {
      type: actions.SHOW_ADD_ITEM_MODAL,
    };
    expect(reducer(mockState, startAction)).toEqual({
      modal: 'addItem',
    });
  });
  it('should handle SHOW_EDIT_ITEM_MODAL', () => {
    const startAction = {
      type: actions.SHOW_EDIT_ITEM_MODAL,
    };
    expect(reducer(mockState, startAction)).toEqual({
      modal: 'editItem',
    });
  });
  it('should handle SHOW_DELETE_ITEM_MODAL', () => {
    const startAction = {
      type: actions.SHOW_DELETE_ITEM_MODAL,
    };
    expect(reducer(mockState, startAction)).toEqual({
      modal: 'deleteItem',
    });
  });
  it('should handle HIDE_MODAL', () => {
    const startAction = {
      type: actions.HIDE_MODAL,
    };
    expect(reducer(mockState, startAction)).toEqual({
      modal: '',
    });
  });
});
