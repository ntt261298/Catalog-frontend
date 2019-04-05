import {
  GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL,
} from './types';

const getCategories = () => async (dispatch) => {
  dispatch({ type: GET_CATEGORIES });
  try {
    const response = await (await fetch('/categories', {
      method: 'GET',
    })).json();
    dispatch({ type: GET_CATEGORIES_SUCCESS, payload: response });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_CATEGORIES_FAIL, payload: err });
  }
};

export default getCategories;
