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

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS: {
      const byId = { ...state.byId };
      const allIds = [];

      action.payload.forEach((item) => {
        byId[item.id] = item;
        allIds.push(item.id);
      });
      return {
        ...state,
        byId,
        allIds,
      };
    }
    case GET_ITEM_SUCCESS: {
      const byId = { ...state.byId };
      const itemId = [];

      byId[action.payload.id] = action.payload;
      itemId.push(action.payload.id);
      return {
        ...state,
        byId,
        itemId,
      };
    }
    case GET_CATEGORY_ITEMS_SUCCESS: {
      const byId = { ...state.byId };
      const categoryItemIds = [];

      action.payload.forEach((item) => {
        byId[item.id] = item;
        categoryItemIds.push(item.id);
      });
      return {
        ...state,
        byId,
        categoryItemIds,
      };
    }
    case GET_USER_ITEMS_SUCCESS: {
      const byId = { ...state.byId };
      const userItemIds = [];

      action.payload.forEach((item) => {
        byId[item.id] = item;
        userItemIds.push(item.id);
      });
      return {
        ...state,
        byId,
        userItemIds,
      };
    }
    default:
      return state;
  }
}
