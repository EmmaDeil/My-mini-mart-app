import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faTools, faUsers, faCheck } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer/Footer";


const stats = [
  {
    icon: faBuilding,
    value: "100+",
    label: "Buildings Managed",
    description: "We manage over 100 buildings across the region.",
  },
  {
    icon: faTools,
    value: "500+",
    label: "Maintenance Tasks",
    description: "Our team has completed over 500 maintenance tasks.",
  },
  {
    icon: faUsers,
    value: "300+",
    label: "Clients Served",
    description: "We have served over 300 clients in various sectors.",
  },
  {
    icon: faCheck,
    value: "99.9%",
    label: "Uptime Success",
    description: "Our systems have maintained 99.9% uptime.",
  }
];

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

      {/* <div className="container my-5">
        <div className="row">
          <div className="col-6 col-md-4">
            <h1>
              <FontAwesomeIcon
                icon={faBuilding}
                style={{
                  color: "dodgerblue",
                  fontSize: "4rem",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              />
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
              <FontAwesomeIcon
                icon={faTools}
                style={{
                  color: "dodgerblue",
                  fontSize: "4rem",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              />
            </h1>
            <div className="wrap-text">
              <p>We provide tools, spare parts and household items</p>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="wrap-text">
              <h1 className="icon">
                <FontAwesomeIcon
                  icon={faCogs}
                  style={{
                    color: "dodgerblue",
                    fontSize: "4rem",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                />
              </h1>
              <p>
                Some long text that should wrap within the column and
                demonstrate the CSS properties applied.
              </p>
            </div>
          </div>
        </div>
      </div> */}

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
      <div className="services-grid">
        {stats.map((stat, index) => (
          <div key={index} className="services-grid-item">
            <div className="grid-icon">
              <FontAwesomeIcon
                icon={stat.icon}
              />
            </div>
            <div className="grid-value">{stat.value}</div>
            <div className="grid-label">{stat.label}</div>
            <div className="grid-description">{stat.description}</div>
          </div>
        ))}
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
          <input type="checkbox" name="checkbox" id="" className="me-1" />
          By subscribing you agree to our{" "}
          <a href="#" className="letter-2">
            Privacy Policy
          </a>
        </h6>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
