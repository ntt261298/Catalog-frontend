import configureMockStore from 'redux-mock-store';
import middleware from 'utils/middleware';

import {
  onLogin, onSignup, setCurrentItem,
} from 'actions/user';

describe('actions/User', () => {
  let mockStore;
  let initialState;
  let store;

  beforeAll(() => {
    mockStore = configureMockStore([middleware]);
    initialState = {};
    store = mockStore(initialState);
  });


  it('should dispatch USER_LOGIN', () => {
    fetch.mockResponse(JSON.stringify({
      message: 'test',
      access_token: '12345',
    }));

    const expectedActions = [
      {
        type: 'USER_LOGIN',
      },
      {
        payload: { access_token: '12345', message: 'test' },
        type: 'USER_LOGIN_SUCCESS',
      },
    ];

    return (
      store.dispatch(onLogin()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });


  it('should dispatch USER_SIGNUP', () => {
    fetch.mockResponse(JSON.stringify({
      message: 'test',
      access_token: '12345',
    }));

    const expectedActions = [
      {
        type: 'USER_SIGNUP',
      },
      {
        payload: { access_token: '12345', message: 'test' },
        type: 'USER_SIGNUP_SUCCESS',
      },
    ];

    return (
      store.dispatch(onSignup()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });


  it('should dispatch USER_LOGOUT', () => {
    const expectedActions = [
      {
        type: 'USER_LOGOUT',
      },
    ];

    store.dispatch(setCurrentItem());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch USER_CURRENT_ITEM', () => {
    const expectedActions = [
      {
        type: 'USER_CURRENT_ITEM',
      },
    ];

    store.dispatch(setCurrentItem());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
