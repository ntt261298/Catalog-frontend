import reducer from '../item';
import * as actions from '../../actions/types';

describe('src/reducers/Item', () => {
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
    const action = {
      type: actions.GET_ITEMS,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer(mockState, action)).toEqual(mockState);
  });

  it('should handle GET_ITEMS_SUCCESS', () => {
    const action = {
      type: actions.GET_ITEMS_SUCCESS,
      payload: mockItem,
    };
    expect(reducer(mockState, action)).toEqual(mockState);
  });

  it('should handle GET_ITEMS_FAIL', () => {
    const action = {
      type: actions.GET_ITEMS_FAIL,
      payload: 'err',
    };
    expect(reducer(mockState, action)).toEqual(mockState);
  });

  it('should handle GET_ITEM', () => {
    const action = {
      type: actions.GET_ITEM,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer(mockState, action)).toEqual(mockState);
  });

  it('should handle GET_ITEM_SUCCESS', () => {
    const action = {
      type: actions.GET_ITEM_SUCCESS,
      payload: {
        id: 1,
        title: 'one',
        description: 'one',
        category_id: 1,
        user_id: 2,
      },
    };
    expect(reducer(mockState, action)).toEqual(mockState);
  });

  it('should handle GET_CATEGORY_ITEMS_SUCCESS', () => {
    const action = {
      type: actions.GET_CATEGORY_ITEMS_SUCCESS,
      payload: mockItem,
    };
    expect(reducer(mockState, action)).toEqual({
      ...mockState,
      categoryItemIds: [1, 2, 3],
    });
  });

  it('should handle GET_USER_ITEMS_SUCCESS', () => {
    const action = {
      type: actions.GET_USER_ITEMS_SUCCESS,
      payload: mockItem,
    };
    expect(reducer(mockState, action)).toEqual({
      ...mockState,
      userItemIds: [1, 2, 3],
    });
  });

  it('should handle GET_ITEMS_FAIL', () => {
    const action = {
      type: actions.GET_ITEM_FAIL,
      payload: 'err',
    };
    expect(reducer(mockState, action)).toEqual(mockState);
  });

  it('should handle ADD_ITEM', () => {
    const action = {
      type: actions.ADD_ITEM,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer(mockState, action)).toEqual(mockState);
  });

  it('should handle GET_ITEMS_FAIL', () => {
    const action = {
      type: actions.GET_ITEMS_FAIL,
      payload: 'err',
    };
    expect(reducer(mockState, action)).toEqual(mockState);
  });
});
