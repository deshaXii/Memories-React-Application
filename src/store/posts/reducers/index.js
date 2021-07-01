import postsType from "../types/index";

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case postsType.FETCH_ALL:
      return action.payload;
    case postsType.UPDATE:
      return posts.map(post => post._id === action.payload._id ? action.payload : post);
    case postsType.CREATE:
      return [...posts, action.payload];
    default:
      return {
        ...posts,
      };
  }
};

export default postsReducer;
