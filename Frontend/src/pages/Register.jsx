"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Lock, User, Building, Briefcase, Globe, Mail, X } from "lucide-react"

// Sample job roles
const jobRoles = [
  "Software Developer/Engineer",
  "Director/Development Manager",
  "IT/DevOps Lead",
  "Architect",
  "DBA",
  "Product Manager",
  "Consultant/Systems Integrator",
  "IT Executive (CIO, VP Engineering, etc)",
  "Business Executive (CEO, COO, CTO, etc.)",
  "Data Scientist",
  "Student",
  "Other",
  "Operations Manager",
]

// Sample countries
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

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    jobRole: "",
    agree: false,
  })

  const [step, setStep] = useState(1)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const nextStep = () => {
    if (step === 1) {
      // Validate first step fields
      if (formData.firstName && formData.lastName && formData.email) {
        setStep(2)
      } else {
        alert("Please fill all required fields")
      }
    }
  }

  const prevStep = () => {
    setStep(1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.company && formData.country && formData.jobRole && formData.agree) {
      console.log("Form Data Submitted:", formData)
      alert("Registration successful! We'll send you a confirmation email shortly.")
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        country: "",
        jobRole: "",
        agree: false,
      })
      setStep(1)
    } else {
      alert("Please fill all required fields and agree to the terms")
    }
  }

  const inputVariants = {
    focused: { scale: 1.02, boxShadow: "0 0 8px rgba(50, 109, 230, 0.5)" },
  }

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#1a73e8" },
    tap: { scale: 0.95 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-indigo-950 to-black pt-24 pb-16 flex items-center justify-center">
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

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="bg-indigo-950/50 backdrop-blur-sm rounded-xl border border-indigo-800/50 w-full max-w-md mx-4 overflow-hidden relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6 border-b border-indigo-800/50">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">
              Monster
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Ten</span>{" "}
              Summit
            </h2>
            <Link to="/">
              <X className="h-5 w-5 text-indigo-300 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>

        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center justify-center mb-6">
            <div
              className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 1 ? "bg-indigo-600" : "bg-indigo-900"} text-white font-medium`}
            >
              1
            </div>
            <div className={`h-1 w-16 ${step >= 2 ? "bg-indigo-600" : "bg-indigo-900"}`}></div>
            <div
              className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 2 ? "bg-indigo-600" : "bg-indigo-900"} text-white font-medium`}
            >
              2
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="h-5 w-5 text-indigo-400" />
                  </div>
                  <motion.input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    whileFocus="focused"
                    variants={inputVariants}
                    className="w-full pl-10 pr-4 py-3 bg-indigo-900/30 border border-indigo-700/50 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="h-5 w-5 text-indigo-400" />
                  </div>
                  <motion.input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    whileFocus="focused"
                    variants={inputVariants}
                    className="w-full pl-10 pr-4 py-3 bg-indigo-900/30 border border-indigo-700/50 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="h-5 w-5 text-indigo-400" />
                  </div>
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Company Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    whileFocus="focused"
                    variants={inputVariants}
                    className="w-full pl-10 pr-4 py-3 bg-indigo-900/30 border border-indigo-700/50 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-md hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 text-white font-medium"
                >
                  Next Step
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Professional Details</h3>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Building className="h-5 w-5 text-indigo-400" />
                  </div>
                  <motion.input
                    type="text"
                    name="company"
                    placeholder="Company *"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    whileFocus="focused"
                    variants={inputVariants}
                    className="w-full pl-10 pr-4 py-3 bg-indigo-900/30 border border-indigo-700/50 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Globe className="h-5 w-5 text-indigo-400" />
                  </div>
                  <motion.select
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    whileFocus="focused"
                    variants={inputVariants}
                    className="w-full pl-10 pr-4 py-3 bg-indigo-900/30 border border-indigo-700/50 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%238b5cf6'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.5em 1.5em",
                    }}
                  >
                    <option value="">Country *</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </motion.select>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Briefcase className="h-5 w-5 text-indigo-400" />
                  </div>
                  <motion.select
                    name="jobRole"
                    required
                    value={formData.jobRole}
                    onChange={handleChange}
                    whileFocus="focused"
                    variants={inputVariants}
                    className="w-full pl-10 pr-4 py-3 bg-indigo-900/30 border border-indigo-700/50 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%238b5cf6'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.5em 1.5em",
                    }}
                  >
                    <option value="">Job Role *</option>
                    {jobRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </motion.select>
                </div>

                <div className="flex items-start mt-4">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="agree"
                      type="checkbox"
                      checked={formData.agree}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 bg-indigo-900/30 border border-indigo-700/50 rounded focus:ring-indigo-500 focus:ring-2"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-indigo-200 flex items-start">
                      <Lock className="h-4 w-4 mr-1 mt-0.5 text-indigo-400" />
                      <span>
                        By registering, you agree to our{" "}
                        <Link to="#" className="text-indigo-400 hover:text-white">
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link to="#" className="text-indigo-400 hover:text-white">
                          Code of Conduct
                        </Link>
                        .
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-1/3 py-3 bg-indigo-900/50 border border-indigo-700 rounded-md hover:bg-indigo-800/50 transition-all duration-300 text-white font-medium"
                  >
                    Back
                  </motion.button>

                  <motion.button
                    type="submit"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    className="w-2/3 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-md hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 text-white font-medium"
                  >
                    Register Now
                  </motion.button>
                </div>
              </motion.div>
            )}
          </form>
        </div>

        <div className="px-6 py-4 bg-indigo-900/30 border-t border-indigo-800/50 text-center">
          <p className="text-indigo-200 text-sm">Join us for the exclusive NoSQL summit!</p>
        </div>
      </motion.div>
    </div>
  )
}
