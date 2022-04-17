import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import moment from "moment";
import "./style.css";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Jost",
      textTransform: "none",
    },
  },
});

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{ maxWidth: 345, minWidth: 275 }}
        style={{
          width: "20vw",
          height: "60vh",
          margin: "auto",
          marginTop: "5vh",
          marginBottom: "5vh",
          marginLeft: "10vw",
          backgroundColor: "white",
          borderRadius: "7px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.9)",
        }}
      >
        <CardMedia
          component="img"
          alt="No Images Available"
          height="140"
          image={post.selectedFile}
          title={post.title}
        />
        <Typography
          variant="body2"
          style={{
            marginLeft: "15px",
          }}
        >
          {moment(post.createdAt).fromNow()}
        </Typography>
        <CardContent
          style={{
            height: "160px",
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" component="p" color="text.secondary">
            {post.message}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => setCurrentId(post._id)}
            style={{
              color: "#bbe1fa",
              backgroundColor: "#1b262c",
              border: "none",
              borderRadius: "7px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
              outline: "none",
            }}
          >
            Edit
          </Button>
          <Button
            size="small"
            onClick={() => dispatch(deletePost(post._id))}
            style={{
              color: "#bbe1fa",
              backgroundColor: "#1b262c",
              border: "none",
              borderRadius: "7px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
              outline: "none",
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default Post;
