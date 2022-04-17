import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <Navbar />
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <Posts setCurrentId={setCurrentId} />
          </div>
          <div class="col-lg-6">
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
