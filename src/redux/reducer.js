let initialState = {
  isLoggedIn: true,
  picked: false,
  isCopied: false,
  toast: false,
  likeCount: 2,
  myPick: [""],
  recentGame: [""],
  onSearch: false,
  // keyword: "",
  searchResult: false,
  // searchGames: [""],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ISLOGGEDIN":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    case "SET_PICKED":
      return { ...state, picked: !state.picked };
    case "SET_TOAST":
      return { ...state, toast: !state.toast };
    case "SET_LIKE":
      return { ...state, likeCount: action.payload };
    case "SET_ISCOPY":
      return { ...state, isCopied: !state.isCopied };
    case "SET_MY_PICK":
      return {
        ...state,
        myPick: action.payload,
      };
    case "SET_RECENT_GAME":
      return {
        ...state,
      };
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
