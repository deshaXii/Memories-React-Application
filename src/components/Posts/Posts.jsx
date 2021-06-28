import React from "react";
import Post from "./Post/Post";
import useStyles from "./style";

const Posts = () => {
  const classes = useStyles()
  return (
    <>
      <div>Post</div>
      <Post />
    </>
  );
};

export default Posts;
