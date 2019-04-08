export const selectUserItems = state => state.item.userItemIds.map(id => state.item.byId[id]);
export const selectCategoryItems = state => state.item.categoryItemIds.map(
  id => state.item.byId[id],
);
export const selectItem = state => state.item.itemId.map(id => state.item.byId[id]);
export const selectAllItems = state => state.item.allIds.map(id => state.item.byId[id]);
export const selectAllCategories = state => state.category.allIds.map(
  id => state.category.byId[id],
);
