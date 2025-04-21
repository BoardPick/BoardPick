// import { SET_CATEGORY } from "./actionTypes.js";

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

    default:
      return { ...state };
  }
}

export default reducer;
