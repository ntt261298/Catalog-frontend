import { loadToken } from './localStorage';

const defaultHeader = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${loadToken()}`,
};

const defaultHost = 'http://127.0.0.1:5000';


export const get = async (dispatch, type, endpoint) => {
  dispatch({ type: `${type}` });
  try {
    let response = await fetch(`${defaultHost}${endpoint}`, {
      method: 'GET',
      headers: defaultHeader,
    });
    const statusCode = response.status;
    response = await response.json();
    if (statusCode >= 400 && statusCode < 500) {
      throw response.message;
    } await dispatch({ type: `${type}_SUCCESS`, payload: response });
  } catch (err) {
    dispatch({ type: `${type}_FAIL` });
    throw Error(err);
  }
};

export const post = async (dispatch, type, endpoint, data) => {
  dispatch({ type: `${type}` });
  try {
    let response = await (await fetch(`${defaultHost}${endpoint}`, {
      method: 'POST',
      headers: defaultHeader,
      body: JSON.stringify(data),
    }));
    const statusCode = response.status;
    response = await response.json();
    if (statusCode >= 400 && statusCode < 500) {
      throw response.message;
    } await dispatch({ type: `${type}_SUCCESS`, payload: response });
    return response.message;
  } catch (err) {
    dispatch({ type: `${type}_FAIL` });
    throw Error(err);
  }
};

export const put = async (dispatch, type, endpoint, data) => {
  dispatch({ type: `${type}` });
  try {
    let response = await (await fetch(`${defaultHost}${endpoint}`, {
      method: 'PUT',
      headers: defaultHeader,
      body: JSON.stringify(data),
    }));
    const statusCode = response.status;
    response = await response.json();
    if (statusCode >= 400 && statusCode < 500) {
      throw response.message;
    } else await dispatch({ type: `${type}_SUCCESS`, payload: response });
    return response.message;
  } catch (err) {
    dispatch({ type: `${type}_FAIL` });
    throw Error(err);
  }
};

export const del = async (dispatch, type, endpoint) => {
  dispatch({ type: `${type}` });
  try {
    let response = await (await fetch(`${defaultHost}${endpoint}`, {
      method: 'DELETE',
      headers: defaultHeader,
    }));
    const statusCode = response.status;
    response = await response.json();
    if (statusCode >= 400 && statusCode < 500) {
      throw response.message;
    } else await dispatch({ type: `${type}_SUCCESS` });
    return response.message;
  } catch (err) {
    dispatch({ type: `${type}_FAIL` });
    throw Error(err);
  }
};
