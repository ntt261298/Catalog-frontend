import { combineReducers } from 'redux';
import app from './app';
import category from './category';
import item from './item';
import user from './user';

export default combineReducers({
  app,
  category,
  user,
  item,
});
