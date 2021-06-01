/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To render user signup page
 * Associated Route/Usage: /signup
*/


import React from 'react';
import './style.css';

const Login = () => {
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
                            <form className="form-details">
                                <div className="form-group form-field">
                                    <label htmlFor="inputId1">Full Name <b className="red-color">*</b></label>
                                    <input type="text" className="form-control" id="inputId1" />
                                </div>
                                <div className="form-group form-field">
                                    <label htmlFor="inputId1">Email <b className="red-color">*</b></label>
                                    <input type="text" className="form-control" id="inputId1" />
                                </div>
                                <div className="form-group form-field">
                                    <label htmlFor="inputId1">Password <b className="red-color">*</b></label>
                                    <input type="text" className="form-control" id="inputId1" />
                                </div>
                                <div className="form-group form-field">
                                    <label htmlFor="inputId1">Confirm Password <b className="red-color">*</b></label>
                                    <input type="text" className="form-control" id="inputId1" />
                                </div>
                                <p>It looks like you‘re in <b>India</b> based on your IP. Your data will be stored in the INDIA data center. <a href="#">Change Country</a></p>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a>
                                    </label>
                                </div>
                                <div className="submit-btn mt-5">
                                    <button type="button" className="btn btn-green">Submit</button>
                                    <button type="button" className="btn btn-grey">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login
