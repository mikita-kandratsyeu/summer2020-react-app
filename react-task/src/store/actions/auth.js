import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';

export function authSuccess({ token, username, access }) {
  return {
    type: AUTH_SUCCESS,
    payload: {
      token,
      username,
      access,
    },
  };
}

export function logout() {
  localStorage.clear();

  return {
    type: AUTH_LOGOUT,
  };
}

export function autoLogin() {
  return (dispatch) => {
    const user = localStorage.getItem('user');

    if (!user) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(JSON.parse(user)));
    }
  };
}

export function auth(username, access) {
  return (dispatch) => {
    const authData = {
      token: true,
      username,
      access,
    };

    localStorage.setItem('user', JSON.stringify(authData));

    dispatch(authSuccess(authData));
  };
}
