import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { NavLink } from "react-router-dom"; // Import NavLink
import "./Navbar.css"; // Import CSS
import Agenda from "./Agenda";
import ContactUs from "./ContactUs";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">Monster Scale Summit</NavLink>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><NavLink to="/team" activeClassName="active">Speakers</NavLink></li>
        <li><NavLink to="/agenda" activeClassName="active">Agenda</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink to="/register" className="register-btn">Register</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;