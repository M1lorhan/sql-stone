import React, { useState } from 'react';
import './navbar.css'; // CSS file for styling

const Navbar = () => {
  const [active, setActive] = useState('home'); // State to manage active link

  const handleClick = (section) => {
    setActive(section); // Update active state based on clicked link
  };

  return (
    <nav className="navbar">
      {/* Middle: Navigation Links */}
      <div>
          <a href="/home" className="nav-link" onClick={() => handleClick('home')}>
            Visionary Optical
          </a>
      </div>
      {/* Right side: Login and Sign Up */}
      <div className="navbar-right">
      <a href="/product" className="nav-link">
          Products
        </a>
        <a href="/login" className="nav-link">
          Login
        </a>
        <a href="/signup" className="nav-link">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
