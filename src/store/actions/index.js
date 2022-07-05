import SAVE_SETTINGS from "./actionTypes";

const saveSettings = (payload) => ({
  type: SAVE_SETTINGS,
  payload,
});

export default saveSettings;
