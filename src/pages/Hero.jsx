import React from "react";
import heroImage from "../assets/facility-hero.jpg";
import ElectManage from "../assets/man1.png";
import HeroManage from "../assets/img1.jpg";
import CleanManage from "../assets/img3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section
      className="position-relative min-vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <div
        className="container mx-auto px-4"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="row g-5 align-items-center">
          {/* Content */}
          <div className="col-lg-6">
            <div className="vstack gap-4">
              <div className="vstack gap-3">
                <h1 className="display-3 fw-bold text-dark lh-sm">
                  Professional{" "}
                  <span className="text-primary">Facility Management</span>{" "}
                  Solutions
                </h1>
                <p className="fs-5 text-muted" style={{ maxWidth: "42rem" }}>
                  Comprehensive facility management services that keep your
                  business running smoothly. From procurement to maintenance and security, we
                  handle it all with professional excellence, helping facilities
                  provide maintenance tools and systems.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="d-flex flex-column flex-sm-row gap-5">
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary"
                    style={{ width: "1.25rem", height: "1.25rem" }}
                  />
                  <span className="text-dark fs-6">24/7 Support</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary"
                    style={{ width: "1.25rem", height: "1.25rem" }}
                  />
                  <span className="text-dark fs-6">
                    Certified Professionals
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary"
                    style={{ width: "1.25rem", height: "1.25rem" }}
                  />
                  <span className="text-dark fs-6">
                    Cost-Effective Solutions
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary"
                    style={{ width: "1.25rem", height: "1.25rem" }}
                  />
                  <span className="text-dark fs-6">
                    Procurement
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button className="btn btn-primary btn-lg">
                  Book A Service Today
                  <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </button>
                <button className="btn btn-outline-secondary btn-lg">
                  Visit Marketplace
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="position-relative rounded-4 overflow-hidden shadow-lg">
               <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                 <div className="carousel-inner">
                   <div className="carousel-item active">
                     <img
                       src={heroImage}
                       alt="Professional facility management services"
                       className="d-block w-100"
                       style={{ height: "600px", objectFit: "cover" }}
                     />
                   </div>
                   <div className="carousel-item">
                     <img
                       src={ElectManage}
                       alt="Professional facility management services"
                       className="d-block w-100"
                       style={{ height: "600px", objectFit: "cover" }}
                     />
                   </div>
                   <div className="carousel-item">
                     <img
                       src={HeroManage}
                       alt="Professional facility management services"
                       className="d-block w-100"
                       style={{ height: "600px", objectFit: "cover" }}
                     />
                   </div>
                   <div className="carousel-item">
                     <img
                       src={CleanManage}
                       alt="Professional facility management services"
                       className="d-block w-100"
                       style={{ height: "600px", objectFit: "cover" }}
                     />
                   </div>
                 </div>
               </div>
                {/* <img
                  src={heroImage}
                  alt="Professional facility management services"
                  className="w-100"
                  style={{ height: "600px", objectFit: "cover" }}
                /> */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13, 110, 253, 0.2), transparent)",
                  }}
                ></div>
              </div>

              {/* Floating Stats Cards */}
              <div
                className="position-absolute bg-white rounded-3 shadow p-4 border"
                style={{ bottom: "-1.5rem", left: "-1.5rem" }}
              >
                <div className="text-center">
                  <div className="fs-2 fw-bold text-primary">2+</div>
                  <div className="fs-6 text-muted">Years Experience</div>
                </div>
              </div>

              <div
                className="position-absolute bg-white rounded-3 shadow p-4 border"
                style={{ top: "-1.5rem", right: "-1.5rem" }}
              >
                <div className="text-center">
                  <div className="fs-2 fw-bold text-primary">2+</div>
                  <div className="fs-6 text-muted">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
