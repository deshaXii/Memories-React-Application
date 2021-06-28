import postsType from "../types/index";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case postsType.FETCH_ALL:
      return action.payload;
    default:
      return {
        ...state,
      };
  }
};

export default postsReducer;
