import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faShield,
  faLeaf,
  faBuilding,
  faClipboardCheck,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faWrench,
    title: "Maintenance & Repairs",
    description:
      "Preventive and corrective maintenance services to keep your facilities in optimal condition.",
    features: ["HVAC Systems", "Plumbing", "Electrical", "Equipment Servicing"],
  },
  {
    icon: faShield,
    title: "Security Management",
    description:
      "Comprehensive security solutions to protect your property and personnel.",
    features: [
      "Access Control",
      "CCTV Monitoring",
      "Security Patrols",
      "Emergency Response",
    ],
  },
  {
    icon: faLeaf,
    title: "Cleaning Services",
    description:
      "Professional cleaning and janitorial services maintaining hygiene standards.",
    features: [
      "Daily Cleaning",
      "Deep Cleaning",
      "Sanitization",
      "Waste Management",
    ],
  },
  {
    icon: faBuilding,
    title: "Space Management",
    description:
      "Efficient space planning and utilization to optimize your work environment.",
    features: [
      "Layout Planning",
      "Move Management",
      "Space Optimization",
      "Furniture Services",
    ],
  },
  {
    icon: faClipboardCheck,
    title: "Compliance & Safety",
    description:
      "Ensuring your facility meets all regulatory requirements and safety standards.",
    features: [
      "Safety Audits",
      "Compliance Monitoring",
      "Training Programs",
      "Documentation",
    ],
  },
  {
    icon: faBolt,
    title: "Energy Management",
    description:
      "Smart energy solutions to reduce costs and environmental impact.",
    features: [
      "Energy Audits",
      "Efficiency Upgrades",
      "Monitoring Systems",
      "Sustainability Plans",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-5 bg-light"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div className="container px-4">
        <div className="text-center mb-5">
          <h2 className="fs-1 fw-bold text-dark mb-4">
            Our Comprehensive Services
          </h2>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "42rem" }}>
            We provide end-to-end facility management solutions tailored to your
            business needs, ensuring optimal performance and cost efficiency.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card h-100 border shadow rounded-4"
                style={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 0.75rem 1.5rem rgba(0,0,0,.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 0.125rem 0.25rem rgba(0,0,0,.075)";
                }}
              >
                <div className="card-header bg-white border-0 pb-2 pt-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-5 mb-4"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      backgroundColor: "rgba(13, 110, 253, 0.1)",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="text-primary"
                      style={{ width: "1.5rem", height: "1.5rem" }}
                    />
                  </div>
                  <h5 className="card-title fs-4">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
                <div className="card-body pt-0">
                  <ul className="list-unstyled vstack gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="d-flex align-items-center fs-6 text-muted"
                      >
                        <div
                          className="bg-primary rounded-circle me-3"
                          style={{ width: "0.25rem", height: "0.25rem" }}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
