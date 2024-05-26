let initialState = {
  isLoggedIn: false,
  isCopied: false,
  toast: false,
  onSearch: false,
  searchResult: false,
  pickedItems: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ISLOGGEDIN":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    case "SET_PICKED":
      return {
        ...state,
        pickedItems: {
          ...state.pickedItems,
          [action.payload.id]: action.payload.isPicked,
        },
      };
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
