import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <h2 className="abouthead">About Ladeil Innovations LTD</h2>
      <h3>Our Mission</h3>
      <p className="lead">
        At Ladeil, our mission is to revolutionize facility management by
        providing innovative, efficient, and user-friendly solutions. We strive
        to empower businesses to optimize their operations, reduce costs, and
        enhance the overall experience for their employees and clients. Our
        commitment is to deliver exceptional service and support, ensuring our
        clients' facilities are always in top condition using cutting-edge
        technology. We are a company focused on delivering innovative solutions
        to our clients.
      </p>

      <h3>Our Values</h3>
      <div className="container">
        <div className="row g-5 values">
          <div className="col rad">
            <FontAwesomeIcon icon={faShieldAlt} />
            <h4>Innovation</h4>
            <p>
              We embrace change and continuously seek new ways to improve our
              solutions.
            </p>
          </div>
          <div className="col rad">
            <FontAwesomeIcon icon={faShieldAlt} />
            <h4>Integrity</h4>
            <p>We conduct our business with honesty and transparency.</p>
          </div>
          <div className="col rad">
            <FontAwesomeIcon icon={faShieldAlt} />
            <h4>Customer Focus</h4>
            <p>
              We prioritize our clients' needs and strive to exceed their
              expectations.
            </p>
          </div>
          <div className="col rad">
            <FontAwesomeIcon icon={faShieldAlt} />
            <h4>Collaboration</h4>
            <p>We believe in the power of teamwork and partnerships.</p>
          </div>
          <div className="col rad">
            <FontAwesomeIcon icon={faShieldAlt} />
            <h4>Sustainability</h4>
            <p>We are committed to environmentally responsible practices.</p>
          </div>
        </div>
      </div>
      
      <h3>Meet Our Team</h3>
      <p className="lead">
        Our team is composed of dedicated professionals with diverse backgrounds
        and expertise in facility management, technology, and customer service.
        We work collaboratively to deliver the best solutions for our clients.
      </p>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="../src/assets/man1.png"
              alt="John Doe"
              className="teamImg"
              width={100}
              height={100}
            />

            <h4>John Doe</h4>
            <p>Facility Manager</p>
          </div>
          <div className="col">
            <img
              src="../src/assets/man1.png"
              alt="Jane Smith"
              className="teamImg"
              width={100}
              height={100}
            />

            <h4>Jane Smith</h4>
            <p>Technology Specialist</p>
          </div>
          <div className="col">
            <img
              src="../src/assets/man1.png"
              alt="Emily Johnson"
              className="teamImg"
              width={100}
              height={100}
            />

            <h4>Emily Johnson</h4>
            <p>Customer Service Representative</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
