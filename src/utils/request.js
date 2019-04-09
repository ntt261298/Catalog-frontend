import { loadToken } from './localStorage';

const defaultHeader = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${loadToken()}`,
};

const defaultHost = 'http://127.0.0.1:5000';


export const Get = async (dispatch, type, endpoint) => {
  dispatch({ type: `${type}` });
  try {
    let response = await fetch(`${defaultHost}${endpoint}`, {
      method: 'GET',
      headers: defaultHeader,
    });
    const statusCode = response.status;
    response = await response.json();
    console.log(statusCode);
    if (statusCode >= 400 && statusCode < 500) {
      await dispatch({ type: `${type}_FAIL` });
      throw Error(response.message);
    } await dispatch({ type: `${type}_SUCCESS`, payload: response });
  } catch (err) {
    console.log(err);
    dispatch({ type: `${type}_FAIL`, payload: 'Something went wrong.' });
    throw Error(err.message);
  }
};

export const Post = async (dispatch, type, endpoint, data) => {
  dispatch({ type: `${type}` });
  try {
    let response = await (await fetch(`${defaultHost}${endpoint}`, {
      method: 'POST',
      headers: defaultHeader,
      body: JSON.stringify(data),
    }));
    const statusCode = response.status;
    response = await response.json();
    if (statusCode >= 300 && statusCode < 500) {
      throw response.message;
    } await dispatch({ type: `${type}_SUCCESS`, payload: response });
  } catch (err) {
    dispatch({ type: `${type}_FAIL` });
  }
};

export const Put = async (dispatch, type, endpoint, data) => {
  dispatch({ type: `${type}` });
  try {
    let response = await (await fetch(`${defaultHost}${endpoint}`, {
      method: 'PUT',
      headers: defaultHeader,
      body: JSON.stringify(data),
    }));
    const statusCode = response.status;
    response = await response.json();
    if (statusCode >= 300 && statusCode < 500) {
      await dispatch({ type: `${type}_FAIL`, payload: response });
    } else await dispatch({ type: `${type}_SUCCESS`, payload: response });
  } catch (err) {
    dispatch({ type: `${type}_FAIL`, payload: 'Something went wrong.' });
  }
};

export const Delete = async (dispatch, type, endpoint) => {
  dispatch({ type: `${type}` });
  try {
    let response = await (await fetch(`${defaultHost}${endpoint}`, {
      method: 'DELETE',
      headers: defaultHeader,
    }));
    const statusCode = response.status;
    response = await response.json();
    if (statusCode >= 300 && statusCode < 500) {
      await dispatch({ type: `${type}_FAIL`, payload: response });
    } else await dispatch({ type: `${type}_SUCCESS`, payload: response });
  } catch (err) {
    dispatch({ type: `${type}_FAIL`, payload: 'Something went wrong.' });
  }
};
