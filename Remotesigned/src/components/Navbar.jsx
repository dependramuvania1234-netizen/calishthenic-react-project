import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span className="logo-text">HYBRID</span>
          <span className="logo-subtext">CALISTHENICS</span>
        </Link>

        {/* Menu */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/diets" className="nav-link">Diets</NavLink>
          <NavLink to="/fitness" className="nav-link">Fitness</NavLink>
          <NavLink to="/mental" className="nav-link">Mental Health</NavLink>
          <NavLink to="/weight-loss" className="nav-link">Knowledge Hub</NavLink>

          {/* Login Button */}
          <NavLink to="/login" className="nav-login">Log in</NavLink>
        </div>

        {/* Hamburger */}
        <div
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </div>
    </nav>
  );
}
