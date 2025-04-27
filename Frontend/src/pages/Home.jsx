"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Home() {
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false)
    }, 1000)
  }, [])

  // Sample data for sessions
  const featuredSessions = [
    {
      id: 1,
      image: "/images/speaker-1.jpg",
      title: "Build Next-Gen Data Pipelines",
      speaker: "Chris Riccomini",
      role: "Software Architect & Author",
      description: "Explore cutting-edge techniques for designing high-performance, real-time data pipelines.",
    },
    {
      id: 2,
      image: "/images/speaker-2.jpg",
      title: "The Future of Search & AI",
      speaker: "Vicki Niu",
      role: "Senior Engineer, Discord",
      description: "Learn how AI and advanced indexing methods are revolutionizing search performance.",
    },
    {
      id: 3,
      image: "/images/speaker-3.jpg",
      title: "Mastering Cloud Architecture",
      speaker: "Kelsey Hightower",
      role: "Cloud Computing",
      description: "Gain insights into optimizing cloud infrastructure for speed, efficiency, and scalability.",
    },
  ]

  // Sample data for more tech insights
  const techInsights = [
    {
      id: 1,
      imgSrc: "/images/tech-1.jpg",
      title: "Scaling Databases for Billions of Users",
      subtitle: "Enterprise Solutions",
      description:
        "Learn how leading companies scale their databases to handle billions of users without compromising performance.",
    },
    {
      id: 2,
      imgSrc: "/images/tech-2.jpg",
      title: "Real-time Analytics at Scale",
      subtitle: "Data Processing",
      description:
        "Discover techniques for processing and analyzing massive datasets in real-time with minimal latency.",
    },
    {
      id: 3,
      imgSrc: "/images/tech-3.jpg",
      title: "NoSQL vs SQL: Making the Right Choice",
      subtitle: "Database Architecture",
      description:
        "Understand the tradeoffs between NoSQL and SQL databases and when to use each for your specific use case.",
    },
    {
      id: 4,
      imgSrc: "/images/tech-4.jpg",
      title: "Distributed Systems Design Patterns",
      subtitle: "System Architecture",
      description: "Explore proven design patterns for building resilient, fault-tolerant distributed systems.",
    },
  ]

  return (
    <motion.div className="relative overflow-hidden">
      {/* Twinkling Stars Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-blue-950 via-indigo-950 to-black">
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
      </div>

      {/* Animated Floating Planets */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"
            initial={{ opacity: 0.8 }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <header className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-white text-center">
        <motion.div
          className="max-w-4xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text font-bold">
              TEN SUMMIT
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6">Pushing the Boundaries of Data</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Explore groundbreaking innovations in database engineering and scalability.
            <br />
            Access 50+ expert-led sessions on demand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-md hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 text-white font-medium"
            >
              Register Now
            </Link>
            <Link
              to="/agenda"
              className="px-8 py-3 bg-transparent border border-white rounded-md hover:bg-white/10 transition-all duration-300 text-white font-medium"
            >
              View Agenda
            </Link>
          </div>
        </motion.div>
      </header>

      {/* Featured Sessions Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-white text-center mb-12">Top Technology Talks</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSessions.map((session) => (
              <motion.div
                key={session.id}
                className="bg-indigo-950/50 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-800/50 hover:border-indigo-600 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={session.image || "/placeholder.svg"}
                    alt={session.speaker}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{session.title}</h3>
                  <h4 className="text-lg text-indigo-300 mb-1">{session.speaker}</h4>
                  <p className="text-sm text-gray-400 mb-4">{session.role}</p>
                  <p className="text-gray-300 mb-6">{session.description}</p>
                  <Link
                    to="#"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center"
                  >
                    Watch Session
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Tech Insights Section */}
      <section className="relative z-10 py-16 px-4 bg-gradient-to-b from-transparent to-indigo-950/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-white text-center mb-12">Explore More Tech Insights</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {techInsights.map((insight) => (
              <motion.div
                key={insight.id}
                className="flex flex-col md:flex-row gap-6 bg-indigo-950/30 backdrop-blur-sm p-6 rounded-xl border border-indigo-800/50 hover:border-indigo-600 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden">
                  <img
                    src={insight.imgSrc || "/placeholder.svg"}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{insight.title}</h3>
                  <h4 className="text-sm text-indigo-400 mb-3">{insight.subtitle}</h4>
                  <p className="text-gray-300">{insight.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              to="/agenda"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-md hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 text-white font-medium inline-flex items-center"
            >
              View All Sessions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Ready to Join the Data Revolution?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with industry leaders and discover the latest innovations in database technology.
          </p>
          <Link
            to="/register"
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-md hover:from-purple-700 hover:to-indigo-800 transition-all duration-300 text-white font-medium text-lg"
          >
            Register for Free
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
