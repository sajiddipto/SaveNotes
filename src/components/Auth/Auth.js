import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import "./style.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = () => {};
  const handleChange = () => {};
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/savenotes");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    console.log("Google Login is unsuccessful, try again later");
  };

  return (
    <div className="m-4">
      <div className="signup-form">
        <form onSubmit={handleSubmit} method="post" className="form-horizontal">
          <div className="reg-head col-xs-8 col-xs-offset-4">
            <h2>{isSignup ? "Register" : "Login"}</h2>
          </div>

          <div>
            {isSignup && (
              <>
                <div className="form-group">
                  <label className="control-label col-xs-4">User Name</label>
                  <div className="col-xs-8">
                    <input
                      type="name"
                      className="form-control"
                      name="name"
                      required="required"
                      autoComplete="off"
                      handleChange={handleChange}
                    />
                  </div>
                </div>
              </>
            )}
            <div className="form-group">
              <label className="control-label col-xs-4">Email Address</label>
              <div className="col-xs-8">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required="required"
                  autoComplete="off"
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-xs-4">Password</label>
              <div className="col-xs-8">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  required="required"
                  autoComplete="new-password"
                  handleChange={handleChange}
                />
              </div>
            </div>
            {isSignup && (
              <div className="form-group">
                <label className="control-label col-xs-4">
                  Confirm Password
                </label>
                <div className="col-xs-8">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    required="required"
                    autoComplete="new-password"
                    handleChange={handleChange}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="form-group">
            <div className="col-xs-8 col-xs-offset-4">
              <button type="submit" className="btn btn-primary btn-lg">
                {isSignup ? "Register" : "Login"}
              </button>
            </div>
          </div>
        </form>
        {isSignup ? (
          <div className="text-center">
            <GoogleLogin
              clientId="20327560617-iq9rifam5a6k05pf2r6c6mo92pgdl0ou.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={renderProps.onClick}
                  disable={renderProps.disable}
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Register with Google
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <br />
            <button
              className="btn btn-primary btn-sm"
              onClick={switchMode}
              style={{ fontSize: "14px", marginTop: "15px" }}
            >
              Already have an Account? Login here
            </button>
          </div>
        ) : (
          <div className="text-center">
            <GoogleLogin
              clientId="20327560617-iq9rifam5a6k05pf2r6c6mo92pgdl0ou.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={renderProps.onClick}
                  disable={renderProps.disable}
                  style={{
                    fontSize: "14px",
                  }}
                  type="submit"
                >
                  Login with Google
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <br />
            <button
              className="btn btn-primary btn-sm"
              onClick={switchMode}
              style={{
                fontSize: "14px",
                marginTop: "15px",
              }}
            >
              Do not have an Account? Register here
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
