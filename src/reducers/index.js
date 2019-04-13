import { combineReducers } from 'redux';
import app from 'reducers/app';
import category from 'reducers/category';
import item from 'reducers/item';
import user from 'reducers/user';

export default combineReducers({
  app,
  category,
  user,
  item,
});
