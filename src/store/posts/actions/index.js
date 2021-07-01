import * as api from "../../../api/index";

// GET ALL POSTS
export const getPosts = () => async (dispatch) => {
  try {
    const data = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

// CREATE A NEW POST
export const createNewPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// UPDATE A EXISTS POST
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const {data} = await api.updatePost(id, post)
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};


// Delete Post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({ type: "DELETE", payload: id});
  } catch(error) {
    console.log(error.message)
  }
}