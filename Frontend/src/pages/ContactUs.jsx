"use client"

import "./ContactPage.css"
import { useState } from "react"
import {
  FaTags,
  FaComments,
  FaFileContract,
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaGlobe,
  FaPhone,
  FaComment,
} from "react-icons/fa"
import { getNames } from "country-list"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted: ", formData)
  }

  const countries = getNames()

  return (
    <div className="container">
      <div className="header">
        <div className="header-content">
          <h1>Contact Us</h1>
          <p>Data-intensive apps? Learn about NoSQL at a monstrous scale. Drop us a line, and we'll be in touch.</p>
          <button className="btn-primary">
            Chat Now <FaPaperPlane className="icon-right" />
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="info-section">
          <div className="info-card">
            <div className="info-content">
              <h3>Collaborate & Get Answers</h3>
              <p>Go To Community Forum</p>
              <p>Join Slack</p>
            </div>
            <div className="info-icon">
              <FaFileContract />
            </div>
          </div>

          <div className="info-card">
            <div className="info-content">
              <h3>Get Pricing</h3>
              <p>See Scylla Cloud Pricing</p>
              <p>Get Enterprise Pricing</p>
            </div>
            <div className="info-icon">
              <FaTags />
            </div>
          </div>

          <div className="info-card">
            <div className="info-content">
              <h3>Contact Support</h3>
              <p>Safeguard your SLAs with ScyllaDB Support</p>
              <p>Get In Touch</p>
            </div>
            <div className="info-icon">
              <FaComments />
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>General Questions?</h2>
          <p>Drop us a line, and we'll be in touch.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                  value={formData.firstName}
                />
              </div>

              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </div>
            </div>

            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            <div className="input-group">
              <FaBuilding className="input-icon" />
              <input
                type="text"
                name="company"
                placeholder="Company"
                required
                onChange={handleChange}
                value={formData.company}
              />
            </div>

            <div className="input-group">
              <FaGlobe className="input-icon" />
              <select name="country" value={formData.country} onChange={handleChange} required>
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <FaPhone className="input-icon" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                onChange={handleChange}
                value={formData.phone}
              />
            </div>

            <div className="input-group">
              <FaComment className="input-icon textarea-icon" />
              <textarea
                name="message"
                placeholder="How can we help?"
                required
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Contact Us <FaPaperPlane className="icon-right" />
            </button>
          </form>

          <p className="privacy-note">
            Your information will be handled as detailed in our <a href="#">privacy policy</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
