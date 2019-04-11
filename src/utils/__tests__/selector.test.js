import {
  selectUserItems,
  selectCategoryItems,
  selectItem,
  selectAllItems,
  selectAllCategories,
} from '../selector';

describe('src/utils/localStorage', () => {
  let mockState;
  beforeEach(() => {
    mockState = {
      item: {
        byId: {
          1: {
            id: 1,
            title: 'one',
            description: 'one',
            category_id: 1,
          },
          2: {
            id: 2,
            title: 'two',
            description: 'two',
            category_id: 1,
          },
        },
        allIds: [1, 2],
        userItemIds: [1, 2],
        categoryItemIds: [1],
        itemId: [2],
      },
      category: {
        byId: {
          1: {
            id: 1,
            name: 'two',
            item: [],
          },
          2: {
            id: 2,
            name: 'one',
            item: [],
          },
        },
        allIds: [1, 2],
      },
    };
  });

  it('should call all selectors', () => {
    selectUserItems(mockState);
    selectCategoryItems(mockState);
    selectItem(mockState);
    selectAllItems(mockState);
    selectAllCategories(mockState);
  });
});
