import { createStore } from "redux";
import reducer from "./reducer";
import { loadState, saveState } from "../common/util/localStorage";

const persistedState = loadState();
let store = createStore(reducer, persistedState);

store.subscribe(() => {
	saveState({
	  pickedItems: store.getState().pickedItems
	});
  });

export default store;
