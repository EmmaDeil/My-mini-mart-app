{
  /* <div className="d-flex align-items-center" role="search">
                     {showSearch && (     
                      <input
                         className="form-control me-2"
                         type="search"
                         placeholder="Search"
                         aria-label="Search"
                         autoFocus
                         style={{ transition: 'width 0.3s' }}
                      />
                   )}
                   <button
                      className="btn btn-outline-success"
                      type="button"
                      onClick={() => setShowSearch((prev) => !prev)}
                   >
                      Search
                   </button>
                </div> */
}
// const [showSearch, setShowSearch] = React.useState(false);

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faConciergeBell,
  faAlignRight,
  faEnvelope,
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
                <Link className="nav-link" to="/about">
                  <span className="icon-container me-2">
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </span>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  <span className="icon-container me-2">
                    <FontAwesomeIcon icon={faConciergeBell} />
                  </span>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <span className="icon-container me-2">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/partners">
                  <span className="icon-container me-2">
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </span>
                  Our Partners
                </Link>
              </li>
            </ul>
            <Link to="/serviceform" className="text-decoration-none">
              <button
                className="btn btn-primary"
                type="button"
                id="bookservice"
              >
                <FontAwesomeIcon icon={faConciergeBell} /> Book a Service
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
