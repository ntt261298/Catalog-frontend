import configureMockStore from 'redux-mock-store';
import { middleware } from '../../utils/middleware';

import getCategories from '../category';


describe('src/actions/Item', () => {
  let mockStore;
  let initialState;
  let store;
  let mockCategories;

  beforeAll(() => {
    mockStore = configureMockStore([middleware]);
    initialState = {};
    store = mockStore(initialState);
    mockCategories = [
      {
        id: 1,
        name: 'one',
        item: [],
      },
      {
        id: 2,
        name: 'two',
        item: [],
      },
    ];
  });

  it('should dispatch GET_CATEGORIES', () => {
    fetch.mockResponse(JSON.stringify(mockCategories));

    const expectedActions = [
      { type: 'GET_CATEGORIES' },
      {
        payload: mockCategories,
        type: 'GET_CATEGORIES_SUCCESS',
      },
    ];

    return (
      store.dispatch(getCategories()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });
});
