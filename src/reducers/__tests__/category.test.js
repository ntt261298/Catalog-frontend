import reducer from '../category';
import * as actions from '../../actions/types';

describe('src/reducers/category', () => {
  let mockState;
  let mockCategory;

  beforeEach(() => {
    mockCategory = [
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
      {
        id: 3,
        name: 'three',
        item: [],
      },
    ];
    mockState = {
      byId: {
        1: {
          id: 1,
          name: 'one',
          item: [],
        },
        2: {
          id: 2,
          name: 'two',
          item: [],
        },
        3: {
          id: 3,
          name: 'three',
          item: [],
        },
      },
      allIds: [1, 2, 3],
    };
  });

  it('should return the initial state', () => {
    expect(reducer(mockState, {})).toEqual(mockState);
  });

  it('should handle GET_CATEGORIES', () => {
    const action = {
      type: actions.GET_CATEGORIES,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer(mockState, action)).toEqual(mockState);
  });

  it('should handle GET_CATEGORIES_SUCCESS', () => {
    const action = {
      type: actions.GET_CATEGORIES_SUCCESS,
      payload: mockCategory,
    };
    expect(reducer(mockState, action)).toEqual(mockState);
  });

  it('should handle GET_CATEGORIES_FAIL', () => {
    const action = {
      type: actions.GET_CATEGORIES_FAIL,
      payload: 'err',
    };
    expect(reducer(mockState, action)).toEqual(mockState);
  });
});
