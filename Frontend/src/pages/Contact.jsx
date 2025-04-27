"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Mail, Users, Tag, HelpCircle, ArrowRight, Slack, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    message: "",
  })

  // Add space background effect
  useEffect(() => {
    document.body.classList.add("bg-gradient-to-b", "from-blue-950", "via-indigo-950", "to-black")

    return () => {
      document.body.classList.remove("bg-gradient-to-b", "from-blue-950", "via-indigo-950", "to-black")
    }
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted: ", formData)
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      country: "",
      phone: "",
      message: "",
    })
    alert("Thank you for your message! We'll respond shortly.")
  }

  // Sample list of countries
  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "China",
    "India",
    "Brazil",
    "Mexico",
    "South Africa",
    "Spain",
    "Italy",
    "Netherlands",
    "Sweden",
    "Singapore",
    "South Korea",
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Stars */}
        {[...Array(50)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 3 + 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Glow effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-indigo-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Data-intensive apps? Learn about NoSQL at a monstrous scale. Drop us a line, and we'll be in touch.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-md hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 text-white font-medium flex items-center mx-auto"
          >
            <span>Chat Now</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards Section */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-indigo-950/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-800/50 hover:border-indigo-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Community Resources</h3>
                  <p className="text-indigo-300 mb-2 flex items-center hover:text-white transition-colors cursor-pointer">
                    <span>Go To Community Forum</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </p>
                  <p className="text-indigo-300 flex items-center hover:text-white transition-colors cursor-pointer">
                    <span>Join Slack</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </p>
                </div>
                <div className="bg-indigo-700/50 p-3 rounded-lg">
                  <Users className="h-6 w-6" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-indigo-950/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-800/50 hover:border-indigo-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get Pricing</h3>
                  <p className="text-indigo-300 mb-2 flex items-center hover:text-white transition-colors cursor-pointer">
                    <span>See Summit Pricing</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </p>
                  <p className="text-indigo-300 flex items-center hover:text-white transition-colors cursor-pointer">
                    <span>Get Enterprise Pricing</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </p>
                </div>
                <div className="bg-indigo-700/50 p-3 rounded-lg">
                  <Tag className="h-6 w-6" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-indigo-950/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-800/50 hover:border-indigo-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Support</h3>
                  <p className="text-indigo-300 mb-2 flex items-center hover:text-white transition-colors cursor-pointer">
                    <span>Safeguard your SLAs with Support</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </p>
                  <p className="text-indigo-300 flex items-center hover:text-white transition-colors cursor-pointer">
                    <span>Get In Touch</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </p>
                </div>
                <div className="bg-indigo-700/50 p-3 rounded-lg">
                  <HelpCircle className="h-6 w-6" />
                </div>
              </div>
            </motion.div>

            <div className="bg-indigo-950/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-800/50">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <div className="bg-indigo-700/50 p-3 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer">
                  <Slack className="h-6 w-6" />
                </div>
                <div className="bg-indigo-700/50 p-3 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="bg-indigo-700/50 p-3 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer">
                  <MessageCircle className="h-6 w-6" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-indigo-950/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-800/50 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

              <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
              <p className="text-indigo-300 mb-6">Drop us a line, and our team will be in touch with you shortly.</p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      onChange={handleChange}
                      value={formData.firstName}
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-700/50 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      onChange={handleChange}
                      value={formData.lastName}
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-700/50 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-700/50 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    required
                    onChange={handleChange}
                    value={formData.company}
                    className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-700/50 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <select
                      name="country"
                      required
                      onChange={handleChange}
                      value={formData.country}
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-700/50 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%238b5cf6'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        backgroundSize: "1.5em 1.5em",
                      }}
                    >
                      <option value="">Select Your Country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      onChange={handleChange}
                      value={formData.phone}
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-700/50 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    onChange={handleChange}
                    value={formData.message}
                    className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-700/50 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-md hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 text-white font-medium flex items-center"
                >
                  <span>Submit</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>

                <p className="mt-4 text-sm text-indigo-400">
                  By submitting this form, you agree to our{" "}
                  <Link to="/privacy-policy" className="text-indigo-300 hover:text-white">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
