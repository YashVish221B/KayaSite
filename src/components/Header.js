import React from 'react';


const Header = () => {
  return (
    <nav className="header-nav">
      <h1 className="site-title">Our Love Website</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#memories">Memories</a></li>
        <li><a href="#messages">Messages</a></li>
        <li><a href="#love-quotes">Love Quotes</a></li>
        <li><a href="#favorites">Favorites</a></li>
      </ul>
    </nav>
  );
};

export default Header;
