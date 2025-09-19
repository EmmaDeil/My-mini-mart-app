import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faConciergeBell,
  faAlignRight,
  faEnvelope,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import ServiceForm from "../Forms/ServiceForm";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mainNavbar">
        <div className="container-fluid">
          <Link className="navbar-brand the-logo" to="/">
            <img
              src="/LOGO PNG.png"
              alt="logo"
              width="50px"
              height="auto"
              className="d-inline-block align-text-top"
            />
            Ladeil Innovations
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "none" }}
          >
            <FontAwesomeIcon icon={faAlignRight} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? "#0090fc" : "#333",
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  <span className="icon-container me-2">
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </span>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services" style={({ isActive }) => ({
                    color: isActive ? "#0090fc" : "#333",
                    fontWeight: isActive ? "bold" : "normal",
                  })}>
                  <span className="icon-container me-2">
                    <FontAwesomeIcon icon={faConciergeBell} />
                  </span>
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" style={({ isActive }) => ({
                    color: isActive ? "#0090fc" : "#333",
                    fontWeight: isActive ? "bold" : "normal",
                  })}>
                  <span className="icon-container me-2">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/partners" style={({ isActive }) => ({
                    color: isActive ? "#0090fc" : "#333",
                    fontWeight: isActive ? "bold" : "normal",
                  })}>
                  <span className="icon-container me-2">
                    <FontAwesomeIcon icon={faUsers} />
                  </span>
                  Our Partners
                </NavLink>
              </li>
            </ul>
            <Link to="/serviceform" className="text-decoration-none">
              <button
                className="btn btn-primary"
                type="button"
                id="bookservice"
              >
                <FontAwesomeIcon icon={faConciergeBell} /> Leave a Feedback
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
