import { createSelector } from 'reselect';

export const authTokenSelector = createSelector(
  (state) => state.auth.token,
  (token) => !!token,
);

export const accessSelector = createSelector(
  (state) => state.auth.access,
  (access) => access,
);
