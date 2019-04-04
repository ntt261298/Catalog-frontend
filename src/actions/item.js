import {
  GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL,
  GET_USER_ITEMS, GET_USER_ITEMS_SUCCESS, GET_USER_ITEMS_FAIL,
  GET_CATEGORY_ITEMS, GET_CATEGORY_ITEMS_SUCCESS, GET_CATEGORY_ITEMS_FAIL,
} from './types';

export const getItems = () => async (dispatch) => {
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

export const getCategoryItems = categoryID => async (dispatch) => {
  dispatch({ type: GET_CATEGORY_ITEMS });
  try {
    const response = await (await fetch(`/categories/${categoryID}/items`, {
      method: 'GET',
    })).json();
    dispatch({ type: GET_CATEGORY_ITEMS_SUCCESS, payload: response });
  } catch (err) {
    dispatch({ type: GET_CATEGORY_ITEMS_FAIL, payload: err });
  }
};

export const getUserItems = token => async (dispatch) => {
  dispatch({ type: GET_USER_ITEMS });
  console.log('abc');
  try {
    const response = await (await fetch('/users/items', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })).json();
    dispatch({ type: GET_USER_ITEMS_SUCCESS, payload: response });
  } catch (err) {
    dispatch({ type: GET_USER_ITEMS_FAIL, payload: err });
  }
};
