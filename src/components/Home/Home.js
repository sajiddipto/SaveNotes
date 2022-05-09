import React from "react";
import "./style.css";
import get_started from "../all_images/question.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div class="container-fluid get-stared start-here dark-section light-text">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="first_header">
              <strong>Do you need to keep a note?</strong>
            </h1>
            <Link
              to="/auth"
              class="btn btn-lg btn-primary"
              href="#"
              role="button"
            >
              Get Started
            </Link>
          </div>
          <div class="col-lg-6">
            <img class="first_image" src={get_started} alt="question_man" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
