/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To render user signup page
 * Associated Route/Usage: /signup
 */

import React, { useState } from "react";
import "./style.css";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [errors, setErrors] = useState({
    name: { error: false, message: "" },
    email: { error: false, message: "" },
    password: { error: false, message: "" },
    confirmPassword: { error: false, message: "" },
    terms: { error: false, message: "" },
  });

  const toggleTerms = () => {
    setSignupData({ ...signupData, terms: !signupData.terms });
    !signupData.terms &&
      setErrors({ ...errors, terms: { error: false, message: "" } });
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const passwordValidation = (name, value) => {
    value.trim() === "" &&
      setErrors({
        ...errors,
        [name]: { error: true, message: "This is  required" },
      });

    value.trim().length !== 8 &&
      setErrors({
        ...errors,
        [name]: { error: true, message: "Confirm Password should be 8 chars" },
      });

    signupData.password !== signupData.confirmPassword &&
      setErrors({
        ...errors,
        [name]: {
          error: true,
          message: "Password and Confirm password should match",
        },
      });
  };

  const checkValidation = (event) => {
    const { name, value } = event.target;
    if (value.trim() === "") {
      setErrors({
        ...errors,
        [name]: { error: true, message: "This is  required" },
      });
      return;
    }

    if (name === "email") {
      const result = validateEmail(value);
      result === false &&
        setErrors({
          ...errors,
          [name]: { error: true, message: "Please enter valid email" },
        });
      return;
    }
    if (name === "password" && value.trim().length !== 8) {
      setErrors({
        ...errors,
        [name]: { error: true, message: "Password should be 8 chars" },
      });
      return;
    }
    if (name === "confirmPassword") {
      passwordValidation(name, value);
    }
  };

  const handleChange = (event) => {
    setSignupData({ ...signupData, [event.target.name]: event.target.value });
    setErrors({
      ...errors,
      [event.target.name]: { error: false, message: "" },
    });
  };

  const signup = (event) => {
    event.preventDefault();
    console.log("signupData", signupData);
    !signupData.terms &&
      setErrors({
        ...errors,
        terms: { error: true, message: "Please accept terms & Conditions" },
      });
  };

  const { name, email, password, confirmPassword } = signupData;

  const isDisabled =
    errors.name.error ||
    errors.email.error ||
    errors.password.error ||
    errors.confirmPassword.error;

  console.log(signupData);
  console.log("isDisabled", isDisabled);
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
              <h2>Sign Up</h2>
              <form className="form-details" onSubmit={signup}>
                <div
                  className={`form-group form-field ${
                    errors.name.error ? "error" : ""
                  }`}
                >
                  <label htmlFor="name">
                    Full Name <b className="red-color">*</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    onBlur={checkValidation}
                  />
                  {errors.name.error && (
                    <span className="error-message">{errors.name.message}</span>
                  )}
                </div>
                <div
                  className={`form-group form-field ${
                    errors.email.error ? "error" : ""
                  }`}
                >
                  <label htmlFor="email">
                    Email <b className="red-color">*</b>
                  </label>
                  <input
                    type="text"
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
                  }`}
                >
                  <label htmlFor="password">
                    Password <b className="red-color">*</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputId1"
                    name="password"
                    maxLength="8"
                    value={password}
                    onChange={handleChange}
                    onBlur={checkValidation}
                  />
                  {errors.password.error && (
                    <span className="error-message">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div
                  className={`form-group form-field ${
                    errors.confirmPassword.error ? "error" : ""
                  }`}
                >
                  <label htmlFor="cp">
                    Confirm Password <b className="red-color">*</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="cp"
                    name="confirmPassword"
                    maxLength="8"
                    value={confirmPassword}
                    onChange={handleChange}
                    onBlur={checkValidation}
                  />
                  {errors.confirmPassword.error && (
                    <span className="error-message">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
                <p>
                  It looks like you‘re in <b>India</b> based on your IP. Your
                  data will be stored in the INDIA data center.{" "}
                  <a href="#">Change Country</a>
                </p>
                <div
                  className={`form-check ${errors.terms.error ? "error" : ""}`}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                    onClick={toggleTerms}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    I agree to the <a href="#">Terms of Service</a> and{" "}
                    <a href="#">Privacy Policy.</a>
                  </label>
                  {errors.terms.error && (
                    <span className="error-message">
                      {errors.terms.message}
                    </span>
                  )}
                </div>
                <div className="submit-btn mt-5">
                  <button
                    type="submit"
                    className={`btn ${isDisabled ? "btn-grey" : "btn-green"}`}
                    disabled={isDisabled}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
