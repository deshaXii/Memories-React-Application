import * as api from "../../../api/index";

export const getPosts = () => async (dispatch) => {
  try {
    const data = await api.fetchPosts().then( res => res.data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message)
  }
};