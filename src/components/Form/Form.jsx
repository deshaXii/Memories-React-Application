import React, { useState, useEffect } from "react";
import { Button, TextField, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./style";

import { useDispatch } from "react-redux";
import { createNewPost, updatePost } from "../../store/posts/actions/index";

import { useSelector } from "react-redux";

const Form = ({ setCurrentId, currentId }) => {
  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );
  const classes = useStyles();

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    creator: "",
  });

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const dispatch = useDispatch();

  const clear = () => {
    setCurrentId(null)
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const isInputHasValue = () => {
    const { title, message, tags, selectedFile, creator } = postData;
    if (
      title.length &&
      message &&
      tags.length &&
      selectedFile.length &&
      creator.length
    ) {
      return true;
    }
    return false;
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (isInputHasValue()) {
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createNewPost(postData));
    }
    clear();
    }
  };
  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.root} ${classes.form}`}
        noValidate
        onSubmit={handelSubmit}
        autoComplete="off"
      >
        <Typography variant="h6">{currentId ? 'Updating' : 'Creating'} a Memory</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multipe={false}
            onDone={({ base64 }) => {
              setPostData({ ...postData, selectedFile: base64 });
            }}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
