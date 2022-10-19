export const SET_TEXT = "SET_TEXT";
export const SET_LAST_SYMBOL = "SET_LAST_SYMBOL";
export const ADD_PHRASE = "ADD_PHRASE";

export const setText = (text) => ({
  type: SET_TEXT,
  payload: text
});

export const setLastSymbol = (data) => ({
  type: SET_LAST_SYMBOL,
  data
});

export const addPhrase = (phrase) => ({
  type: ADD_PHRASE,
  payload: phrase
});
