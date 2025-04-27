"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// Sample speakers data
const speakersData = [
  {
    id: 1,
    name: "Chris Riccomini",
    role: "Software Architect & Author",
    company: "Tech Innovations Inc.",
    bio: "Chris is a renowned software architect specializing in distributed systems and data engineering. He has authored multiple books on building scalable data pipelines and has led engineering teams at major tech companies.",
    image: "/images/speaker-1.jpg",
    topics: ["Data Pipelines", "Distributed Systems", "Real-time Processing"],
    social: {
      twitter: "https://twitter.com/chrisriccomini",
      linkedin: "https://linkedin.com/in/chrisriccomini",
      github: "https://github.com/chrisriccomini",
    },
  },
  {
    id: 2,
    name: "Vicki Niu",
    role: "Senior Engineer",
    company: "Discord",
    bio: "Vicki leads search and AI initiatives at Discord. With over 15 years of experience in search technologies, she has pioneered innovative approaches to real-time indexing and retrieval systems at scale.",
    image: "/images/speaker-2.jpg",
    topics: ["Search Technologies", "AI Integration", "Scalable Indexing"],
    social: {
      twitter: "https://twitter.com/vickinu",
      linkedin: "https://linkedin.com/in/vickinu",
      github: "https://github.com/vickinu",
    },
  },
  {
    id: 3,
    name: "Kelsey Hightower",
    role: "Principal Engineer",
    company: "Cloud Computing",
    bio: "Kelsey is a respected voice in cloud native technologies and infrastructure automation. His work has shaped how organizations approach container orchestration and cloud architecture.",
    image: "/images/speaker-3.jpg",
    topics: ["Cloud Architecture", "Kubernetes", "Infrastructure as Code"],
    social: {
      twitter: "https://twitter.com/kelseyhightower",
      linkedin: "https://linkedin.com/in/kelseyhightower",
      github: "https://github.com/kelseyhightower",
    },
  },
  {
    id: 4,
    name: "Sarah Chen",
    role: "Database Architect",
    company: "DataScale Systems",
    bio: "Sarah specializes in high-performance database systems and has led the development of several groundbreaking NoSQL solutions. Her research focuses on optimizing data access patterns for massive-scale applications.",
    image: "/images/speaker-4.jpg",
    topics: ["NoSQL Databases", "Performance Optimization", "Distributed Storage"],
    social: {
      twitter: "https://twitter.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen",
    },
  },
  {
    id: 5,
    name: "Marcus Johnson",
    role: "CTO",
    company: "TechFlow",
    bio: "Marcus has over 20 years of experience building scalable systems. He currently leads technology strategy at TechFlow, focusing on next-generation data platforms and AI integration.",
    image: "/images/speaker-5.jpg",
    topics: ["System Architecture", "Technology Strategy", "AI Systems"],
    social: {
      twitter: "https://twitter.com/marcusjohnson",
      linkedin: "https://linkedin.com/in/marcusjohnson",
      github: "https://github.com/marcusjohnson",
    },
  },
  {
    id: 6,
    name: "Elena Rodriguez",
    role: "Lead Data Scientist",
    company: "AI Innovations",
    bio: "Elena combines expertise in machine learning with deep knowledge of database systems to create intelligent data platforms. Her work has revolutionized how companies leverage their data assets.",
    image: "/images/speaker-6.jpg",
    topics: ["Machine Learning", "Data Science", "Intelligent Databases"],
    social: {
      twitter: "https://twitter.com/elenarodriguez",
      linkedin: "https://linkedin.com/in/elenarodriguez",
      github: "https://github.com/elenarodriguez",
    },
  },
]

// Filter categories
const categories = [
  "All",
  "Data Pipelines",
  "Cloud Architecture",
  "NoSQL Databases",
  "AI & Machine Learning",
  "System Architecture",
]

export default function Speakers() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedSpeaker, setExpandedSpeaker] = useState(null)

  // Filter speakers based on category and search query
  const filteredSpeakers = speakersData.filter((speaker) => {
    const matchesCategory =
      selectedCategory === "All" ||
      speaker.topics.some((topic) => topic.toLowerCase().includes(selectedCategory.toLowerCase()))

    const matchesSearch =
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.bio.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const toggleSpeakerDetails = (id) => {
    setExpandedSpeaker(expandedSpeaker === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-indigo-950 to-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Speakers
          </motion.h1>
          <motion.p
            className="text-xl text-indigo-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn from industry experts and thought leaders in database engineering, cloud architecture, and data
            science.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-white"
                      : "bg-indigo-900/50 text-indigo-200 hover:bg-indigo-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search speakers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-700 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              className="bg-indigo-950/50 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-800/50 hover:border-indigo-600 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{speaker.name}</h3>
                  <p className="text-indigo-300">{speaker.role}</p>
                  <p className="text-indigo-400 text-sm">{speaker.company}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {speaker.topics.map((topic) => (
                    <span key={topic} className="px-3 py-1 bg-indigo-900/70 text-indigo-200 text-xs rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 mb-4 line-clamp-3">{speaker.bio}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={speaker.social.twitter}
                      className="text-indigo-400 hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href={speaker.social.linkedin}
                      className="text-indigo-400 hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href={speaker.social.github}
                      className="text-indigo-400 hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>

                  <button
                    onClick={() => toggleSpeakerDetails(speaker.id)}
                    className="text-indigo-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    {expandedSpeaker === speaker.id ? "View Less" : "View More"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ml-1 transition-transform duration-300 ${expandedSpeaker === speaker.id ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No results message */}
        {filteredSpeakers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-indigo-300">No speakers found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("All")
                setSearchQuery("")
              }}
              className="mt-4 px-6 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-600 transition-colors duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
