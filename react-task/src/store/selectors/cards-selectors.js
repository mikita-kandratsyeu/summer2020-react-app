import { createSelector } from 'reselect';

export const loadingSelector = createSelector(
  (state) => state.cards.loading,
  (loading) => loading,
);

export const cardsSelector = createSelector(
  (state) => state.cards.cards,
  (cards) => cards,
);
