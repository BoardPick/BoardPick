let initialState = {
  isLoggedIn: true,
  isCopied: false,
  toast: false,
  onSearch: false,
  searchResult: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ISLOGGEDIN":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    case "SET_TOAST":
      return { ...state, toast: !state.toast };
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
    default:
      return { ...state };
  }
}

export default reducer;
