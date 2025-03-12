import  { useState } from "react";
import "./Navbar.css";
import Register from "./Register";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/.Monster">Monster SCALE Summit</a>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#speakers">Speakers</a>
        <a href="#about">About</a>
        <a href="#agenda">Agenda</a>
        <button className="register-button" onClick={() => setShowModal(true)}>Register</button>
      </div>
      {showModal && <Register onClose={() => setShowModal(false)} />}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
