// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaFacebook, FaSlack } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Company */}
        <div>
          <h3 className="text-xl font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li><a href=".." className="hover:underline">About Us</a></li>
            <li><a href=".." className="hover:underline">Team</a></li>
            <li><a href=".." className="hover:underline">News</a></li>
            <li><a href=".." className="hover:underline">Careers</a></li>
            <li><a href=".." className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">SOCIAL</h3>
          <ul className="mt-2 flex flex-col space-y-2">
            <li><a href=".." className="flex items-center"><FaGithub />GitHub</a></li>
            <li><a href=".." className="flex items-center"><FaLinkedin />LinkedIn</a></li>
            <li><a href=".." className="flex items-center"><FaTwitter />Twitter</a></li>
            <li><a href=".." className="flex items-center"><FaYoutube />YouTube</a></li>
            <li><a href=".." className="flex items-center"><FaFacebook />Facebook</a></li>
            <li><a href=".." className="hover:underline">Forums</a></li>
            <li><a href=".." className="flex items-center"><FaSlack />Slack</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-bold mb-4">LEGAL</h3>
          <ul className="space-y-2">
            <li><a href=".." className="hover:underline">Terms of Service</a></li>
            <li><a href=".." className="hover:underline">Privacy Policy</a></li>
            <li><a href=".." className="hover:underline">Cookie Policy</a></li>
            <li><a href=".." className="hover:underline">Trust Center</a></li>
            <li><a href=".." className="hover:underline">Legal Center</a></li>
            <li><a href=".." className="hover:underline">Contact</a></li>

          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
