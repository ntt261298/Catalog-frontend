import { combineReducers } from 'redux';
import { GET_CATEGORIES_SUCCESS } from '../actions/types';

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
