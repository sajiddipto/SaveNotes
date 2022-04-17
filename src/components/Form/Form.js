import React, { useState, useEffect } from "react";
import "./styles.css";
import FileBase from "react-file-base64";
import { useSelector, useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      selectedFile: "",
    });
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          className="placeholder"
          name="title"
          value={postData.title}
          placeholder="Title"
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <textarea
          className="placeholder"
          name="message"
          value={postData.message}
          placeholder="Write a note..."
          rows="11"
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <div className="upload-img">
          <FileBase
            name="selectedFile"
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
