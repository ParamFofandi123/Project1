import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyWebsite</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/principals">Principals</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Page Content */}
      <main className="content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        {/* Top Columns */}
        <div className="footer-columns">
          <div className="footer-col">
            <h3>About Us</h3>
            <p>
              We provide innovative solutions tailored to your business needs.
            </p>
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <p>📞 +91 9876543210</p>
            <p>✉️ info@mywebsite.com</p>
          </div>
          <div className="footer-col">
            <h3>Address</h3>
            <p>📍 123 Main Street</p>
            <p>City, Country</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom">
          <nav className="footer-nav">
            <Link to="/">Home</Link>
          <Link to="/products">Products</Link>

            <Link to="/career">Career</Link>
            <Link to="/services">Services</Link>
            <Link to="/principals">Principals</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
