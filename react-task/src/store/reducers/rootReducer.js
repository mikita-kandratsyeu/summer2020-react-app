import { combineReducers } from 'redux';

import cardsReducer from './cards';
import createReducer from './create';
import authReducer from './auth';

export default combineReducers({
  // cards: cardsReducer,
  // create: createReducer,
  auth: authReducer,
});
