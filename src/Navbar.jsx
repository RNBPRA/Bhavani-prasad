import React from 'react';
import './Nav.css';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        Bhavani Prasad
        </Link>
        <div className="navbar-links">
          <Link to="/" className="nav-item"><FaHome className="nav-icon" /> <span className="nav-text">Home</span></Link>
          <Link to="/about" className="nav-item"><FaUser className="nav-icon" /> <span className="nav-text">About</span></Link>
          <Link to="/projects" className="nav-item"><FaProjectDiagram className="nav-icon" /> <span className="nav-text">Projects</span></Link>
          <Link to="/contact" className="nav-item"><FaEnvelope className="nav-icon" /> <span className="nav-text">Contact</span></Link>
        </div>
        <div className="navbar-mobile-icons">
          <Link to="/" className="nav-item"><FaHome className="nav-icon" /></Link>
          <Link to="/about" className="nav-item"><FaUser className="nav-icon" /></Link>
          <Link to="/projects" className="nav-item"><FaProjectDiagram className="nav-icon" /></Link>
          <Link to="/contact" className="nav-item"><FaEnvelope className="nav-icon" /></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;