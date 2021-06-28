import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./style";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      <div>Post</div>
      <Post />
    </>
  );
};

export default Posts;
