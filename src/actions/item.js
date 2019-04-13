import {
  GET_ITEM, GET_ITEMS, ADD_ITEM, EDIT_ITEM, DELETE_ITEM, GET_USER_ITEMS, GET_CATEGORY_ITEMS,
} from './types';
import {
  get, post, put, del,
} from '../utils/request';

export const getItems = () => ({
  type: GET_ITEMS,
  promise: get('/items'),
});

export const getItem = (categoryID, itemID) => ({
  type: GET_ITEM,
  promise: get(`/categories/${categoryID}/items/${itemID}`),
});

export const getCategoryItems = categoryID => ({
  type: GET_CATEGORY_ITEMS,
  promise: get(`/categories/${categoryID}/items`),
});

export const getUserItems = () => ({
  type: GET_USER_ITEMS,
  promise: get('/users/items'),
});

export const addItem = (title, description, categoryID) => {
  const data = {
    title, description,
  };
  return {
    type: ADD_ITEM,
    promise: post(`/categories/${categoryID}/items`, data),
  };
};

export const editItem = (item) => {
  const {
    title, description, itemID, categoryID,
  } = item;
  const data = {
    title,
    description,
  };
  return {
    type: EDIT_ITEM,
    promise: put(`/categories/${categoryID}/items/${itemID}`, data),
  };
};

export const deleteItem = (categoryID, itemID) => ({
  type: DELETE_ITEM,
  promise: del(`/categories/${categoryID}/items/${itemID}`),
});
