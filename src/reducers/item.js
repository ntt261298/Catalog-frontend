import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL } from '../actions/types';

const initialState = {
  loading: false,
  items: [],
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        loading: true,
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case GET_ITEMS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
