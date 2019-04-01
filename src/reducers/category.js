import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } from '../actions/types';

const initialState = {
  loading: false,
  categories: [],
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
