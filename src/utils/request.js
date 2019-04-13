import { loadToken } from './localStorage';

let defaultHeader;
let defaultHost;

const setDefault = () => {
  defaultHeader = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${loadToken()}`,
  };
  defaultHost = 'http://127.0.0.1:5000';
};


export const get = async (endpoint) => {
  setDefault();
  try {
    let response = await fetch(`${defaultHost}${endpoint}`, {
      method: 'GET',
      headers: defaultHeader,
    });
    const statusCode = response.status;
    response = await response.json();
    if (statusCode >= 400 && statusCode < 500) {
      throw response.message;
    }
    return response;
  } catch (err) {
    throw Error(err);
  }
};

export const post = async (endpoint, data) => {
  setDefault();
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
    }
    return response;
  } catch (err) {
    throw Error(err);
  }
};

export const put = async (endpoint, data) => {
  setDefault();
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
    }
    return response;
  } catch (err) {
    throw Error(err);
  }
};

export const del = async (dispatch, type, endpoint) => {
  setDefault();
  try {
    let response = await (await fetch(`${defaultHost}${endpoint}`, {
      method: 'DELETE',
      headers: defaultHeader,
    }));
    const statusCode = response.status;
    response = await response.json();
    if (statusCode >= 400 && statusCode < 500) {
      throw response.message;
    }
    return response;
  } catch (err) {
    throw Error(err);
  }
};
