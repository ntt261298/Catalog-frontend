import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  getItems, getItem, getCategoryItems, getUserItems, addItem, editItem, deleteItem,
} from '../item';


describe('src/actions/item', () => {
  let middlewares;
  let mockStore;
  let initialState;
  let store;
  let mockItems;
  let mockMessage;

  beforeAll(() => {
    middlewares = [thunk];
    mockStore = configureMockStore(middlewares);
    initialState = {};
    store = mockStore(initialState);
    mockItems = [
      {
        id: 1,
        title: 'one',
        description: 'one',
        category_id: 1,
      },
      {
        id: 2,
        title: 'two',
        description: 'two',
        category_id: 1,
      },
    ];
    mockMessage = 'Message from APIs';
  });

  it('should dispatch GET_ITEMS', () => {
    fetch.mockResponse(JSON.stringify(mockItems));

    const expectedActions = [
      { type: 'GET_ITEMS' },
      {
        payload: mockItems,
        type: 'GET_ITEMS_SUCCESS',
      },
    ];

    return (
      store.dispatch(getItems()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });


  it('should dispatch GET_ITEM', () => {
    fetch.mockResponse(JSON.stringify(
      {
        id: 1,
        title: 'one',
        description: 'one',
        category_id: 1,
      },
    ));

    const expectedActions = [
      { type: 'GET_ITEM' },
      {
        payload:
          {
            id: 1,
            title: 'one',
            description: 'one',
            category_id: 1,
          },
        type: 'GET_ITEM_SUCCESS',
      },
    ];

    return (
      store.dispatch(getItem()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });


  it('should dispatch GET_CATEGORY_ITEMS', () => {
    fetch.mockResponse(JSON.stringify(mockItems));

    const expectedActions = [
      { type: 'GET_CATEGORY_ITEMS' },
      {
        payload: mockItems,
        type: 'GET_CATEGORY_ITEMS_SUCCESS',
      },
    ];

    return (
      store.dispatch(getCategoryItems()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });


  it('should dispatch GET_USER_ITEMS', () => {
    fetch.mockResponse(JSON.stringify(mockItems));

    const expectedActions = [
      { type: 'GET_USER_ITEMS' },
      {
        payload: mockItems,
        type: 'GET_USER_ITEMS_SUCCESS',
      },
    ];

    return (
      store.dispatch(getUserItems()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });


  it('should dispatch ADD_ITEM', () => {
    fetch.mockResponse(JSON.stringify(mockMessage));

    const expectedActions = [
      { type: 'ADD_ITEM' },
      { type: 'ADD_ITEM_SUCCESS' },
    ];

    return (
      store.dispatch(addItem()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });

  it('should dispatch EDIT_ITEM', () => {
    fetch.mockResponse(JSON.stringify(mockMessage));

    const expectedActions = [
      { type: 'EDIT_ITEM' },
      { type: 'EDIT_ITEM_SUCCESS' },
    ];

    return (
      store.dispatch(editItem()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });

  it('should dispatch DELETE_ITEM', () => {
    fetch.mockResponse(JSON.stringify(mockMessage));

    const expectedActions = [
      { type: 'DELETE_ITEM' },
      { type: 'DELETE_ITEM_SUCCESS' },
    ];

    return (
      store.dispatch(deleteItem()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });
});
