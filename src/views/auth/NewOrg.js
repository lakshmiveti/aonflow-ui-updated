/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To render user signup page
 * Associated Route/Usage: /signup
*/


import React from 'react';
import './style.css';

const NewOrg = () => {
    return (
        <main className="parent-div">
            <div className="mainview w-75">
                <div className="row">
                    <div className="col-8 extra-detail">
                        <div className="text-center logo-container">
                            {/* <img class="logo" src="./img/aonflow-logo.svg" alt=""> */}
                            <span className="text-white welcome-msg"><span className="light-blue">Welcome</span> Jerff Hardy</span>
                        </div>
                    </div>
                    <div className="col-4 login-field">
                        <div className="p-4 my-5">
                            <h2>Create Organization</h2>
                            <form className="form-details">
                                <div className="form-group form-field">
                                    <label htmlFor="inputId1">Organization name <b className="red-color">*</b></label>
                                    <input type="text" className="form-control" id="inputId1" />
                                </div>
                                <div className="form-group form-field">
                                    <label htmlFor="inputId1">Organization URL <b className="red-color">*</b></label>
                                    <input type="text" className="form-control" id="inputId1" />
                                </div>
                                <div className="form-group form-field">
                                    <label htmlFor="exampleFormControlSelect1">Employees <b className="red-color">*</b></label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>1-5</option>
                                        <option>5-50</option>
                                        <option>50-500</option>
                                        <option>500+</option>
                                    </select>
                                </div>
                                <div className="form-group form-field">
                                    <label htmlFor="exampleFormControlSelect1">Time Zone <b className="red-color">*</b></label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>India	+05:30</option>
                                        <option>Iceland	±00:00</option>
                                        <option>Indonesia	+08:00</option>
                                        <option>Iran	+03:30</option>
                                    </select>
                                </div>
                                <div className="submit-btn mt-5">
                                    <button type="button" className="btn btn-green">Get Started</button>
                                    <button type="button" className="btn btn-grey">Get Started</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default NewOrg
