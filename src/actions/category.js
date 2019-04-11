import { GET_CATEGORIES } from './types';
import { get } from '../utils/request';

const getCategories = () => async dispatch => get(dispatch, GET_CATEGORIES, '/categories');

export default getCategories;
