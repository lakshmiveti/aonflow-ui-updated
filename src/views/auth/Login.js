/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To render user signup page
 * Associated Route/Usage: /signup
 */

import React, { useState } from "react";
import "./style.css";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    email: { error: false, message: "" },
    password: { error: false, message: "" },
  });

  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: false });
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const checkValidation = (event) => {
    const { name, value } = event.target;
    if (value.trim() === "") {
      setErrors({
        ...errors,
        [name]: { error: true, message: "This is required" },
      });
      return;
    }
    if (name === "email") {
      const result = validateEmail(value);
      result === false &&
        setErrors({
          ...errors,
          [name]: { error: true, message: "Please provide valid email" },
        });
      return;
    }
    if (name === "password" && value.trim().length !== 8) {
      setErrors({
        ...errors,
        [name]: {
          error: true,
          message:
            "Password should be 8 chars with 1 number and 1 special character",
        },
      });
      return;
    }
  };

  const login = (event) => {
    event.preventDefault();
    console.log("loginData", loginData);
  };
  const { email, password } = loginData;

  return (
    <main className="parent-div">
      <div className="mainview w-75">
        <div className="row">
          <div className="col-8 extra-detail">
            <div className="text-center logo-container">
              <img className="logo" src="/img/aonflow-logo.svg" alt="" />
            </div>
          </div>
          <div className="col-4 login-field">
            <div className="p-4 my-5">
              <h2>Login</h2>
              <form className="form-details" onSubmit={login}>
                <div
                  className={`form-group form-field ${
                    errors.email.error ? "error" : ""
                  }`}
                >
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={checkValidation}
                  />
                  {errors.email.error && (
                    <span className="error-message">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div
                  className={`form-group form-field ${
                    errors.password.error ? "error" : ""
                  } `}
                >
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    maxLength="8"
                    onChange={handleChange}
                    onBlur={checkValidation}
                  />
                  {errors.password.error && (
                    <span className="error-message">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <p className="forgot-pwd">
                  <a href="#">Forgot Password</a>
                </p>
                <div className="login-with-other">
                  <p className="text-center">or login with</p>
                  <a href="#">
                    <img src="/img/Google.svg" alt="" />
                  </a>
                  <a href="#">
                    <img className="facebook" src="/img/Facebook.svg" alt="" />
                  </a>
                  <a href="#">
                    <img className="linkedin" src="/img/Linkedin.svg" alt="" />
                  </a>
                </div>
                <div className="submit-btn mt-5">
                  <button
                    type="submit"
                    className={`btn ${
                      errors.email.error ||
                      errors.password.error ||
                      !loginData.email ||
                      !loginData.password
                        ? "btn-grey"
                        : "btn-green"
                    }`}
                    disabled={
                      errors.email.error ||
                      errors.password.error ||
                      !loginData.email ||
                      !loginData.password
                    }
                  >
                    Login
                  </button>
                  {/* <button type="button" className="btn btn-grey">Login</button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
