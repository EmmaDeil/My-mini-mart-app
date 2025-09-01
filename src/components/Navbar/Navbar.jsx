// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";
// import { Link } from "react-router-dom";
// import { faEnvelope, faInfoCircle, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
// const [showSearch, setShowSearch] = React.useState(false);

// return (
//    <nav className="navbar navbar-expand-lg bg-body-tertiary">
//          <div className="container-fluid">
//             <Link className="navbar-brand the-logo" to="/">
//                <img src="/LOGO PNG.png" alt="Bootstrap" width="50px" height="auto" className="d-inline-block align-text-top" />
//                Ladeil Innovations
//             </Link>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <Link className="nav-link" to="/about">
//                      <FontAwesomeIcon icon={faInfoCircle} />
//                      About
//                   </Link>
//                   <Link className="nav-link" to="/services">
//                      <FontAwesomeIcon icon={faConciergeBell} />
//                      Services
//                   </Link>
//                   <Link className="nav-link" to="/contact">
//                      <FontAwesomeIcon icon={faEnvelope} />
//                      Contact
//                   </Link>
//                   <button className="btn btn-primary">Book a Service</button>
//                </ul>
//                <div className="d-flex align-items-center" role="search">
//                   {showSearch && (
//                      <input
//                         className="form-control me-2"
//                         type="search"
//                         placeholder="Search"
//                         aria-label="Search"
//                         autoFocus
//                         style={{ transition: 'width 0.3s' }}
//                      />
//                   )}
//                   <button
//                      className="btn btn-outline-success"
//                      type="button"
//                      onClick={() => setShowSearch((prev) => !prev)}
//                   >
//                      Search
//                   </button>
//                </div>
//             </div>
//          </div>
//       </nav>
// );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  // const [showSearch, setShowSearch] = React.useState(false);

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-transparent">
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
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft: 'auto'}}>
            <li className="nav-item">
            <Link class="nav-link" to="#"> 
              <FontAwesomeIcon icon={faInfoCircle} /> 
              About
            </Link>
            </li>
            <li className="nav-item">
            <Link class="nav-link" to="#">
              <FontAwesomeIcon icon={faConciergeBell} />
              Services
            </Link>
            </li>
            {/* <Link class="nav-link" to="#">
              Link
            </Link> */}
            {/* <Link class="nav-item" to="#">
              <a class="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </Link> */}
          </ul>
            <button className="btn btn-primary"><FontAwesomeIcon icon={faConciergeBell} /> Book a Service</button>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
