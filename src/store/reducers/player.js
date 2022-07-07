import { SAVE_PLAYER_DATA } from "../actions/actionTypes";

const initialState = {
  name: '',
  imgUrl: '',
  score: 0,
};

const settingsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case SAVE_PLAYER_DATA:
    return { ...state, ...payload };

  default:
    return state;
  }
};

export default settingsReducer;
