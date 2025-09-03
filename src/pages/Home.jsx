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
            <button
              type="button"
              className="btn btn-primary"
              style={{ cursor: "pointer" }}
            >
              Book a Service
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              style={{ cursor: "pointer" }}
            >
              Visit Marketplace
            </button>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-6 col-md-4">
            <h1>
              <FontAwesomeIcon icon={faBuilding} style={{ color: "dodgerblue", fontSize: "4rem" }} />
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

      <div className="container-fluid my-5">
        <div className="row">
          <div className="col">
            <h3>
              Why Choose Ladeil Innovation for your facility management needs?
            </h3>
            <p>
              With over 10 years of experience in the industry, we understand
              that your building is more than just a space—it's the foundation
              of your business success. We provide top-notch services tailored
              to your needs.
            </p>
          </div>
          <div className="col">
            <div className="card-body" id="card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <FontAwesomeIcon
                  icon={faBuilding}
                  style={{
                    color: "dodgerblue",
                    fontSize: "4rem",
                    margin: "1rem 0",
                  }}
                />
              </div>
              <h5 className="card-title">Our Commitment to Excellence</h5>
              <p className="card-text">
                We are dedicated to providing the highest quality of service and
                support to our clients. Our team of experts is always ready to
                assist you with your facility management needs.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
            <div className="card-body" id="card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <FontAwesomeIcon
                  icon={faTools}
                  style={{
                    color: "dodgerblue",
                    fontSize: "4rem",
                    margin: "1rem 0",
                  }}
                />
              </div>
              <h5 className="card-title">Expertise You Can Trust</h5>
              <p className="card-text">
                Our team consists of industry professionals with extensive
                knowledge and experience in facility management.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
            <div className="card-body" id="card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <FontAwesomeIcon
                  icon={faCogs}
                  style={{
                    color: "dodgerblue",
                    fontSize: "4rem",
                    margin: "1rem 0",
                  }}
                />
              </div>
              <h5 className="card-title">Our Commitment to Excellence</h5>
              <p className="card-text">
                We are dedicated to providing the highest quality of service and
                support to our clients. Our team of experts is always ready to
                assist you with your facility management needs.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
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
          <input type="checkbox" name="checkbox" id="" className="me-2"/>
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
