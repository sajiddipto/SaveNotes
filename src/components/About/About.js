import React from "react";
import about from "../all_images/about.png";
import add_notes from "../all_images/add_notes.png";
import idea from "../all_images/idea.png";
import notification from "../all_images/notifications.png";
import study from "../all_images/study.png";
import complete from "../all_images/complete.png";
import break_pic from "../all_images/break.png";

import "./style.css";

const About = () => {
  return (
    <div>
      <div
        class="container-fluid get-stared dark-section light-text about-section"
        id="about-section"
      >
        <div class="row">
          <div class="col-lg-6">
            <img class="first_image" src={about} alt="writing_in_a_notebook" />
          </div>
          <div class="col-lg-6">
            <h3 class="about-about margin-left f2">Why SaveNotes?</h3>
            <p class="why-savenotes text-light margin-left f3">
              SaveNotes makes your day-to-day tasks more easier. You don't need
              any pen or paper, only SaveNotes! You can go through your notes
              according to your own convenience without wasting time marking the
              essential points of your several activities. SaveNotes offers you
              the most minimal note taking interface that you can experience.
              So, what are you waiting for? Sign up now, save a note anytime so
              that you never forget!
            </p>
          </div>
        </div>
      </div>
      <div class="mid-container white-section dark-text">
        <div
          id="carouselExampleControls"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="400">
              <div class="container-fluid get-stared">
                <div class="row">
                  <div class="col-lg-6">
                    <img
                      class="first_image"
                      src={add_notes}
                      alt="adding_notes"
                    />
                  </div>
                  <div class="col-lg-6">
                    <h3 class="carhead margin-left f2">
                      No more notes hanging around!
                    </h3>
                    <p class="Carousel carpara margin-left f3">
                      Sticky notes to the fridges and tables can be lost easily.
                      Take a note online and never have to worry again!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div class="container-fluid get-stared">
                <div class="row">
                  <div class="col-lg-6">
                    <img
                      class="first_image"
                      src={break_pic}
                      alt="breaking_walls"
                    />
                  </div>
                  <div class="col-lg-6">
                    <h3 class="carhead margin-left f2">
                      You are free to note anytime!
                    </h3>
                    <p class="Carousel carpara margin-left f3">
                      Have any problems while taking an official or academic
                      note with pen & paper? Well, take it online! No risks and
                      you are free to go!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div class="container-fluid get-stared">
                <div class="row">
                  <div class="col-lg-6">
                    <img class="first_image" src={idea} alt="new_idea" />
                  </div>
                  <div class="col-lg-6">
                    <h3 class="carhead margin-left f2">
                      Save your innovative ideas!
                    </h3>
                    <p class="Carousel carpara margin-left f3">
                      Got a new idea? Save that as a note for improving your
                      productivity!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div class="container-fluid get-stared">
                <div class="row">
                  <div class="col-lg-6">
                    <img
                      class="first_image"
                      src={notification}
                      alt="notifications"
                    />
                  </div>
                  <div class="col-lg-6">
                    <h3 class="carhead margin-left f2">
                      A lot of accounts and passwords?{" "}
                    </h3>
                    <p class="Carousel carpara margin-left f3">
                      It's very wise to keep your accounts and passwords safe.
                      Instead of writing accounts and passwords in a paper or
                      notebook, save it online so that no one can ever know!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div class="container-fluid get-stared">
                <div class="row">
                  <div class="col-lg-6">
                    <img class="first_image" src={study} alt="study" />
                  </div>
                  <div class="col-lg-6">
                    <h3 class="carhead margin-left f2">
                      Cope up with the study!
                    </h3>
                    <p class="Carousel carpara margin-left f3">
                      Write keywords, topics, headings and problems of your
                      study topic, keep them always in your hand when needed.
                      Never have to find again in your bookshelf or under the
                      bed for those notes in paper!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div class="container-fluid get-stared">
                <div class="row">
                  <div class="col-lg-6">
                    <img class="first_image" src={complete} alt="complete" />
                  </div>
                  <div class="col-lg-6">
                    <h3 class="carhead margin-left f2">
                      Complete your daily tasks!
                    </h3>
                    <p class="Carousel carpara margin-left f3">
                      Note your daily tasks, add them when you need or delete
                      them when they are finished. Complete your everyday tasks
                      in a beautiful way!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
