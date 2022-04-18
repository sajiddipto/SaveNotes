import React, { useState, useEffect } from "react";
import logo from "../all_images/logo_main.png";
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

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
        </div>
        <Toolbar>
          {user ? (
            <div className="container-fluid">
              <nav className="savenotes navbar sticky-top navbar-expand-lg dark-section light-text">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <Typography
                    variant=" contained"
                    size="large"
                    src={user.result.imageUrl}
                    style={{
                      fontSize: "30px",
                      fontFamily: "Jost",
                      color: "#bbe1fa",
                      backgroundColor: "#1b262c",
                      border: "none",
                      cursor: "pointer",
                      outline: "none",
                      textTransform: "none",
                      paddingRight: "40px",
                      paddingLeft: "0px",
                      paddingTop: "0px",
                      paddingBottom: "0px",
                    }}
                  >
                    {user.result.name.charAt(0)}
                  </Typography>
                  <Button
                    onClick={logout}
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
                      paddingRight: "20px",
                      paddingLeft: "0px",
                    }}
                  >
                    Logout
                  </Button>
                </div>
              </nav>
            </div>
          ) : (
            <div className="container-fluid">
              <nav className="savenotes navbar sticky-top navbar-expand-lg dark-section light-text">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <Button
                    component={Link}
                    to="/about"
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
                      paddingRight: "45px",
                      paddingLeft: "0px",
                    }}
                  >
                    About
                  </Button>
                  <Button
                    component={Link}
                    to="/contacts"
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
                      paddingRight: "40px",
                      paddingLeft: "0px",
                    }}
                  >
                    Contacts
                  </Button>
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
                      paddingRight: "10px",
                      paddingLeft: "0px",
                    }}
                  >
                    Login
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </Toolbar>
      </nav>
    </div>
  );
};

export default Navbar;
