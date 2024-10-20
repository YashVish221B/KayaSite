// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: add styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/memories">Memories Timeline</Link>
        </li>
        <li>
          <Link to="/notes">Love Notes Carousel</Link>
        </li>
        <li>
          <Link to="/gallery">Polaroid Wall</Link>
        </li>
        <li>
          <Link to="/secrets">Secret Messages</Link> {/* Optional */}
        </li>
        <li>
          <Link to="/countdown">Countdown</Link> {/* Optional */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
