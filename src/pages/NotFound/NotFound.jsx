
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Oops! Page not found</h2>
      <p>The page you are looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="back-home">Go Back Home</Link>
    </div>
  );
}
