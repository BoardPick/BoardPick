import { togglePick } from "../axios/api";

export const handlerPick = async (id, dispatch, setIsPicked) => {
  try {
    const response = await togglePick(id);

    if (response.picked) {
      dispatch({ type: "SET_TOAST_PICK", payload: true });
      dispatch({ type: "SET_TOAST_UNPICK", payload: false });
    } else {
      dispatch({ type: "SET_TOAST_PICK", payload: false });
      dispatch({ type: "SET_TOAST_UNPICK", payload: true });
    }
    setIsPicked(response.picked);
  } catch (error) {
    console.error(error);
  }
};
