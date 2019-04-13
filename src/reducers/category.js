import { GET_CATEGORIES_SUCCESS } from 'actions/types';

const initialState = {
  byId: {},
  allIds: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS: {
      const byId = { ...state.byId };
      const allIds = [];

      action.payload.forEach((category) => {
        byId[category.id] = category;
        allIds.push(category.id);
      });
      return {
        ...state,
        byId,
        allIds,
      };
    }
    default:
      return state;
  }
}
