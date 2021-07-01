import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./images/memories.png";

import { useDispatch } from "react-redux";
import { getPosts } from "./store/posts/actions/index";

import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const disptach = useDispatch();

  const [currentId, setCurrentId]  = useState(null)


  useEffect(() => {
    disptach(getPosts());
  }, [currentId, disptach]);


  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} align="center" variant="h2">
          Memories
        </Typography>
        <img
          src={memories}
          className={classes.image}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}  />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
