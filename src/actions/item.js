import {
  GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL,
} from './types';

const getItems = () => async (dispatch) => {
  dispatch({ type: GET_ITEMS });
  try {
    const response = await (await fetch('/items', {
      method: 'GET',
    })).json();
    dispatch({ type: GET_ITEMS_SUCCESS, payload: response });
  } catch (err) {
    dispatch({ type: GET_ITEMS_FAIL, payload: err });
  }
};

export default getItems;
