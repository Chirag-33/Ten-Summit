"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".navbar")) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  // Handle menu toggle
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <motion.nav
      className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-indigo-950/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="text-xl md:text-2xl font-bold text-white flex items-center" onClick={handleLinkClick}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              Monster Ten Summit
            </span>
          </Link>

          <button
            type="button"
            className="md:hidden text-white focus:outline-none"
            onClick={handleMenuToggle}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div
            className={`
            fixed md:static top-16 left-0 w-full md:w-auto 
            transition-all duration-300 ease-in-out transform 
            ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full md:translate-x-0 opacity-0 md:opacity-100"}
            bg-indigo-950/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none
            md:flex md:items-center md:space-x-4 lg:space-x-8
            p-4 md:p-0 border-t border-indigo-900 md:border-0
          `}
          >
            <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-2 lg:space-x-6">
              <li>
                <Link
                  to="/speakers"
                  className="text-white hover:text-indigo-300 transition-colors duration-300 block py-2 md:py-0"
                  onClick={handleLinkClick}
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  to="/agenda"
                  className="text-white hover:text-indigo-300 transition-colors duration-300 block py-2 md:py-0"
                  onClick={handleLinkClick}
                >
                  Agenda
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-white hover:text-indigo-300 transition-colors duration-300 block py-2 md:py-0"
                  onClick={handleLinkClick}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-indigo-300 transition-colors duration-300 block py-2 md:py-0"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-indigo-300 transition-colors duration-300 block py-2 md:py-0"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
              <li className="md:ml-4">
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-5 py-2 rounded-md transition-all duration-300 block text-center"
                  onClick={handleLinkClick}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
