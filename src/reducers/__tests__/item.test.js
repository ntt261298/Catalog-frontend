import reducer from '../item';
import * as actions from '../../actions/types';

describe('src/reducers/item', () => {
  let mockState;
  let mockItem;

  beforeEach(() => {
    mockItem = [
      {
        id: 1,
        title: 'one',
        description: 'one',
        category_id: 1,
        user_id: 2,
      },
      {
        id: 2,
        title: 'two',
        description: 'two',
        category_id: 1,
        user_id: 1,
      },
      {
        id: 3,
        title: 'three',
        description: 'three',
        category_id: 1,
        user_id: 2,
      },
    ];
    mockState = {
      byId: {
        1: {
          id: 1,
          title: 'one',
          description: 'one',
          category_id: 1,
          user_id: 2,
        },
        2: {
          id: 2,
          title: 'two',
          description: 'two',
          category_id: 1,
          user_id: 1,
        },
        3: {
          id: 3,
          title: 'three',
          description: 'three',
          category_id: 1,
          user_id: 2,
        },
      },
      allIds: [1, 2, 3],
      categoryItemIds: [1, 2],
      itemId: [1],
      userItemIds: [2],
    };
  });

  it('should return the initial state', () => {
    expect(reducer(mockState, {})).toEqual(mockState);
  });

  it('should handle GET_ITEMS', () => {
    const startAction = {
      type: actions.GET_ITEMS,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer(mockState, startAction)).toEqual(mockState);
  });

  it('should handle GET_ITEMS_SUCCESS', () => {
    const successAction = {
      type: actions.GET_ITEMS_SUCCESS,
      payload: mockItem,
    };
    expect(reducer(mockState, successAction)).toEqual(mockState);
  });

  it('should handle GET_ITEMS_FAIL', () => {
    const updateAction = {
      type: actions.GET_ITEMS_FAIL,
      payload: 'err',
    };
    expect(reducer(mockState, updateAction)).toEqual(mockState);
  });

  it('should handle GET_ITEM', () => {
    const startAction = {
      type: actions.GET_ITEM,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer(mockState, startAction)).toEqual(mockState);
  });

  it('should handle GET_ITEMS_SUCCESS', () => {
    const successAction = {
      type: actions.GET_ITEM_SUCCESS,
      payload: mockItem,
    };
    expect(reducer(mockState, successAction)).toEqual(mockState);
  });

  it('should handle GET_CATEGORY_ITEMS_SUCCESS', () => {
    const successAction = {
      type: actions.GET_CATEGORY_ITEMS_SUCCESS,
      payload: mockItem,
    };
    expect(reducer(mockState, successAction)).toEqual(mockState);
  });

  it('should handle GET_USER_ITEMS_SUCCESS', () => {
    const successAction = {
      type: actions.GET_USER_ITEMS_SUCCESS,
      payload: mockItem,
    };
    expect(reducer(mockState, successAction)).toEqual(mockState);
  });

  it('should handle GET_ITEM_SUCCESS', () => {
    const successAction = {
      type: actions.GET_USER_ITEMS_SUCCESS,
      payload: mockItem,
    };
    expect(reducer(mockState, successAction)).toEqual(mockState);
  });

  it('should handle GET_ITEMS_FAIL', () => {
    const updateAction = {
      type: actions.GET_ITEM_FAIL,
      payload: 'err',
    };
    expect(reducer(mockState, updateAction)).toEqual(mockState);
  });

  it('should handle ADD_ITEM', () => {
    const startAction = {
      type: actions.ADD_ITEM,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer(mockState, startAction)).toEqual(mockState);
  });

  // it('should handle ADD_ITEM_SUCCESS', () => {
  //   const successAction = {
  //     type: actions.GET_ITEMS_SUCCESS,
  //     payload: {
  //       id: 4,
  //       title: 'four',
  //       description: 'four',
  //       category_id: 1,
  //       user_id: 2,
  //     },
  //   };
  //   expect(reducer(mockState, successAction)).toEqual({
  //     byId: {
  //       ...mockState.byId,
  //       4: {
  //         id: 4,
  //         title: 'four',
  //         description: 'four',
  //         category_id: 1,
  //         user_id: 2,
  //       },
  //     }
  //
  //   });
  // });

  it('should handle GET_ITEMS_FAIL', () => {
    const updateAction = {
      type: actions.GET_ITEMS_FAIL,
      payload: 'err',
    };
    expect(reducer(mockState, updateAction)).toEqual(mockState);
  });
});
