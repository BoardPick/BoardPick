let initialState = {
  pick: false,
  reviewCount: 24,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PICK":
      return { ...state, pick: !state.pick };
    case "SET_REVIEW_COUNT":
      return { ...state, reviewCount: action.payload };

    default:
      return { ...state };
  }
}

export default reducer;
