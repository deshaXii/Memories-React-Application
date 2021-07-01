import postsType from "../types/index";

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case postsType.FETCH_ALL:
      return action.payload;
    case postsType.UPDATE:
    case postsType.LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case postsType.CREATE:
      return [...posts, action.payload];
    case postsType.DELETE:
      return posts.filter(post => post._id !== action.payload)
    default:
      return {
        ...posts,
      };
  }
};

export default postsReducer;
