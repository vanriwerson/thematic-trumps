import SAVE_SETTINGS from "../actions/actionTypes";

const initialState = {
  deckLength: 32,
};

const settingsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case SAVE_SETTINGS:
    return { deckLength: payload };

  default:
    return state;
  }
};

export default settingsReducer;
