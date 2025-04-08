import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaFacebook, FaSlack} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black px-6 md:px-10 py-16 text-white">
      {/* Contact Us section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold">Monster SCALE Summit</h2>
        <p className="mt-2 flex justify-right items-center space-x-2">
        <a href=".." className="flex items-center"><FaGithub />14193</a>
        </p>
        <button className="mt-4 px-6 py-3 border border-blue-500 hover:border-blue-500 text-white transition">
          Contact Us →
        </button>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {/* Column 1 - Company */}
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

        {/* Column 2 - Social */}
        {/* Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">SOCIAL</h3>
          <ul className="mt-2 flex flex-col space-y-2">
            <li><a href=".." className="flex items-center"><FaGithub />GitHub</a></li>
            <li><a href=".." className="flex items-center"><FaLinkedin />LinkedIn</a></li>
            <li><a href=".." className="flex items-center"><FaTwitter />Twitter</a></li>
            <li><a href=".." className="flex items-center"><FaYoutube />YouTube</a></li>
            <li><a href=".." className="flex items-center"><FaFacebook />Facebook</a></li>
            <li><a href=".." className="hover:underline">FaForums</a></li>
            <li><a href=".." className="flex items-center"><FaSlack />Slack</a></li>
          </ul>
        </div>

        {/* Column 3 - Legal */}
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

export default Footer;
