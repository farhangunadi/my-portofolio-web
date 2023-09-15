import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";
import logo from "./../Assets/Images/LOGO2.png";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <Link to="/" className="img-wrapper">
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="Home">
          <li>Home</li>
        </Link>
        <Link to="/project" className="Project">
          <li>Project</li>
        </Link>
        <Link to="/about" className="about">
          <li>About</li>
        </Link>
        <Link to="/contact" className="Contact">
          <li>Contact</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};
