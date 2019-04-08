import { GET_CATEGORIES_SUCCESS } from '../actions/types';

const initialState = {
  byId: {},
  allIds: [],
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
    case GET_CATEGORIES_SUCCESS: {
      action.payload.forEach((item) => {
        state.byId = addItemEntry(state.byId, item);
        state.allIds = addItemId(state.allIds, item);
      });
      return state;
    }
    default:
      return state;
  }
}
