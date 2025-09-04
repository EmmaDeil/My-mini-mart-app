import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SpotlightCard from "../components/SpotlightCard";

const About = () => {
  return (
    <div>
      <h2 className="abouthead">About Ladeil Innovations LTD</h2>
      <h3 className="about-h3">Our Mission</h3>
      <p className="aboutlead">
        At Ladeil, our mission is to revolutionize facility management by
        providing innovative, efficient, and user-friendly solutions. We strive
        to empower businesses to optimize their operations, reduce costs, and
        enhance the overall experience for their employees and clients. Our
        commitment is to deliver exceptional service and support, ensuring our
        clients' facilities are always in top condition using cutting-edge
        technology. We are a company focused on delivering innovative solutions
        to our clients.
      </p>

      <h3 className="about-h3">Our Values</h3>
      <div className="container">
        <div className="row our-values">
          <div className="col rad">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <FontAwesomeIcon icon={faShieldAlt} />
            <h4>Innovation</h4>
            <p>
              We embrace change and continuously seek new ways to improve our
              solutions.
            </p>
</SpotlightCard>
          </div>
          <div className="col rad">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <FontAwesomeIcon icon={faShieldAlt} />
            <h4>Integrity</h4>
            <p>We conduct our business with honesty and transparency.</p>
</SpotlightCard>
          </div>
          <div className="col rad">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <FontAwesomeIcon icon={faShieldAlt} />
            <h4>Customer Focus</h4>
            <p>
              We prioritize our clients' needs and strive to exceed their
              expectations.
            </p>
</SpotlightCard>
          </div>
          <div className="col rad">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <FontAwesomeIcon icon={faShieldAlt} />
            <h4>Collaboration</h4>
            <p>We believe in the power of teamwork and partnerships.</p>
</SpotlightCard>
          </div>
          <div className="col rad">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <FontAwesomeIcon icon={faShieldAlt} />
            <h4>Sustainability</h4>
            <p>We are committed to environmentally responsible practices.</p>
</SpotlightCard>
          </div>
        </div>
      </div>

      <h3 className="about-h3">Meet Our Team</h3>
      <p className="aboutlead">
        Our team is composed of dedicated professionals with diverse backgrounds
        and expertise in facility management, technology, and customer service.
        We work collaboratively to deliver the best solutions for our clients.
      </p>
      <div className="team-section">
         <div className="row">
        <span className="col-6 col-md-4">
          <img
            src="../src/assets/man1.png"
            alt="David Emma"
            className="teamImg"
          />
          <h4>David Emmaunel O.</h4>
          <p><i>CEO</i></p>
        </span>
        <span className="col-6 col-md-4">
          <img
            src="../src/assets/man1.png"
            alt="John Doe"
            className="teamImg"
          />
          <h4>John Doe</h4>
          <p><i>Facility Manager</i></p>
        </span>
        <span className="col-6 col-md-4">
          <img
            src="../src/assets/man1.png"
            alt="Jane Smith"
            className="teamImg"
          />

          <h4>Jane Smith</h4>
          <p><i>Technology Specialist</i></p>
        </span>
        <span className="col-6 col-md-4">
          <img
            src="../src/assets/man1.png"
            alt="Emily Johnson"
            className="teamImg"
          />
          <h4>Emily Johnson</h4>
          <p><i>Customer Service Representative</i></p>
        </span>
      </div>
         </div>
{/* <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
  
</SpotlightCard> */}
    </div>
  );
};

export default About;
