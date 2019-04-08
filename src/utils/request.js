import { loadToken } from './localStorage';

const defaultHeader = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${loadToken()}`,
};

const defaultHost = 'http://127.0.0.1:5000';

const handleErr = (dispatch, type, err) => {
  console.log(err);
  if (err.response.status >= 500) {
    dispatch({ type: `${type}_FAIL`, payload: 'Something went wrong.' });
  } else {
    dispatch({ type: `${type}_FAIL`, payload: err.response.message });
  }
};

export const Get = async (dispatch, type, endpoint) => {
  dispatch({ type: `${type}` });
  try {
    const response = await (await fetch(`${defaultHost}${endpoint}`, {
      method: 'GET',
      headers: defaultHeader,
    })).json();
    dispatch({ type: `${type}_SUCCESS`, payload: response });
  } catch (err) {
    handleErr(dispatch, type, err);
  }
};

export const Post = async (dispatch, type, endpoint, data) => {
  dispatch({ type: `${type}` });
  try {
    const response = await (await fetch(`${defaultHost}${endpoint}`, {
      method: 'POST',
      headers: defaultHeader,
      body: JSON.stringify(data),
    })).json();
    dispatch({ type: `${type}_SUCCESS`, payload: response });
  } catch (err) {
    handleErr(dispatch, type, err);
  }
};

export const Put = async (dispatch, type, endpoint, data) => {
  dispatch({ type: `${type}` });
  try {
    const response = await (await fetch(`${defaultHost}${endpoint}`, {
      method: 'PUT',
      headers: defaultHeader,
      body: JSON.stringify(data),
    })).json();
    dispatch({ type: `${type}_SUCCESS`, payload: response });
  } catch (err) {
    handleErr(dispatch, type, err);
  }
};

export const Delete = async (dispatch, type, endpoint) => {
  dispatch({ type: `${type}` });
  try {
    const response = await (await fetch(`${defaultHost}${endpoint}`, {
      method: 'DELETE',
      headers: defaultHeader,
    })).json();
    dispatch({ type: `${type}_SUCCESS`, payload: response });
  } catch (err) {
    handleErr(dispatch, type, err);
  }
};
