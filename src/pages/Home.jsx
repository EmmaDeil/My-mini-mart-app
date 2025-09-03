import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faTools, faCogs } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <div className="container-fluid topMain">
        <div className="row">
          <h1 className="display-1">
            Facility Management & Maintenance Procurement
          </h1>
          <p className="display-2">
            We help facilities manage their property and provide maintenance
            tools and systems.
          </p>
          <div className="button-group">
            <button type="button" className="btn btn-primary" style={{cursor: "pointer"}}>
              Book a Service
            </button>
            <button type="button" className="btn btn-outline-dark" style={{cursor: "pointer"}}>
              Visit Marketplace
            </button>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-6 col-md-4">
            <h1>
              <FontAwesomeIcon icon={faBuilding} />
            </h1>
            <div className="wrap-text">
              <p>
                We offer a wide range of facility management services from
                buildings, estates and offices.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <h1>
              <FontAwesomeIcon icon={faTools} />
            </h1>
            <div className="wrap-text">
              <p>We provide tools, spare parts and household items</p>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="wrap-text">
              <h1 className="icon">
                <FontAwesomeIcon icon={faCogs} className="icon" />
              </h1>
              <p>
                Some long text that should wrap within the column and
                demonstrate the CSS properties applied.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-tertiary" id="subscribe">
        <h3 className="subword">Stay Updated, Stay Connected</h3>
        <h6 className="subwork">Get Our News And Updates</h6>
        <div className="scribe">
          <input
            type="email"
            name=""
            id="email"
            placeholder="Enter your email"
            className="subinput"
          />
          <button type="submit" className="btn btn-primary subbtn">
            Subscribe
          </button>
        </div>
        <h6 className="letter-1">
          <input type="checkbox" name="checkbox" id="" />
          By subscribing you agree to our{" "}
          <a href="#" className="letter-2">
            Privacy Policy
          </a>
        </h6>
      </div>
    </div>
  );
};

export default Home;
