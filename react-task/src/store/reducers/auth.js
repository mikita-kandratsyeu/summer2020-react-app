import { AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/actionTypes';

const initialState = {
  token: null,
  username: '',
  access: 'User',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        access: action.payload.access,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        username: '',
        access: 'User',
      };
    default:
      return state;
  }
};

export default authReducer;
