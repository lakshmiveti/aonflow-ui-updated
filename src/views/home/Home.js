/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: Landing Page
 * Associated Route/Usage: /
*/

import React from 'react'
import "./home.css";
const Home = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark navbar-update">
        <div className="container-fluid container">
        <a className="navbar-brand" href="#">Aonflow</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 menu-items">
            <li className="nav-item">
                <form className="d-flex ">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></button>
                </form>
            </li>
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Products</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Why Us?</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Company</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Sign-In</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    {/* /this is Navbar */}
    {/* section 1 */}
    <section className="section-1">
        <div className="container">
        <div className="row">
            <div className="col-md-4">
            <div className="content">
                <h1 className="py-3">Automation Starts Here</h1>
                <p className="py-3 h4">Aonflow is the best integration<br />
                platform (iPaaS) to connect<br />
                applications and to automate<br />
                your business</p>
                <div className="row">
                <div className="col-6"><button type="button" className="btn btn-green w-100">Request a demo</button></div>
                <div className="col-6"><button type="button" className="btn btn-green w-100">Sign-in</button></div>
                </div>
            </div>
            </div>
            <div className="col-md-8 image-right">
            <img className="img-fluid " src="./img/banner.png" alt="" />
            </div>
        </div>
        </div>
    </section>
    {/* /section 1 */}
    {/* section 2 */}
    <section>
        <div className="container">
        <div className="text-center section-2-text">
            <h2>The perfect platform for automating and scaling</h2>
            <p>iPaaS, or integration Platform as a Service, are platforms that standardize how applications are integrated into an organization, making it easier to automate business processes and share data across applications.</p>
            <img className="py-4 img-fluid" src="./img/video.png" alt="" />
        </div>
        </div>
    </section>
    {/* /section 2 */}
    {/* Footer */}
    <footer className="footer">
        <div className="container">
        <div className="row text-white py-4">
            <div className="col-md-4">
            <p className="h3" href="#">Aonflow</p>
            <p>Amet minim mollit non deserunt <br />ullamco est sit aliqua dolor do<br /> amet sint. Velit officia consequat duis<br /> enim velit mollit. Exercitation <br />veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="col-md-4">
            <p className="h3" href="#">Quick links</p>
            <ul className="footer-list">
                <li>About Us</li>
                <li>Products</li>
                <li>Why Us?</li>
                <li>Company</li>
            </ul>
            </div>
            <div className="col-md-4">
            <p className="h3" href="#">Contact Us</p>
            <ul className="footer-list">
                <li>3891 Ranchview Dr. Richardson, </li>
                <li>California 62639</li>
                <li>(319) 555-0115</li>
                <li>(319) 555-0115</li>
                <li>example@gmail.com</li>
            </ul>
            </div>
        </div></div>
    </footer>
    </div>
  )
}

export default Home
