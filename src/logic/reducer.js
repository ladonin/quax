import { ADD_PHRASE, SET_LAST_SYMBOL, SET_TEXT } from "./actions";

const initialState = {
  currentText: "",
  lastSymbol: {
    typedAt: null,
    value: "",
    code: 0
  },
  phrases: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return { state, currentText: action.payload };
    case SET_LAST_SYMBOL:
      state.lastSymbol = action.payload;
      return state;
    case ADD_PHRASE:
      return {
        ...state,
        currentText: "",
        phrases: { ...state.phrases, [Date.now()]: action.payload }
      };
    default:
      return state;
  }
};
