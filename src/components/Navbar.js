import React from "react";
import "../css/App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fa-solid fa-graduation-cap"></i> Hurry
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <span className="nav-item">
            <Link className="nav-link" to="/library">
              <i className="fa-solid fa-book"></i> Library
            </Link>
          </span>
          <span className="nav-item">
            <Link className="nav-link" to="/departments">
              <i className="fa-solid fa-building"></i> Departments
            </Link>
          </span>
          <span className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fa-solid fa-bed"></i> Hostel
            </Link>
          </span>
          <span className="nav-item">
            <Link className="nav-link" to="/connect">
              <i className="fa-solid fa-link"></i> Connect
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
