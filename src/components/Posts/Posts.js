import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <CircularProgress
      style={{
        marginTop: "35%",
        marginLeft: "65%",
      }}
      color="inherit"
    />
  ) : (
    <Grid
      container
      aligntItems="strech"
      spacing={3}
      style={{ display: "flex", alignItems: "center" }}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={20} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
