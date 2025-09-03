import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);
  return (
  <div className="container text-center mt-5">
    <h1 className="text-center">404</h1>
    <p className="text-center">Oops! Page Not Found</p>
    <p>The page you are looking for does not exist or has been moved.</p>
    <a href="/" className="btn btn-primary mt-3">Go Home</a>
  </div>
  );
};

export default NotFound;