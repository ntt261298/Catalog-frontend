import {
  GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL,
  ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_FAIL,
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

export const addItem = (title, description, categoryID, token) => async (dispatch) => {
  const data = {
    title, description,
  };
  dispatch({ type: ADD_ITEM });
  try {
    const response = await (await fetch(`http://localhost:5000/categories/${categoryID}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })).json();
    dispatch({ type: ADD_ITEM_SUCCESS, payload: response });
  } catch (err) {
    dispatch({ type: ADD_ITEM_FAIL, payload: err });
  }
};
