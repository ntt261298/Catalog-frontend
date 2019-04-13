import combineReducers from '../index';
import category from '../category';
import item from '../item';
import user from '../user';
import app from '../app';

describe('src/reducers/User', () => {
  it('should run index', () => {
    combineReducers({
      app, category, item, user,
    });
  });
});
