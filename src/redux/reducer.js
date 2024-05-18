let initialState = {
  isLoggedIn: true,
  pick: false,
  picks: {},
  pickCount: 20,
  reviewCount: 2,
  toast: false,
  likeCount: 2,
  myPick: [""],
  recentGame: [""],
  // inputNick: "",
  onSearch: false,
  keyword: "",
  searchResult: false,
  searchGames: [""],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // case "SET_INPUT_NICK":
    //   return { ...state, inputNick: state.inputNick };
    case "SET_ISLOGGEDIN":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    case "SET_PICK":
      return { ...state, pick: !state.pick };
    // case "TOGGLE_PICK":
    //   const { id } = action.payload;
    //   return {
    //     ...state,
    //     picks: {
    //       ...state.picks,
    //       [id]: !state.picks[id],
    //     },
    //   };
    case "SET_PICK_DECREASE":
      return { ...state, pickCount: state.pickCount - 1 };
    case "SET_PICK_INCREASE":
      return { ...state, pickCount: state.pickCount + 1 };
    case "SET_REVIEW_COUNT":
      return { ...state, reviewCount: action.payload };
    case "SET_TOAST":
      return { ...state, toast: !state.toast };
    case "SET_LIKE":
      return { ...state, likeCount: action.payload };
    case "SET_MY_PICK":
      return {
        ...state,
        myPick: action.payload,
      };
    case "SET_RECENT_GAME":
      return {
        ...state,
        recentGame: action.payload,
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
