import {
  VERIFY_TOKEN, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_FAIL,
} from './types';
import { loadState } from '../helper/localStorage';

export default () => async (dispatch) => {
  const token = loadState();
  if (token) {
    dispatch({ type: VERIFY_TOKEN });
    try {
      const response = await fetch('/users.auth', {
        method: 'POST',
        body: JSON.stringify(token),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch({ type: VERIFY_TOKEN_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: VERIFY_TOKEN_FAIL, payload: error });
    }
  }
};

// export const userLogin = (username, password) => async (dispatch) => {
//   dispatch({ type: USER_LOGIN });
//   try {
//     const response = await fetch('/users', {
//       method: 'POST',
//       body: JSON.stringify(token),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     dispatch({ type: VERIFY_TOKEN_SUCCESS, payload: response });
//   } catch (error) {
//     dispatch({ type: VERIFY_TOKEN_FAIL, payload: error });
//   }
// };

// export const userSignup = (username, name, email, password, repassword) => (dispatch) => {
//   axios.post('/api/account/signup', {
//     username,
//     name,
//     email,
//     password,
//     repassword,
//   }).then(res => dispatch({
//     type: USER_SIGNUP,
//     payload: res.data,
//   }));
// };
