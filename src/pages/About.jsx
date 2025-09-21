import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SpotlightCard from "../components/SpotlightCard";
import { Handshake } from "lucide-react";
import TeamSection from "./TeamSection";


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
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <FontAwesomeIcon icon={faShieldAlt} />
              <h4>Innovation</h4>
              <p>
                We embrace change and continuously seek new ways to improve our
                solutions.
              </p>
            </SpotlightCard>
          </div>
          <div className="col rad">
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <FontAwesomeIcon icon={faShieldAlt} />
              <h4>Integrity</h4>
              <p>We conduct our business with honesty and transparency.</p>
            </SpotlightCard>
          </div>
          <div className="col rad">
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <FontAwesomeIcon icon={faShieldAlt} />
              <h4>Customer Focus</h4>
              <p>
                We prioritize our clients' needs and strive to exceed their
                expectations.
              </p>
            </SpotlightCard>
          </div>
          <div className="col rad">
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Handshake />
              <h4>Collaboration</h4>
              <p>We believe in the power of teamwork and partnerships.</p>
            </SpotlightCard>
          </div>
          <div className="col rad">
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <FontAwesomeIcon icon={faShieldAlt} />
              <h4>Sustainability</h4>
              <p>We are committed to environmentally responsible practices.</p>
            </SpotlightCard>
          </div>
        </div>
      </div>

       <TeamSection />
    </div>
  );
};

export default About;
