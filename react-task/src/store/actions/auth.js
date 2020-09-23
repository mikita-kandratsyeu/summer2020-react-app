import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';

export const authSuccess = ({ token, username, access }) => ({
  type: AUTH_SUCCESS,
  payload: {
    token,
    username,
    access,
  },
});

export const logout = () => {
  localStorage.clear();

  return {
    type: AUTH_LOGOUT,
  };
};

export const autoLogin = () => (dispatch) => {
  const user = localStorage.getItem('user');

  if (!user) {
    dispatch(logout());
  } else {
    dispatch(authSuccess(JSON.parse(user)));
  }
};

export const auth = (username, access) => (dispatch) => {
  const authData = {
    token: true,
    username,
    access,
  };

  localStorage.setItem('user', JSON.stringify(authData));

  dispatch(authSuccess(authData));
};
