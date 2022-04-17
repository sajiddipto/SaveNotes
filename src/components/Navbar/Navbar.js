import React from "react";
import logo from "../all_images/logo_main.png";
import "./style.css";

const Navbar = () => {
  return (
    <div>
      <nav className="savenotes navbar sticky-top navbar-expand-lg dark-section light-text">
        <div className="container-fluid">
          <a className="savenotes-brand navbar-brand light-text" href="#">
            <img className="logo" src={logo} alt="savenotes_logo" />
            SaveNotes
          </a>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="navbar-item margin-left">
                <a className="nav-link" href="#about-section">
                  Why SaveNotes?
                </a>
              </li>
              <li className="navbar-item margin-left">
                <a className="nav-link" href="..../F:/jks.html">
                  Log In
                </a>
              </li>
              <li className="navbar-item margin-left">
                <a className="nav-link" href="#">
                  Register
                </a>
              </li>
              <li className="navbar-item margin-left">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
