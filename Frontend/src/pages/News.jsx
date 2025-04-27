"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

// Sample news data
const newsData = [
  {
    id: 1,
    title: "New Monster Ten Release Delivers Unprecedented Elasticity & Efficiency via 'Tablets' Architecture",
    date: "December 3, 2024",
    image: "/images/news-1.jpg",
    source: "TechCrunch",
    sourceImage: "/images/techcrunch-logo.png",
    category: "news",
  },
  {
    id: 2,
    title: "Monster Ten Announces 6.0 Release for True Elastic Scale",
    date: "June 12, 2024",
    image: "/images/news-2.jpg",
    source: "VentureBeat",
    sourceImage: "/images/venturebeat-logo.png",
    category: "press",
  },
  {
    id: 3,
    title: "Monster Ten Release Achieves 50% Higher Throughput, 33% Lower Latency",
    date: "February 20, 2024",
    image: "/images/news-3.jpg",
    source: "InfoWorld",
    sourceImage: "/images/infoworld-logo.png",
    category: "press",
  },
  {
    id: 4,
    title: "Monster Ten Named Fastest Growing NoSQL Database on Deloitte Fast 500 List",
    date: "November 14, 2023",
    image: "/images/news-4.jpg",
    source: "Forbes",
    sourceImage: "/images/forbes-logo.png",
    category: "news",
  },
  {
    id: 5,
    title: "Monster Ten Raises $43M to Take on MongoDB at Scale, Push Database Performance to New Levels",
    date: "October 17, 2023",
    image: "/images/news-5.jpg",
    source: "TechCrunch",
    sourceImage: "/images/techcrunch-logo.png",
    category: "news",
  },
  {
    id: 6,
    title: "Monster Ten Wins Google Cloud Customer of the Year Award",
    date: "August 29, 2023",
    image: "/images/news-6.jpg",
    source: "Google Cloud Blog",
    sourceImage: "/images/google-cloud-logo.png",
    category: "press",
  },
  {
    id: 7,
    title: "Monster Ten Announces NoSQL Release With Raft for Strong Consistency",
    date: "August 22, 2023",
    image: "/images/news-7.jpg",
    source: "ZDNet",
    sourceImage: "/images/zdnet-logo.png",
    category: "press",
  },
  {
    id: 8,
    title: "ZEE5 Moves to Monster Ten NoSQL to Enhance User Experience at Scale with Predictable Costs",
    date: "May 23, 2023",
    image: "/images/news-8.jpg",
    source: "Business Insider",
    sourceImage: "/images/business-insider-logo.png",
    category: "news",
  },
]

// Sample press releases
const pressReleases = [
  {
    id: 1,
    title: "New Monster Ten Release Delivers Unprecedented Elasticity & Efficiency via 'Tablets' Architecture",
    date: "December 3, 2024",
  },
  {
    id: 2,
    title: "Monster Ten Announces 6.0 Release for True Elastic Scale",
    date: "June 12, 2024",
  },
  {
    id: 3,
    title: "New Monster Ten Release Achieves 50% Higher Throughput, 33% Lower Latency",
    date: "February 20, 2024",
  },
  {
    id: 4,
    title: "Monster Ten Named Fastest Growing NoSQL Database on Deloitte Fast 500 List for the Second Consecutive Year",
    date: "November 14, 2023",
  },
  {
    id: 5,
    title: "Monster Ten Raises $43M to Take on MongoDB at Scale, Push Database Performance to New Levels",
    date: "October 17, 2023",
  },
  {
    id: 6,
    title: "Monster Ten Wins Google Cloud Customer of the Year Award",
    date: "August 29, 2023",
  },
  {
    id: 7,
    title: "Monster Ten Announces NoSQL Release With Raft for Strong Consistency",
    date: "August 22, 2023",
  },
  {
    id: 8,
    title: "ZEE5 Moves to Monster Ten NoSQL to Enhance User Experience at Scale with Predictable Costs",
    date: "May 23, 2023",
  },
  {
    id: 9,
    title: "Monster Ten Adds Jon Bakke of MariaDB to its Leadership Team, Supporting Rapid DBaaS Growth",
    date: "April 18, 2023",
  },
  {
    id: 10,
    title: "Monster Ten Continues Record Growth in Response to Rising Cloud Cost Pressures",
    date: "February 28, 2023",
  },
]

export default function News() {
  const [activeTab, setActiveTab] = useState("news")

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-indigo-950 to-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mb-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Monster Ten in the News</h1>
          </motion.div>

          <motion.div
            className="relative h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="/images/news-header.jpg" alt="News Header" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent opacity-70"></div>
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative bg-indigo-900/50 backdrop-blur-sm rounded-full p-1 flex w-full max-w-xs">
            <div
              className={`absolute top-1 bottom-1 ${activeTab === "news" ? "left-1" : "right-1"} w-[calc(50%-2px)] bg-indigo-600 rounded-full transition-all duration-300`}
            ></div>
            <button
              className={`relative z-10 w-1/2 py-2 text-center rounded-full transition-colors duration-300 ${activeTab === "news" ? "text-white" : "text-indigo-300"}`}
              onClick={() => setActiveTab("news")}
            >
              In The News
            </button>
            <button
              className={`relative z-10 w-1/2 py-2 text-center rounded-full transition-colors duration-300 ${activeTab === "press" ? "text-white" : "text-indigo-300"}`}
              onClick={() => setActiveTab("press")}
            >
              Press Releases
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <div>
          {activeTab === "news" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData
                .filter((item) => item.category === "news")
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="bg-indigo-950/50 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-800/50 hover:border-indigo-600 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="relative h-6 w-6 mr-2">
                          <img
                            src={item.sourceImage || "/placeholder.svg"}
                            alt={item.source}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-sm text-indigo-300">{item.source}</span>
                        <span className="mx-2 text-indigo-500">•</span>
                        <span className="text-sm text-indigo-400">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4 line-clamp-2">{item.title}</h3>
                      <Link
                        to="#"
                        className="text-indigo-400 hover:text-white transition-colors duration-300 flex items-center"
                      >
                        Read Article
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          ) : (
            <div className="bg-indigo-950/50 backdrop-blur-sm rounded-xl border border-indigo-800/50 overflow-hidden">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.id}
                  className="border-b border-indigo-800/50 last:border-b-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <div className="p-6">
                    <div className="text-indigo-400 mb-2">{release.date}</div>
                    <h3 className="text-xl text-white hover:text-indigo-300 transition-colors duration-300">
                      <Link to="#">{release.title}</Link>
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-indigo-950/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-800/50 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="mr-6">
              <img src="/images/mascot.png" alt="Contact" width={100} height={100} className="object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Get More Information</h3>
              <p className="text-indigo-300 mb-4">Need additional information about our events or news?</p>
              <Link
                to="/contact"
                className="text-indigo-400 hover:text-white transition-colors duration-300 flex items-center"
              >
                Visit Contact Page
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-indigo-950/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-800/50 flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="mr-6">
              <img src="/images/careers.png" alt="Careers" width={100} height={100} className="object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">We're Hiring!</h3>
              <p className="text-indigo-300 mb-4">Ready to become a Data Monster?</p>
              <Link
                to="#"
                className="px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-md transition-colors duration-300 inline-block"
              >
                View our open positions
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
