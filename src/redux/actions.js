// import { SET_CATEGORY } from "./actionTypes.js";

import { togglePick as togglePickAPI } from "../common/axios/api";
import {
  SET_ISLOGGEDIN,
  SET_TOAST_PICK,
  SET_TOAST_UNPICK,
  SET_ISCOPY,
  ON_ONSEARCH,
  ON_SEARCHRESULT,
  OFF_ONSEARCH,
  SET_CATEGORY,
  SET_IS_PICKED,
} from "./actionTypes";

export const setCategory = (value) => ({
  type: SET_CATEGORY,
  payload: value,
});

export const setIsLoggedIn = () => ({
  type: SET_ISLOGGEDIN,
});

export const setToastPick = (value) => ({
  type: SET_TOAST_PICK,
  payload: value,
});

export const setToastUnpick = (value) => ({
  type: SET_TOAST_UNPICK,
  payload: value,
});

export const setIsCopy = () => ({
  type: SET_ISCOPY,
});

export const onSearch = () => ({
  type: ON_ONSEARCH,
});

export const onSearchResult = () => ({
  type: ON_SEARCHRESULT,
});

export const offSearch = () => ({
  type: OFF_ONSEARCH,
});

export const setIsPicked = (id, isPicked) => ({
  type: SET_IS_PICKED,
  payload: { id, isPicked },
});

export const togglePick = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found");
    return;
  }
  try {
    const response = await togglePickAPI(id, token);
    dispatch(setIsPicked(id, response.picked));
    if (response.picked) {
      dispatch(setToastPick(true));
    } else {
      dispatch(setToastUnpick(true));
    }
  } catch (error) {
    console.error(error);
  }
};
