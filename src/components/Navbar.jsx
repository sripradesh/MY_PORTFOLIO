import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span>&nbsp;Portfolio</span>
      </div>
      <ul className="nav-links">
        <li><a href="#Hero">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#Footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
