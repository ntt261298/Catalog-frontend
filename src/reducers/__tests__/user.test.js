import reducer from '../user';
import { initialState } from '../user';
import * as actions from '../../actions/types';

describe('src/reducers/user', () => {
  let mockItem;

  beforeEach(() => {
    mockItem = {
      itemID: 2,
      title: 'two',
      description: 'two',
      categoryID: 2,
    };
  });
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle USER_LOGIN', () => {
    const startAction = {
      type: actions.USER_LOGIN,
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      loading: true,
    });
  });


  it('should handle USER_LOGIN_SUCCESS', () => {
    const startAction = {
      type: actions.USER_LOGIN_SUCCESS,
      payload: {
        access_token: 'randomAccessToken',
      },
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      loading: false,
      loggedIn: true,
    });
  });

  it('should handle USER_LOGIN_FAIL', () => {
    const startAction = {
      type: actions.USER_LOGIN_FAIL,
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      loading: false,
      loggedIn: false,
    });
  });

  it('should handle USER_SIGNUP', () => {
    const startAction = {
      type: actions.USER_SIGNUP,
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle USER_SIGNUP_SUCCESS', () => {
    const startAction = {
      type: actions.USER_SIGNUP,
      payload: {
        access_token: 'randomAccessToken',
      },
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      loading: false,
      loggedIn: true,
    });
  });

  it('should handle USER_SIGNUP_FAIL', () => {
    const startAction = {
      type: actions.USER_SIGNUP_FAIL,
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      loading: false,
    });
  });

  it('should handle USER_LOGOUT', () => {
    const startAction = {
      type: actions.USER_LOGOUT,
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      loggedIn: false,
    });
  });

  it('should handle USER_CURRENT_ITEM', () => {
    const startAction = {
      type: actions.USER_CURRENT_ITEM,
      payload: mockItem,
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      currentItem: mockItem,
    });
  });
});
