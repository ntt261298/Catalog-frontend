import reducer, { initialState } from '../user';
import * as actions from '../../actions/types';

describe('src/reducers/User', () => {
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
    const action = {
      type: actions.USER_LOGIN,
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });


  it('should handle USER_LOGIN_SUCCESS', () => {
    const action = {
      type: actions.USER_LOGIN_SUCCESS,
      payload: {
        access_token: 'randomAccessToken',
      },
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      loggedIn: true,
    });
  });

  it('should handle USER_LOGIN_FAIL', () => {
    const action = {
      type: actions.USER_LOGIN_FAIL,
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      loggedIn: false,
    });
  });

  it('should handle USER_SIGNUP', () => {
    const action = {
      type: actions.USER_SIGNUP,
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle USER_SIGNUP_SUCCESS', () => {
    const action = {
      type: actions.USER_SIGNUP_SUCCESS,
      payload: {
        access_token: 'randomAccessToken',
      },
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      loggedIn: true,
    });
  });

  it('should handle USER_SIGNUP_FAIL', () => {
    const action = {
      type: actions.USER_SIGNUP_FAIL,
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
    });
  });

  it('should handle USER_LOGOUT', () => {
    const action = {
      type: actions.USER_LOGOUT,
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loggedIn: false,
    });
  });

  it('should handle USER_CURRENT_ITEM', () => {
    const action = {
      type: actions.USER_CURRENT_ITEM,
      payload: mockItem,
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      currentItem: mockItem,
    });
  });
});
