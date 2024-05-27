import { SET_CATEGORY } from "./actionTypes.js";

export const setCategory = (value) => ({
  type: SET_CATEGORY,
  payload: value,
});
