import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faTools,
  faUsers,
  faCheck,
  faAward,
  faTransgenderAlt,
  faTableCellsRowUnlock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer/Footer";
import Hero from "./Hero";
import Services from "./Services";

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
  },
];

const Home = () => {
  const [email, setEmail] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState(""); // 'loading', 'success', 'error'
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Reset previous errors
    setEmailError("");

    // Validation
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!isAgreed) {
      setEmailError("Please agree to the Privacy Policy");
      return;
    }

    // Simulate subscription process
    setSubscribeStatus("loading");

    setTimeout(() => {
      setSubscribeStatus("success");
      setEmail("");
      setIsAgreed(false);

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubscribeStatus("");
      }, 3000);
    }, 1000);
  };
  return (
    <div>
      <Hero />
      <Services />

      <div className="container-fluid my-5">
        <div className="row">
          <div className="col">
            <h3 className="fs-1 fw-bold text-dark">
              Why Choose Ladeil Innovation for your FM needs?
            </h3>
            <p className="fs-5 text-muted">
              With over 10 years of experience in the industry, we understand
              that your building is more than just a space—it's the foundation
              of your business success. We provide top-notch services tailored
              to your needs.
            </p>
            <div className="d-flex align-items-start gap-4">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 bg-outline"
                style={{
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: "rgba(13, 110, 253, 0.1)",
                }}
              >
                <FontAwesomeIcon icon={faAward} />
              </div>
              <div>
                <h3 className="text-dark fs-4 fw-semibold">
                  Certified Professionals
                </h3>
                <p className="text-muted">
                  Our team consists of certified professionals who are experts
                  in their respective fields. We ensure that all our services
                  meet the highest industry standards.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-4">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 bg-outline"
                style={{
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: "rgba(13, 110, 253, 0.1)",
                }}
              >
                <FontAwesomeIcon icon={faTransgenderAlt} />
              </div>
              <div>
                <h3 className="text-dark fs-4 fw-semibold">
                  Comprehensive Services
                </h3>
                <p className="text-muted">
                  From routine maintenance to emergency repairs, we offer a wide
                  range of facility management services to meet your needs.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-4">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 bg-outline"
                style={{
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: "rgba(13, 110, 253, 0.1)",
                }}
              >
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div>
                <h3 className="text-dark fs-4 fw-semibold">
                  Customer-Centric Approach
                </h3>
                <p className="text-muted">
                  We prioritize our clients' satisfaction and work closely with
                  you to understand your unique needs and challenges.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-4">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 bg-outline"
                style={{
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: "rgba(13, 110, 253, 0.1)",
                }}
              >
                <FontAwesomeIcon icon={faTableCellsRowUnlock} />
              </div>
              <div>
                <h3 className="text-dark fs-4 fw-semibold">24/7 Support</h3>
                <p className="text-muted">
                  Our dedicated support team is available around the clock to
                  assist you with any facility management issues that may arise.
                </p>
              </div>
            </div>
            <button className="btn btn-primary mb-3 mt-3">
              Learn About Our Process
            </button>
          </div>
          <div className="col mt-3">
            <div className="services-grid">
              {stats.map((stat, index) => (
                <div key={index} className="services-grid-item">
                  <div
                    className="grid-icon d-flex align-items-center justify-content-center rounded-4 mx-auto mb-4"
                    style={{
                      width: "4rem",
                      height: "4rem",
                      backgroundColor: "rgba(13, 110, 253, 0.1)",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={stat.icon}
                      className="w-8 h-8 text-primary"
                    />
                  </div>
                  <div className="grid-value fs-1 fw-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="grid-label fs-5 fw-semibold text-dark mb-1">
                    {stat.label}
                  </div>
                  <div className="grid-description fs-6 text-muted">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light py-5 mt-5 mb-5" id="subscribe">
        <div className="container">
          <div className="row justify-content-center py-5 mb-5">
            <div className="col-lg-8 text-center">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 me-3"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "rgba(13, 110, 253, 0.1)",
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                </div>
                <h3 className="fs-2 fw-bold text-dark mb-3 mt-3">
                  Stay Updated, Stay Connected
                </h3>
              </div>
              <h6 className="fs-5 text-muted mb-4 mt-3">Get Our News And Updates</h6>

              {subscribeStatus === "success" && (
                <div className="alert alert-success mb-4" role="alert">
                  <FontAwesomeIcon icon={faCheck} className="me-2" />
                  Thank you for subscribing! You'll receive our latest updates.
                </div>
              )}

              <form onSubmit={handleSubscribe} className="mb-4">
                <div className="row g-3 justify-content-center align-items-start">
                  <div className="col-md-6">
                    <div className="position-relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className={`form-control form-control-lg ${
                          emailError ? "is-invalid" : ""
                        }`}
                        disabled={subscribeStatus === "loading"}
                      />
                      {emailError && (
                        <div className="invalid-feedback text-start">
                          {emailError}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg px-4"
                      disabled={subscribeStatus === "loading"}
                    >
                      {subscribeStatus === "loading" ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Subscribing...
                        </>
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                  </div>
                </div>
              </form>

              <div className="form-check d-flex justify-content-center align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  id="privacyCheck"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                />
                <label
                  className="form-check-label fs-6 text-muted"
                  htmlFor="privacyCheck"
                >
                  By subscribing you agree to our{" "}
                  <a
                    href="#"
                    className="text-primary text-decoration-underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
