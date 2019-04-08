import {
  GET_ITEMS_SUCCESS,
  GET_ITEM_SUCCESS,
  // ADD_ITEM_SUCCESS,
  GET_USER_ITEMS_SUCCESS,
  GET_CATEGORY_ITEMS_SUCCESS,
} from '../actions/types';

export const initialState = {
  byId: {},
  allIds: [],
  categoryItemIds: [],
  userItemIds: [],
  itemId: [],
};

function addItemEntry(state, item) {
  // Insert the new Item object into the updated lookup table
  return {
    ...state,
    [item.id]: item,
  };
}

function addItemId(state, item) {
  const { id } = item;
  // Append the new Item's ID to the list of all IDs
  if (state.indexOf(id) < 0) { return state.concat(id); }
  return state;
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS: {
      state.allIds = [];
      action.payload.forEach((item) => {
        state.byId = addItemEntry(state.byId, item);
        state.allIds = addItemId(state.allIds, item);
      });
      return state;
    }
    case GET_ITEM_SUCCESS: {
      state.itemId = [];
      state.byId = addItemEntry(state.byId, action.payload);
      state.itemId = [action.payload.id];
      return state;
    }
    case GET_CATEGORY_ITEMS_SUCCESS: {
      state.categoryItemIds = [];
      action.payload.forEach((item) => {
        state.byId = addItemEntry(state.byId, item);
        state.categoryItemIds = addItemId(state.categoryItemIds, item);
      });
      return state;
    }
    case GET_USER_ITEMS_SUCCESS: {
      state.userItemIds = [];
      action.payload.forEach((item) => {
        state.byId = addItemEntry(state.byId, item);
        state.userItemIds = addItemId(state.userItemIds, item);
      });
      return state;
    }
    default:
      return state;
  }
}
