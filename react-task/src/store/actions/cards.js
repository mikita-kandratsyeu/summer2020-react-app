import {
  CREATE_CARD,
  DELETE_CARD,
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR,
} from './actionTypes';

import { apiCall } from '../../api/mockedApi';

export const createCard = (card) => ({
  type: CREATE_CARD,
  payload: card,
});

export const updateState = (idx) => ({
  type: DELETE_CARD,
  payload: idx,
});

export const fetchCardsStart = () => ({
  type: FETCH_CARDS_START,
});

export const fetchCardsError = (error) => ({
  type: FETCH_CARDS_ERROR,
  payload: error,
});

export const fetchCardsSuccess = (cards) => ({
  type: FETCH_CARDS_SUCCESS,
  payload: cards,
});

export const fetchCards = () => (dispatch) => {
  dispatch(fetchCardsStart());

  const cards = JSON.parse(localStorage.getItem('cards'));

  if (!cards) {
    apiCall()
      .then((res) => dispatch(fetchCardsSuccess(res)))
      .catch((rej) => dispatch(fetchCardsError(rej)));
  } else {
    dispatch(fetchCardsSuccess(cards));
  }
};
