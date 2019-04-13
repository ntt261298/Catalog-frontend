import combineReducers from 'reducers/index';
import category from 'reducers/category';
import item from 'reducers/item';
import user from 'reducers/user';
import app from 'reducers/app';

describe('src/reducers/User', () => {
  it('should run index', () => {
    combineReducers({
      app, category, item, user,
    });
  });
});
