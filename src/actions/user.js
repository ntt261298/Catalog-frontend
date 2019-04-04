import {
  USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,
  USER_SIGNUP, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, USER_LOGOUT,
} from './types';

export const onLogin = (username, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });
  const data = {
    username,
    password,
  };
  try {
    let response = await fetch('http://127.0.0.1:5000/users/auth', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const statusCode = response.status;
    response = await response.json();
    const payload = {
      ...response,
      statusCode,
    };
    dispatch({ type: USER_LOGIN_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error });
  }
};

export const onSignup = (username, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP });
  const data = {
    username,
    password,
  };
  try {
    let response = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const statusCode = response.status;
    response = await response.json();
    console.log(response);
    const payload = {
      ...response,
      statusCode,
    };
    dispatch({ type: USER_SIGNUP_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error });
  }
};

export const onLogout = () => ({
  type: USER_LOGOUT,
});
