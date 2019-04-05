import { combineReducers } from 'redux';
import {
  GET_ITEMS, GET_CATEGORIES_SUCCESS, GET_ITEMS_FAIL,
  ADD_ITEM_SUCCESS,
  GET_USER_ITEMS, GET_USER_ITEMS_SUCCESS, GET_USER_ITEMS_FAIL,
  GET_CATEGORY_ITEMS, GET_CATEGORY_ITEMS_SUCCESS, GET_CATEGORY_ITEMS_FAIL,
} from '../actions/types';

function addCategoryEntry(state, category) {
  // Insert the new Item object into the updated lookup table
  return {
    ...state,
    [category.id]: category,
  };
}

function categoriesById(state = {}, action) {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS: {
      action.payload.forEach((category) => {
        state = addCategoryEntry(state, category);
      });
      return state;
    }
    default:
      return state;
  }
}

function addCategoryId(state, category) {
  const { id } = category;
  if (!state) return;
  // Append the new Item's ID to the list of all IDs
  if (state.indexOf(id) < 0) { return state.concat(id); }
  return state;
}

function allCategories(state = [], action) {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS: {
      action.payload.forEach((category) => {
        state = addCategoryId(state, category);
      });
      console.log(state);
      return state;
    }
    default:
      return state;
  }
}

export default combineReducers({
  byId: categoriesById,
  allIds: allCategories,
});
