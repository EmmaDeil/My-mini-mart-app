import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container-fluid mx-auto px-4 py-5">
        <div className="row">
          <div className="col footspace">
            <div className="footlogo">
              <img src="/LOGO PNG.png" alt="footlogo" />
              <span className="text-xl">Ladeil Innovations LTD</span>
            </div>
            <p className="mt-1 core">
              We provide world class facility management services and tools to
              help you manage your property with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="me-3 footicon">
                <i className="bi bi-facebook p-1"></i>
              </a>
              <a href="#" className="me-3 footicon">
                <i className="bi bi-twitter p-1"></i>
              </a>
              <a href="#" className="me-3 footicon">
                <i className="bi bi-instagram p-1"></i>
              </a>
              <a href="#" className="me-3 footicon">
                <i className="bi bi-linkedin p-1"></i>
              </a>
              <a href="#" className="me-3 footicon">
                <i className="bi bi-youtube p-1"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <h6 className="section-title">Our Services</h6>
            <p className="mt-1" style={{ fontWeight: "normal" }}>
              We offer a wide range of services to meet your needs.
            </p>
            <ul className="list-unstyled" id="serviceslist">
              <li >
                <a href="#">Facility Management</a>
              </li>
              <li>
                <a href="#">Property Maintenance</a>
              </li>
              <li>
                <a href="#">Cleaning Services</a>
              </li>
              <li>
                <a href="#">Security Services</a>
              </li>
              <li>
                <a href="#">Landscaping</a>
              </li>
              <li>
                <a href="#">Consulting</a>
              </li>
              <li>
                <a href="#">Project Management</a>
              </li>
              <li>
                <a href="#">Procurement & Sourcing</a>
              </li>
            </ul>
          </div>
          <div className="col">

          </div>
          <div className="col">
            <h6 className="section-title">Download Our App</h6>
            <p className="mt-1" style={{ fontWeight: "normal" }}>
              Get the best experience on our mobile app.
            </p>
            {/* <span>Download on App Store</span>
            <img src="/app-store-badge.png" alt="App Store" width={100} height={40} className="img-fluid inline" />
            <span>Available on the Google Play</span>
            <img src="/google-play-badge.png" alt="Google Play" width={100} height={40} className="img-fluid inline" /> */}
          </div>
          <div className="container">
            <div className="container">
              <hr className="my-4" id="footer-divider"/>
            </div>
          </div>
          <div className="col text-center">
            <p>
              &copy; {new Date().getFullYear()} The Ladeil Innovation Hub. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
