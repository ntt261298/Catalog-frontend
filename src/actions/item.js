import {
  GET_ITEM, GET_ITEMS, ADD_ITEM, DELETE_ITEM, GET_USER_ITEMS, GET_CATEGORY_ITEMS,
} from './types';
import {
  Get, Post, Delete,
} from '../utils/request';

export const getItems = () => async (dispatch) => {
  Get(dispatch, GET_ITEMS, '/items');
};

export const getItem = (categoryID, itemID) => async (dispatch) => {
  Get(dispatch, GET_ITEM, `/categories/${categoryID}/items/${itemID}`);
};

export const getCategoryItems = categoryID => async (dispatch) => {
  Get(dispatch, GET_CATEGORY_ITEMS, `/categories/${categoryID}/items`);
};

export const getUserItems = () => async (dispatch) => {
  Get(dispatch, GET_USER_ITEMS, '/users/items');
};

export const addItem = (title, description, categoryID) => async (dispatch) => {
  const data = {
    title, description,
  };
  Post(dispatch, ADD_ITEM, `/categories/${categoryID}`, data);
};

export const deleteItem = (categoryID, itemID) => async (dispatch) => {
  Delete(dispatch, DELETE_ITEM, `/categories/${categoryID}/items/${itemID}`);
};
