import {
  GET_ITEM, GET_ITEM_SUCCESS, GET_ITEM_FAIL,
  GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL,
  ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_FAIL,
  DELETE_ITEM, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAIL,
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

export const getItem = (categoryID, itemID) => async (dispatch) => {
  dispatch({ type: GET_ITEM });
  try {
    const response = await (await fetch(`/categories/${categoryID}/items/${itemID}`, {
      method: 'GET',
    })).json();
    dispatch({ type: GET_ITEM_SUCCESS, payload: response });
  } catch (err) {
    dispatch({ type: GET_ITEM_FAIL, payload: err });
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

export const getUserItems = token => async (dispatch, getState) => {
  const { accessToken } = getState().user;
  dispatch({ type: GET_USER_ITEMS });
  try {
    const response = await (await fetch('http://127.0.0.1:5000/users/items', {
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
  console.log(token);
  try {
    const response = await (await fetch(`http://127.0.0.1:5000/categories/${categoryID}/items`, {
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

export const deleteItem = (categoryID, itemID, token) => async (dispatch) => {
  dispatch({ type: DELETE_ITEM });
  try {
    const response = await (await fetch(`http://127.0.0.1:5000/categories/${categoryID}/items/${itemID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })).json();
    console.log(response);
    dispatch({ type: DELETE_ITEM_SUCCESS, payload: response });
  } catch (err) {
    dispatch({ type: DELETE_ITEM_FAIL, payload: err });
  }
};
