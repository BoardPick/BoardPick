import { togglePick } from "../axios/api";
import { getPickStatus } from "./getPickStatus";

export const handlerPick = async (id, setToastPick, setToastUnpick) => {
  const { isPicked, pickId } = getPickStatus(id);

  try {
    const response = await togglePick(id);
    if (response.picked) {
      setToastPick(false);
      setToastUnpick(true);
    } else {
      setToastPick(true);
      setToastUnpick(false);
    }

    console.log(response.picked);
    console.log(isPicked);
    console.log(pickId);
  } catch (error) {
    console.error(error);
  }
};
