import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapPin,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const contactInfo = [
  {
    icon: faPhone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    subtitle: "Call us anytime",
  },
  {
    icon: faEnvelope,
    title: "Email",
    details: "ladeil.innovations@gmail.com",
    subtitle: "Send us a message",
  },
  {
    icon: faMapPin,
    title: "Office",
    details: "4, Mai-Angwha, Zone 7, Dutse, ",
    subtitle: "Abuja, Nigeria ",
  },
  {
    icon: faClock,
    title: "Hours",
    details: "24/7 Emergency Support",
    subtitle: "Mon-Fri: 8AM - 6PM",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showEmergencyNumber, setShowEmergencyNumber] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-5 bg-light"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div className="container px-4">
        <div className="text-center mb-5">
          <h2 className="fs-1 fw-bold text-dark mb-4">
            Get Your Free Consultation
          </h2>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "42rem" }}>
            Ready to optimize your facility management? Contact us today for a
            personalized consultation and custom quote tailored to your needs.
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="card border shadow rounded-4">
              <div className="card-header bg-white border-0">
                <h3 className="card-title fs-3 mb-0 mt-3">Send Us a Message</h3>
              </div>
              <div className="card-body">
                {submitted ? (
                  <div className="alert alert-success text-center">
                    <h4 className="alert-heading">Thank you!</h4>
                    <p className="mb-0">
                      Your message has been sent successfully. We'll get back to
                      you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label htmlFor="company" className="form-label">
                          Company Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="company"
                          placeholder="Your Company"
                          value={form.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="(555) 123-4567"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="service" className="form-label">
                        Service Interested In
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="service"
                        placeholder="e.g., Maintenance, Security, Cleaning"
                        value={form.service}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="5"
                        placeholder="Tell us about your facility management needs..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4">
            <div className="vstack gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="card border">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-3 me-4 flex-shrink-0"
                        style={{
                          width: "3rem",
                          height: "3rem",
                          backgroundColor: "rgba(13, 110, 253, 0.1)",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={info.icon}
                          className="text-primary"
                          style={{ width: "1.5rem", height: "1.5rem" }}
                        />
                      </div>
                      <div>
                        <h5 className="fw-semibold text-dark mb-1">
                          {info.title}
                        </h5>
                        <p className="text-dark fw-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-muted mb-0 fs-6">{info.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Emergency CTA Card */}
              <div
                className="card text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                }}
              >
                <div className="card-body p-4 text-center">
                  <h5 className="fs-4 fw-bold mb-2">Emergency Service?</h5>
                  <p className="mb-4" style={{ opacity: "0.9" }}>
                    We provide 24/7 emergency facility management support.
                  </p>
                  <button
                    className="btn btn-light btn-lg w-100"
                    onClick={() => setShowEmergencyNumber(!showEmergencyNumber)}
                  >
                    {showEmergencyNumber
                      ? "+1 (555) 911-HELP"
                      : "Call Emergency Line"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
