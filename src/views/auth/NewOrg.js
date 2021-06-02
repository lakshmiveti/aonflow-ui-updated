/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To render user signup page
 * Associated Route/Usage: /signup
 */

import React, { useState } from "react";
import "./style.css";

const NewOrg = () => {
  const [orgDetails, setOrgDetails] = useState({
    orgName: "",
    orgUrl: "",
    employees: "",
    timezone: "",
  });

  const [errors, setErrors] = useState({
    orgName: false,
    orgUrl: false,
    employees: false,
    timezone: false,
  });

  const createOrg = (e) => {
    e.preventDefault();
    console.log("orgDetails", orgDetails);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrgDetails({ ...orgDetails, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const checkValidation = (event) => {
    const { name, value } = event.target;
    orgDetails[name] === ""
      ? setErrors({ ...errors, [name]: true })
      : setErrors({ ...errors, [name]: false });
  };

  const { orgName, orgUrl, employees, timezone } = orgDetails;
  console.log("orgDetails", orgDetails);

  const isDisabled =
    orgName === "" || orgUrl === "" || employees === "" || timezone === "";
  return (
    <main className="parent-div">
      <div className="mainview w-75">
        <div className="row">
          <div className="col-8 extra-detail">
            <div className="text-center logo-container">
              {/* <img class="logo" src="./img/aonflow-logo.svg" alt=""> */}
              <span className="text-white welcome-msg">
                <span className="light-blue">Welcome</span> Jerff Hardy
              </span>
            </div>
          </div>
          <div className="col-4 login-field">
            <div className="p-4 my-5">
              <h2>Create Organization</h2>
              <form className="form-details" onSubmit={createOrg}>
                <div
                  className={`form-group form-field ${
                    errors.orgName ? "error" : ""
                  }`}
                >
                  <label htmlFor="orgName" name="orgName" value={orgName}>
                    Organization name <b className="red-color">*</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="orgName"
                    name="orgName"
                    value={orgName}
                    onChange={handleChange}
                    onBlur={checkValidation}
                  />
                  {errors.orgName && (
                    <span className="error-message">This is required</span>
                  )}
                </div>
                <div
                  className={`form-group form-field ${
                    errors.orgUrl ? "error" : ""
                  }`}
                >
                  <label htmlFor="orgUrl">
                    Organization URL <b className="red-color">*</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="orgUrl"
                    name="orgUrl"
                    value={orgUrl}
                    onChange={handleChange}
                    onBlur={checkValidation}
                  />
                  {errors.orgUrl && (
                    <span className="error-message">This is required</span>
                  )}
                </div>
                <div
                  className={`form-group form-field ${
                    errors.employees ? "error" : ""
                  }`}
                >
                  <label htmlFor="exampleFormControlSelect1">
                    Employees <b className="red-color">*</b>
                  </label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    name="employees"
                    value={employees}
                    onChange={handleChange}
                    onBlur={checkValidation}
                  >
                    <option value="1-5">1-5</option>
                    <option value="5-50">5-50</option>
                    <option value="50-500">50-500</option>
                    <option value="500+">500+</option>
                  </select>
                  {errors.employees && (
                    <span className="error-message">This is required</span>
                  )}
                </div>
                <div
                  className={`form-group form-field ${
                    errors.timezone ? "error" : ""
                  }`}
                >
                  <label htmlFor="exampleFormControlSelect1">
                    Time Zone <b className="red-color">*</b>
                  </label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    name="timezone"
                    value={timezone}
                    onChange={handleChange}
                    onBlur={checkValidation}
                  >
                    <option value="india">India +05:30</option>
                    <option value="iceland">Iceland ±00:00</option>
                    <option value="indonesia">Indonesia +08:00</option>
                    <option value="iran">Iran +03:30</option>
                  </select>
                  {errors.timezone && (
                    <span className="error-message">This is required</span>
                  )}
                </div>
                <div className="submit-btn mt-5">
                  <button
                    type="submit"
                    className={`btn ${isDisabled ? "btn-grey" : "btn-green"}`}
                    disabled={isDisabled}
                  >
                    Get Started
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

export default NewOrg;
