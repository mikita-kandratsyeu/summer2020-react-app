import {
  CREATE_CARD,
  DELETE_CARD,
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  cards: [],
  loading: false,
  error: null,
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };
    case FETCH_CARDS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: [...action.payload],
      };
    case FETCH_CARDS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cardsReducer;
