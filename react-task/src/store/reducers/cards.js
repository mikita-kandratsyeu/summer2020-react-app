import { CardsActionTypes } from '../actions/actionTypes';

const initialState = {
  cards: [],
  loading: false,
  error: null,
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CardsActionTypes.CREATE_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case CardsActionTypes.DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };
    case CardsActionTypes.FETCH_CARDS_START:
      return {
        ...state,
        loading: true,
      };
    case CardsActionTypes.FETCH_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: [...action.payload],
      };
    case CardsActionTypes.FETCH_CARDS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cardsReducer;
