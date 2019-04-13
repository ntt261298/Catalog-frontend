import { GET_CATEGORIES } from './types';
import { get } from '../utils/request';

const getCategories = () => ({
  type: GET_CATEGORIES,
  promise: get('/categories'),
});

export default getCategories;
