import React, { useState } from "react";
import "./style.css";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const handleSubmit = () => {};
  const handleChange = () => {};
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
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
            <button
              className="btn btn-primary btn-sm"
              onClick={switchMode}
              style={{ fontSize: "14px" }}
            >
              Already have an Account? Login here
            </button>
          </div>
        ) : (
          <div className="text-center">
            <button
              className="btn btn-primary btn-sm"
              onClick={switchMode}
              style={{ fontSize: "14px" }}
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
