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
                            <h2>Login</h2>
                            <form className="form-details">
                                <div className="form-group form-field">
                                    <label htmlFor="inputId1">Email</label>
                                    <input type="text" className="form-control" id="inputId1" />
                                </div>
                                <div className="form-group form-field">
                                    <label htmlFor="inputId1">Password</label>
                                    <input type="text" className="form-control" id="inputId1" />
                                </div>
                                <p className="forgot-pwd"><a href="#">Forgot Password</a></p>
                                <div className="login-with-other">
                                    <p className="text-center">or login with</p>
                                    <a href="#"><img src="/img/Google.svg" alt="" /></a>
                                    <a href="#"><img className="facebook" src="/img/Facebook.svg" alt="" /></a>
                                    <a href="#"><img className="linkedin" src="/img/Linkedin.svg" alt="" /></a>
                                </div>
                                <div className="submit-btn mt-5">
                                    <button type="button" className="btn btn-green">Login</button>
                                    <button type="button" className="btn btn-grey">Login</button>
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
