// import { SET_CATEGORY } from "./actionTypes.js";
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
} from "./actionTypes.js";

let initialState = {
  isLoggedIn: false,
  isCopied: false,
  toast: {
    pick: false,
    unpick: false,
  },
  onSearch: false,
  searchResult: false,
  selectCategory: "none",
  pickedItems: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ISLOGGEDIN":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    case "SET_TOAST_PICK":
      return {
        ...state,
        toast: {
          ...state.toast,
          pick: action.payload,
        },
      };
    case "SET_TOAST_UNPICK":
      return {
        ...state,
        toast: {
          ...state.toast,
          unpick: action.payload,
        },
      };
    case "SET_ISCOPY":
      return { ...state, isCopied: !state.isCopied };
    case "ON_ONSEARCH":
      return {
        ...state,
        onSearch: true,
      };
    case "ON_SEARCHRESULT":
      return {
        ...state,
        searchResult: true,
      };
    case "OFF_ONSEARCH":
      return {
        ...state,
        onSearch: false,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        selectCategory: action.payload,
      };
    case "ADD_PICKED_ITEM":
      return {
        ...state,
        pickedItems: {
          ...state.pickedItems,
          [action.payload]: true,
        },
      };
    case "REMOVE_PICKED_ITEM":
      const { [action.payload]: removedItem, ...remainingItems } =
        state.pickedItems;
      return {
        ...state,
        pickedItems: remainingItems,
      };
    default:
      return { ...state };
  }
}

export default reducer;
