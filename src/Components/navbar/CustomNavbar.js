import React from "react";
import "./customNav.css";

export const CustomNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="http://127.0.0.1:5501/images/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#skills">
                Skills
              </a>
              <a className="nav-link" href="#project">
                Project
              </a>
              <a className="nav-link" href="#about">
                About Me
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
