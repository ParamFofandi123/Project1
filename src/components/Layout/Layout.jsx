import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Breadcrums from "../Breadcrums/Breadcrums";
import GoToTop from "../GoToTop/GoToTop";
import InstagramIcon from "../../assets/instagram.png";
import FacebookIcon from "../../assets/facebook.png";
import TwitterIcon from "../../assets/twitter.png";
import LinkedinIcon from "../../assets/linkedin.png";
import SiteLogo from "../../assets/logo.png";
import Email from "../../assets/mail.png";
import Phone from "../../assets/phone-call.png";

import "./Layout.css";

export default function Layout() {
  // Dropdown product menu
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="layout">
      {/* Navbar */}
      <div className="top-strip">
        <div className="contact-info">
          <div className="contact-item">
            <img src={Email} alt="email" />
            <span>info.winovasolutions@gmail.com</span>
          </div>
          <div className="contact-item">
            <img src={Phone} alt="phone" />
            <span>+91 7738163686 / +971 506604885</span>
          </div>
        </div>
      </div>

      <nav className="navbar container">
        <div className="logo-container">
          <img className="site-logo" src={SiteLogo} alt="" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li><Link to="/products">Products</Link></li> */}

          <li className="dropdown" ref={dropdownRef}>
            <button className="dropbtn" onClick={toggleDropdown}>
              Products ▾
            </button>
            {open && (
              <ul className="dropdown-content">
                <li>
                  <Link to="/products/flow">Flow</Link>
                </li>
                <li>
                  <Link to="/products/level">Level</Link>
                </li>
                <li>
                  <Link to="/products/temperature">Temperture</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/career">Career</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/principals">Principals</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* {!hideBanner && <Breadcrums title="Welcome to this Page" />} */}

      {/* Page Content */}
      <main className="content container">
        <Outlet />
      </main>

      <footer className="footer full-width-footer">
  <div className="footer-inner">
    {/* Top Section: Logo + Columns */}
    <div className="footer-top">
      {/* Left Logo */}
      <div className="footer-logo">
        <img src={SiteLogo} alt="Company Logo" />
      </div>

      {/* Right Columns */}
      <div className="footer-columns">
        <div className="footer-col">
          <h3>About Us</h3>
          <p>We provide innovative solutions tailored to your business needs.</p>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p>+91 7738163686 / +971 506604885</p>
          <p>info.winovasolutions@gmail.com</p>
        </div>

        <div className="footer-col">
          <h3>Address</h3>
          <p>A, 14, Shree Guppi Hariya Inds. estate,</p>
          <p>Saki Vihar Rd, opp. Ansa, Andheri East,</p>
          <p>Mumbai, Maharashtra 400072, India</p>
        </div>
      </div>
    </div>

    {/* Social Icons */}
    <div className="footer-social">
      <h4>Follow Us</h4>
      <div className="footer-icons">
        <a href="#"><img className="icon" src={InstagramIcon} alt="Instagram" /></a>
        <a href="#"><img className="icon" src={FacebookIcon} alt="Facebook" /></a>
        <a href="#"><img className="icon" src={TwitterIcon} alt="Twitter" /></a>
        <a href="#"><img className="icon" src={LinkedinIcon} alt="LinkedIn" /></a>
      </div>
    </div>

    {/* Bottom Navigation */}
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
  </div>
</footer>



      <GoToTop />
    </div>
  );
}
