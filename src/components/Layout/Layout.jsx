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
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
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

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpen(false);
  };

  // Toggle hamburger menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle dropdown in mobile
  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="layout">
      {/* Top Strip */}
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

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""} container`}>
        <div className="logo-container">
          <Link to="/" onClick={closeMobileMenu}>
            <img className="site-logo" src={SiteLogo} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          {/* Products Dropdown */}
<li
  className={`dropdown ${open ? "open" : ""}`}   // 👈 added `open` class
  ref={dropdownRef}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <Link
    to="/products"
    className={`dropbtn ${open ? "active" : ""}`}
    onClick={(e) => {
      // On mobile/tablet, toggle dropdown instead of navigating
      if (window.innerWidth <= 768) {
        e.preventDefault();
        toggleDropdown();
      } else {
        closeMobileMenu();
      }
    }}
  >
    Products ▾
  </Link>

  <ul className={`dropdown-content ${open ? "open" : ""}`}> {/* 👈 always rendered, not conditional */}
    <li>
      <Link to="/products/floats" onClick={closeMobileMenu}>
        Floats
      </Link>
    </li>
    <li>
      <Link
        to="/products/Level-instruments-and-Flappers"
        onClick={closeMobileMenu}
      >
        Level instruments and Flappers
      </Link>
    </li>
    <li>
      <Link
        to="/products/Valves-and-Fittings"
        onClick={closeMobileMenu}
      >
        Valves and Fittings
      </Link>
    </li>
  </ul>
</li>


          {/* <li>
            <Link to="/career" onClick={closeMobileMenu}>
              Career
            </Link>
          </li> */}
          <li>
            <Link to="/applications" onClick={closeMobileMenu}>
              Applications
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

   
      <main className="content container">
        <Outlet />
      </main>

     
      <footer className="footer full-width-footer">
        <div className="footer-inner">
     
          <div className="footer-top">
        
            <div className="footer-logo">
              <img src={SiteLogo} alt="Company Logo" />
            </div>

            <div className="footer-columns">
              <div className="footer-col">
                <h3>About Us</h3>
                <p>
                Your Partner in Precision and Progress.
                </p>
              </div>

              <div className="footer-col">
                <h3>Our Products</h3>
                <nav className="footer-products">
                  <ul>
                    <li>
                      <Link to="/products/floats">Floats</Link>
                    </li>
                    <li>
                      <Link to="/products/Level-instruments-and-Flappers">
                        Level instruments and Flappers
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/Valves-and-Fittings">
                        Valves and Fittings
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="footer-col">
                <h3>Contact</h3>
                <p>
                  +91 7738163686 / +971 506604885
                  <br />
                  info.winovasolutions@gmail.com
                </p>

                <h3>Address</h3>
                <p>
                  A, 14, Shree Guppi Hariya Inds. estate,
                  <br />
                  Saki Vihar Rd, opp. Ansa, Andheri East,
                  <br />
                  Mumbai, Maharashtra 400072, India
                </p>
              </div>
            </div>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="footer-icons">
              <a href="#">
                <img className="icon" src={InstagramIcon} alt="Instagram" />
              </a>
              <a href="#">
                <img className="icon" src={FacebookIcon} alt="Facebook" />
              </a>
              <a href="#">
                <img className="icon" src={TwitterIcon} alt="Twitter" />
              </a>
              <a href="#">
                <img className="icon" src={LinkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              {/* <Link to="/career">Career</Link> */}
              <Link to="/applications">Applications</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <p>
              © {new Date().getFullYear()} <strong>Winova Solutions</strong>.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <GoToTop />
    </div>
  );
}