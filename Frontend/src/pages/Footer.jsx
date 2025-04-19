import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaFacebook, FaSlack} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container" style={{marginBottom: 0, display: 'block'}}>
      <div className="footer-gradient-overlay"></div>
      {/* Contact Us section */}
      <div className="footer-brand-section">
        <h2 className="footer-title">TEN Summit</h2>
        <p className="footer-stats">
          <a href=".." className="footer-stat-link"><FaGithub className="footer-icon" /><span>14193</span></a>
        </p>
        <button className="footer-contact-btn">
          Contact Us →
        </button>
      </div>

      {/* Footer Links */}
      <div className="footer-links-container">
        {/* Column 1 - Company */}
        <div className="footer-column">
          <h3 className="footer-heading">COMPANY</h3>
          <ul className="footer-list">
            <li><a href=".." className="footer-link">About Us</a></li>
            <li><a href=".." className="footer-link">Team</a></li>
            <li><a href=".." className="footer-link">News</a></li>
            <li><a href=".." className="footer-link">Careers</a></li>
            <li><a href=".." className="footer-link">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 2 - Social */}
        <div className="footer-column">
          <h3 className="footer-heading">SOCIAL</h3>
          <ul className="footer-list">
            <li><a href=".." className="footer-social-link"><FaGithub className="footer-icon" /><span>GitHub</span></a></li>
            <li><a href=".." className="footer-social-link"><FaLinkedin className="footer-icon" /><span>LinkedIn</span></a></li>
            <li><a href=".." className="footer-social-link"><FaTwitter className="footer-icon" /><span>Twitter</span></a></li>
            <li><a href=".." className="footer-social-link"><FaYoutube className="footer-icon" /><span>YouTube</span></a></li>
            <li><a href=".." className="footer-social-link"><FaFacebook className="footer-icon" /><span>Facebook</span></a></li>
            <li><a href=".." className="footer-social-link">Forums</a></li>
            <li><a href=".." className="footer-social-link"><FaSlack className="footer-icon" /><span>Slack</span></a></li>
          </ul>
        </div>

        {/* Column 3 - Legal */}
        <div className="footer-column">
          <h3 className="footer-heading">LEGAL</h3>
          <ul className="footer-list">
            <li><a href=".." className="footer-link">Terms of Service</a></li>
            <li><a href=".." className="footer-link">Privacy Policy</a></li>
            <li><a href=".." className="footer-link">Cookie Policy</a></li>
            <li><a href=".." className="footer-link">Trust Center</a></li>
            <li><a href=".." className="footer-link">Legal Center</a></li>
            <li><a href=".." className="footer-link">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Monster SCALE Summit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
