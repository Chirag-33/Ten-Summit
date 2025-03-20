import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import "./Navbar.css"; // Import CSS

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Monster Scale Summit</h1>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#speakers">Speakers</a></li>
        <li><a href="/agenda">Agenda</a></li>
        <li><a href="#about">About</a></li>
        <li><button className="register-btn">Register</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
