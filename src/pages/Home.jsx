import React from "react";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faTools, faCogs } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="homepage">
      <div className="container topMain">
        <div className="row">
        <h1 className="display-4">
          Facility Management & Maintenance Procurement
        </h1>
        <p className="lead">
          We help facilities manage their property and provide maintenance tools
          and systems.
        </p>
        <div className="">
          <button className="btn btn-primary">Book a Service</button>
          <button className="btn btn-secondary">Visit Marketplace</button>
        </div>
      </div>
        </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-6 col-md-4">
            <h1><FontAwesomeIcon icon={faBuilding} /></h1>
            <div className="wrap-text">
            <p>We offer a wide range of facility management services from buildings, estates and offices.</p>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <h1><FontAwesomeIcon icon={faTools} /></h1>
            <div className="wrap-text">
              <p>We provide tools, spare parts and household items</p>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="wrap-text">
              <h1 className="icon"><FontAwesomeIcon icon={faCogs} /></h1>
              <p>
                Some long text that should wrap within the column and
                demonstrate the CSS properties applied.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
