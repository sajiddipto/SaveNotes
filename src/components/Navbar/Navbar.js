import React from "react";
import logo from "../all_images/logo_main.png";
import "./style.css";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const Navbar = () => {
  const user = null;

  return (
    <div>
      <nav className="savenotes navbar sticky-top navbar-expand-lg dark-section light-text">
        <div className="container-fluid">
          <Link to="/" className="savenotes-brand navbar-brand light-text">
            <img className="logo" src={logo} alt="savenotes_logo" />
            SaveNotes
          </Link>
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
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Toolbar>
          {user ? (
            <Button
              onClick={() => {}}
              variant=" contained"
              size="large"
              style={{
                fontSize: "16px",
                fontFamily: "Jost",
                color: "#bbe1fa",
                backgroundColor: "#1b262c",
                border: "none",
                cursor: "pointer",
                outline: "none",
                textTransform: "none",
                paddingRight: "30px",
                paddingLeft: "0px",
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant=" contained"
              size="large"
              style={{
                fontSize: "16px",
                fontFamily: "Jost",
                color: "#bbe1fa",
                backgroundColor: "#1b262c",
                border: "none",
                cursor: "pointer",
                outline: "none",
                textTransform: "none",
                paddingRight: "30px",
                paddingLeft: "0px",
              }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </nav>
    </div>
  );
};

export default Navbar;
