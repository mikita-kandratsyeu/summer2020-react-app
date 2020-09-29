import { CardsActionTypes } from './actionTypes';

import { apiCall } from '../../api/mockedApi';

export const createCard = (card) => ({
  type: CardsActionTypes.CREATE_CARD,
  payload: card,
});

export const updateState = (idx) => ({
  type: CardsActionTypes.DELETE_CARD,
  payload: idx,
});

export const fetchCardsStart = () => ({
  type: CardsActionTypes.FETCH_CARDS_START,
});

export const fetchCardsError = (error) => ({
  type: CardsActionTypes.FETCH_CARDS_ERROR,
  payload: error,
});

export const fetchCardsSuccess = (cards) => ({
  type: CardsActionTypes.FETCH_CARDS_SUCCESS,
  payload: cards,
});

export const fetchCards = () => (dispatch) => {
  dispatch(fetchCardsStart());
  apiCall()
    .then((res) => dispatch(fetchCardsSuccess(res)))
    .catch((rej) => dispatch(fetchCardsError(rej)));
};
