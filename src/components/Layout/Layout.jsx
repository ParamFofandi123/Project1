import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Breadcrums from "../Breadcrums/Breadcrums"; 
import GoToTop from "../GoToTop/GoToTop";
import InstagramIcon from "../../assets/instagram.png"
import FacebookIcon from "../../assets/facebook.png"
import TwitterIcon from "../../assets/twitter.png"
import LinkedinIcon from "../../assets/linkedin.png"


import "./Layout.css";

export default function Layout() {
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
    // const location = useLocation();

  // pages where we don't want the banner
  // const hideBanner = location.pathname === "/";
  return (
    <div className="layout">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyWebsite</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li className="dropdown" ref={dropdownRef}>
                <button className="dropbtn" onClick={toggleDropdown}>
              Products ▾
            </button>
              {open && (
              <ul className="dropdown-content">
                <li><Link to="/products/electronics">Electronics</Link></li>
                <li><Link to="/products/furniture">Furniture</Link></li>
                <li><Link to="/products/clothing">Clothing</Link></li>
              </ul>
            )}
              </li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/principals">Principals</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
            {/* {!hideBanner && <Breadcrums title="Welcome to this Page" />} */}

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
      <div className="footer-bottom">
        <h4>Follow Us</h4>
        <nav className="footer-nav">
          <Link ><img className="icons" src={InstagramIcon}/></Link>
          <Link ><img className="icons" src={FacebookIcon}/></Link>
          <Link ><img className="icons" src={TwitterIcon}/></Link>
          <Link ><img className="icons" src={LinkedinIcon}/></Link>
        </nav>
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
      <GoToTop/>
    </div>
  );
}
