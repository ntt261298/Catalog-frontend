import {
  GET_ITEM, GET_ITEMS, ADD_ITEM, EDIT_ITEM, DELETE_ITEM, GET_USER_ITEMS, GET_CATEGORY_ITEMS,
} from './types';
import {
  get, post, put, del,
} from '../utils/request';

export const getItems = () => async dispatch => get(dispatch, GET_ITEMS, '/items');

export const getItem = (categoryID, itemID) => async dispatch => get(dispatch, GET_ITEM, `/categories/${categoryID}/items/${itemID}`);

export const getCategoryItems = categoryID => async dispatch => get(dispatch, GET_CATEGORY_ITEMS, `/categories/${categoryID}/items`);

export const getUserItems = () => async dispatch => get(dispatch, GET_USER_ITEMS, '/users/items');

export const addItem = (title, description, categoryID) => async (dispatch) => {
  const data = {
    title, description,
  };
  return post(dispatch, ADD_ITEM, `/categories/${categoryID}/items`, data);
};

export const editItem = item => async (dispatch) => {
  const {
    title, description, itemID, categoryID,
  } = item;
  const data = {
    title,
    description,
  };
  return put(dispatch, EDIT_ITEM, `/categories/${categoryID}/items/${itemID}`, data);
};

export const deleteItem = (categoryID, itemID) => async dispatch => del(dispatch, DELETE_ITEM, `/categories/${categoryID}/items/${itemID}`);
