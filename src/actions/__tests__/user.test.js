import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  onLogin, onSignup, onLogout, setCurrentItem,
} from '../user';


describe('src/actions/user', () => {
  let middlewares;
  let mockStore;
  let initialState;
  let store;

  beforeAll(() => {
    middlewares = [thunk];
    mockStore = configureMockStore(middlewares);
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
        // return of async actions
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
        // return of async actions
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
    // return of async actions
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch USER_CURRENT_ITEM', () => {
    const expectedActions = [
      {
        type: 'USER_CURRENT_ITEM',
      },
    ];

    store.dispatch(setCurrentItem());
    // return of async actions
    expect(store.getActions()).toEqual(expectedActions);
  });
});
