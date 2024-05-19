let initialState = {
  isLoggedIn: true,
  pick: false,
  picks: {},
  isCopied: false,
  toast: false,
  likeCount: 2,
  myPick: [""],
  recentGame: [""],
  onSearch: false,
  keyword: "",
  searchResult: false,
  searchGames: [""],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ISLOGGEDIN":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    case "SET_PICK":
      return { ...state, pick: !state.pick };
    case "SET_TOGGLE_PICK":
      return {
        ...state,
        picks: {
          ...state.picks,
          [action.payload.id]: action.payload.picked,
        },
      };
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
    default:
      return { ...state };
  }
}

export default reducer;
