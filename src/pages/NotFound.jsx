import React from "react";

const NotFound = () => (
  <div className="container text-center mt-5">
    <h1 className="display-4">404</h1>
    <p className="lead">Page Not Found</p>
    <p>The page you are looking for does not exist or has been moved.</p>
    <a href="/" className="btn btn-primary mt-3">Go Home</a>
  </div>
);

export default NotFound;