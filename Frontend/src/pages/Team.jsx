"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Twitter, Linkedin, Github, Globe } from "lucide-react"

// Sample speakers data
const speakers = [
  {
    id: 1,
    name: "Chris Riccomini",
    role: "Software Architect & Author",
    company: "Tech Innovations",
    bio: "Chris is a renowned software architect specializing in distributed systems and data pipelines. He has authored several books on system design and regularly speaks at international conferences.",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      website: "#",
    },
    featured: true,
    category: "architecture",
  },
  {
    id: 2,
    name: "Vicki Niu",
    role: "Senior Engineer",
    company: "Discord",
    bio: "Vicki leads search and AI initiatives at Discord, focusing on scalable solutions for real-time data processing. She previously worked on search infrastructure at Google.",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    featured: true,
    category: "ai",
  },
  {
    id: 3,
    name: "Kelsey Hightower",
    role: "Principal Engineer",
    company: "Cloud Computing",
    bio: "Kelsey is a respected voice in the cloud-native community, known for his work on Kubernetes and containerization. He advocates for simplicity and practicality in system design.",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      website: "#",
    },
    featured: true,
    category: "cloud",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Database Architect",
    company: "DataScale Systems",
    bio: "Sarah specializes in high-performance database systems and has led the architecture of several widely-used open-source database projects.",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    featured: false,
    category: "database",
  },
  {
    id: 5,
    name: "Miguel Rodriguez",
    role: "Chief Data Officer",
    company: "TechGiant Inc.",
    bio: "Miguel has pioneered innovative approaches to data management at scale, helping organizations transform their data infrastructure for the AI era.",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
    featured: false,
    category: "data",
  },
  {
    id: 6,
    name: "Priya Sharma",
    role: "Performance Engineer",
    company: "ScaleDB",
    bio: "Priya is an expert in database performance optimization, specializing in tuning systems for extreme throughput and minimal latency.",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      linkedin: "#",
      github: "#",
      website: "#",
    },
    featured: false,
    category: "performance",
  },
  {
    id: 7,
    name: "David Kim",
    role: "Open Source Contributor",
    company: "Database Foundation",
    bio: "David has made significant contributions to several open-source database projects and advocates for community-driven development.",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      github: "#",
      twitter: "#",
      website: "#",
    },
    featured: false,
    category: "opensource",
  },
  {
    id: 8,
    name: "Elena Rodriguez",
    role: "Cloud Solutions Architect",
    company: "CloudScale",
    bio: "Elena specializes in designing resilient database architectures in cloud environments, with expertise in multi-region deployments.",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
    featured: false,
    category: "cloud",
  },
]

const categories = [
  { id: "all", name: "All Speakers" },
  { id: "architecture", name: "Architecture" },
  { id: "database", name: "Database" },
  { id: "cloud", name: "Cloud" },
  { id: "ai", name: "AI & Search" },
  { id: "performance", name: "Performance" },
  { id: "opensource", name: "Open Source" },
  { id: "data", name: "Data Management" },
]

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

  const filteredSpeakers =
    activeCategory === "all" ? speakers : speakers.filter((speaker) => speaker.category === activeCategory)

  const handleSpeakerClick = (id) => {
    setSelectedSpeaker(id === selectedSpeaker ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-indigo-900 to-blue-900">
      <div className="relative">
        {/* Animated stars background */}
        <div className="absolute inset-0 z-0">
          {[...Array(50)].map((_, index) => (
            <motion.div
              key={index}
              className="star"
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

        <div className="relative z-10 py-12 px-4 md:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Speakers
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Meet the industry experts and thought leaders who will be sharing their knowledge and insights at the
              Monster Ten Summit
            </motion.p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
                    : "bg-indigo-950/50 text-gray-300 border border-indigo-800 hover:bg-indigo-900/50"
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * categories.indexOf(category) }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Featured speakers section */}
          {activeCategory === "all" && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Featured Speakers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {speakers
                  .filter((speaker) => speaker.featured)
                  .map((speaker) => (
                    <motion.div
                      key={speaker.id}
                      className="bg-indigo-950/70 border border-indigo-800 rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * speaker.id }}
                    >
                      <div className="relative h-64 w-full">
                        <img
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold">{speaker.name}</h3>
                        <p className="text-blue-400">{speaker.role}</p>
                        <p className="text-gray-400 text-sm mb-4">{speaker.company}</p>
                        <p className="text-gray-300 mb-4 line-clamp-3">{speaker.bio}</p>
                        <div className="flex gap-3">
                          {speaker.socials.twitter && (
                            <a
                              href={speaker.socials.twitter}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <Twitter className="w-5 h-5" />
                              <span className="sr-only">Twitter</span>
                            </a>
                          )}
                          {speaker.socials.linkedin && (
                            <a
                              href={speaker.socials.linkedin}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <Linkedin className="w-5 h-5" />
                              <span className="sr-only">LinkedIn</span>
                            </a>
                          )}
                          {speaker.socials.github && (
                            <a
                              href={speaker.socials.github}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <Github className="w-5 h-5" />
                              <span className="sr-only">GitHub</span>
                            </a>
                          )}
                          {speaker.socials.website && (
                            <a
                              href={speaker.socials.website}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <Globe className="w-5 h-5" />
                              <span className="sr-only">Website</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          )}

          {/* All speakers grid */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">
              {activeCategory === "all" ? "All Speakers" : categories.find((c) => c.id === activeCategory)?.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredSpeakers.map((speaker) => (
                <motion.div
                  key={speaker.id}
                  className={`bg-indigo-950/70 border border-indigo-800 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedSpeaker === speaker.id ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => handleSpeakerClick(speaker.id)}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * speaker.id }}
                >
                  <div className="relative h-64 w-full">
                    <img
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{speaker.name}</h3>
                    <p className="text-blue-400 text-sm">{speaker.role}</p>
                    <p className="text-gray-400 text-xs">{speaker.company}</p>

                    {selectedSpeaker === speaker.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <p className="text-gray-300 text-sm mb-4">{speaker.bio}</p>
                        <div className="flex gap-3">
                          {speaker.socials.twitter && (
                            <a
                              href={speaker.socials.twitter}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <Twitter className="w-4 h-4" />
                              <span className="sr-only">Twitter</span>
                            </a>
                          )}
                          {speaker.socials.linkedin && (
                            <a
                              href={speaker.socials.linkedin}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <Linkedin className="w-4 h-4" />
                              <span className="sr-only">LinkedIn</span>
                            </a>
                          )}
                          {speaker.socials.github && (
                            <a
                              href={speaker.socials.github}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <Github className="w-4 h-4" />
                              <span className="sr-only">GitHub</span>
                            </a>
                          )}
                          {speaker.socials.website && (
                            <a
                              href={speaker.socials.website}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <Globe className="w-4 h-4" />
                              <span className="sr-only">Website</span>
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <motion.h3
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Learn from the Best in the Industry
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Register today to secure your spot at the Monster Ten Summit
            </motion.p>
            <motion.a
              href="/register"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Register Now
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}
