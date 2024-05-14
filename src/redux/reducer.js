let initialState = {
  pick: false,
  pickCount: 20,
  reviewCount: 2,
  toast: false,
  likeCount: 2,
  disabled: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_DISABLED":
      return { ...state, disabled: !state.disabled };
    case "SET_PICK":
      return { ...state, pick: !state.pick };
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
    default:
      return { ...state };
  }
}

export default reducer;
