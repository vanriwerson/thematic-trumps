import {
  SAVE_SETTINGS,
  SAVE_PLAYER_DATA,
} from "./actionTypes";

export const saveSettings = (payload) => ({
  type: SAVE_SETTINGS,
  payload,
});

export const savePlayerData = (payload) => ({
  type: SAVE_PLAYER_DATA,
  payload,
});
