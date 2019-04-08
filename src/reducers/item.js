import { combineReducers } from 'redux';
import {
  GET_ITEMS_SUCCESS,
  GET_ITEM_SUCCESS,
  // ADD_ITEM_SUCCESS,
  GET_USER_ITEMS_SUCCESS,
  GET_CATEGORY_ITEMS_SUCCESS,
} from '../actions/types';

function addItemEntry(state, item) {
  // Insert the new Item object into the updated lookup table
  return {
    ...state,
    [item.id]: item,
  };
}

function itemsById(state = {}, action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS: {
      action.payload.forEach((item) => {
        state = addItemEntry(state, item);
      });
      return state;
    }
    case GET_ITEM_SUCCESS: {
      state = addItemEntry(state, action.payload);
      return state;
    }
    case GET_CATEGORY_ITEMS_SUCCESS: {
      action.payload.forEach((item) => {
        state = addItemEntry(state, item);
      });
      return state;
    }
    case GET_USER_ITEMS_SUCCESS: {
      action.payload.forEach((item) => {
        state = addItemEntry(state, item);
      });
      return state;
    }
    // case ADD_ITEM_SUCCESS:
    //   return addItemEntry(state, action.payload);
    default:
      return state;
  }
}

function addItemId(state, item) {
  const { id } = item;
  // Append the new Item's ID to the list of all IDs
  if (state.indexOf(id) < 0) { return state.concat(id); }
  return state;
}

function allItems(state = [], action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS: {
      action.payload.forEach((item) => {
        state = addItemId(state, item);
      });
      return state;
    }
    // case ADD_ITEM_SUCCESS:
    //   return addItemId(state, action.payload);
    default:
      return state;
  }
}

function categoryItems(state = [], action) {
  switch (action.type) {
    case GET_CATEGORY_ITEMS_SUCCESS: {
      state = [];
      action.payload.forEach((item) => {
        state = addItemId(state, item);
      });
      return state;
    }
    default:
      return state;
  }
}

function userItems(state = [], action) {
  switch (action.type) {
    case GET_USER_ITEMS_SUCCESS: {
      state = [];
      action.payload.forEach((item) => {
        state = addItemId(state, item);
      });
      return state;
    }
    default:
      return state;
  }
}

function detailItem(state = [], action) {
  switch (action.type) {
    case GET_ITEM_SUCCESS: {
      state = [action.payload.id];
      return state;
    }
    default:
      return state;
  }
}

export default combineReducers({
  byId: itemsById,
  allIds: allItems,
  categoryIds: categoryItems,
  userIds: userItems,
  itemId: detailItem,
});
