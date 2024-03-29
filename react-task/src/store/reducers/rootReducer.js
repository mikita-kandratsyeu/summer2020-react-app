import { combineReducers } from 'redux';

import cardsReducer from './cards';
import authReducer from './auth';

export default combineReducers({
  cards: cardsReducer,
  auth: authReducer,
});
