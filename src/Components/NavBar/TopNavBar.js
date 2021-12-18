import React from "react";
import { Link } from "react-scroll";
import Navbar from "../SideNavBar/Navbar";
import "./TopNavBar.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function TopNavBar() {
  return (
    <>
      <div className="navbar-op">
        <Link to="about" smooth={true} duration={1000}>
          <span className="nav-num">01.</span>
          <span className="nav-text">About</span>
        </Link>
        <Link to="exp" smooth={true} duration={1500}>
          <span className="nav-num">02.</span>
          <span className="nav-text">Work Experience</span>
        </Link>
        <Link to="edu" smooth={true} duration={1000}>
          <span className="nav-num">03.</span>
          <span className="nav-text">Education and Certifications</span>
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
          <span className="nav-num">04.</span>
          <span className="nav-text">Get in touch</span>
        </Link>
      </div>
      <div className="mobile">
        <Router>
          <Navbar />
        </Router>
      </div>
    </>
  );
}

export default TopNavBar;
