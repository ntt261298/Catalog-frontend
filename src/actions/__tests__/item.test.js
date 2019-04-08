import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  getItems,
} from '../item';


describe('src/actions/item', () => {
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

  it('should dispatch GET_ITEMS', () => {
    fetch.mockResponse();

    const expectedActions = [
      { type: 'GET_ITEMS' },
    ];

    return (
      store.dispatch(getItems()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });
});
