import { GET_CATEGORIES } from './types';
import { Get } from '../utils/request';

const getCategories = () => (dispatch) => {
  Get(dispatch, GET_CATEGORIES, '/categories');
};

export default getCategories;
