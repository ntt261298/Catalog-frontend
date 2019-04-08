import reducer from '../user';
import { initialState } from '../user';
import * as actions from '../../actions/types';

describe('src/reducers/user', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle USER_LOGIN', () => {
    const startAction = {
      type: actions.USER_LOGIN,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle GET_USER_LOGIN', () => {
    const successAction = {
      type: actions.USER_LOGIN_SUCCESS,
      payload: mockCategory,
    };
    expect(reducer(mockState, successAction)).toEqual(mockState);
  });

  it('should handle GET_CATEGORIES_FAIL', () => {
    const updateAction = {
      type: actions.GET_CATEGORIES_FAIL,
      payload: 'err',
    };
    expect(reducer(mockState, updateAction)).toEqual(mockState);
  });
});
