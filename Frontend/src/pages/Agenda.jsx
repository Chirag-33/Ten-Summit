"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

// Sample agenda data
const agendaData = {
  day1: {
    date: "June 10, 2024",
    title: "Day 1: Foundations & Innovations",
    events: [
      {
        id: 1,
        time: "9:00 AM",
        title: "Opening Keynote: The Future of Data at Scale",
        author: "Marcus Johnson",
        type: "CTO, TechFlow",
        description:
          "An exploration of emerging trends in database technology and how they will shape the future of data-intensive applications. Learn about the challenges and opportunities that lie ahead for organizations dealing with massive data growth.",
      },
      {
        id: 2,
        time: "10:30 AM",
        title: "Building Next-Gen Data Pipelines",
        author: "Chris Riccomini",
        type: "Software Architect & Author",
        description:
          "Discover cutting-edge techniques for designing high-performance, real-time data pipelines that can handle billions of events per day. This session covers architectural patterns, technology selection, and implementation strategies.",
      },
      {
        id: 3,
        time: "1:00 PM",
        title: "NoSQL at Massive Scale: Lessons from the Field",
        author: "Sarah Chen",
        type: "Database Architect, DataScale Systems",
        description:
          "Real-world case studies of NoSQL deployments handling petabytes of data and millions of operations per second. Learn about the architectural decisions, optimizations, and lessons learned from building some of the world's largest database clusters.",
      },
      {
        id: 4,
        time: "3:30 PM",
        title: "The Future of Search & AI",
        author: "Vicki Niu",
        type: "Senior Engineer, Discord",
        description:
          "Explore how AI and advanced indexing methods are revolutionizing search performance and capabilities. This session demonstrates practical approaches to integrating machine learning with search systems at scale.",
      },
      {
        id: 5,
        time: "5:00 PM",
        title: "Panel Discussion: Scaling Challenges in Modern Applications",
        author: "Various Speakers",
        type: "Industry Leaders",
        description:
          "A lively discussion with industry experts about the real-world challenges of scaling database systems for modern applications. Topics include cloud deployment, multi-region strategies, and handling unpredictable workloads.",
      },
    ],
  },
  day2: {
    date: "June 11, 2024",
    title: "Day 2: Advanced Techniques & Practices",
    events: [
      {
        id: 6,
        time: "9:00 AM",
        title: "Mastering Cloud Architecture for Data Systems",
        author: "Kelsey Hightower",
        type: "Principal Engineer, Cloud Computing",
        description:
          "Gain insights into optimizing cloud infrastructure for speed, efficiency, and scalability. This session covers cloud-native database deployment, Kubernetes orchestration, and multi-cloud strategies.",
      },
      {
        id: 7,
        time: "10:30 AM",
        title: "Real-time Analytics at Petabyte Scale",
        author: "Elena Rodriguez",
        type: "Lead Data Scientist, AI Innovations",
        description:
          "Learn how to build real-time analytics systems that can process and analyze petabytes of data with sub-second latency. This session covers stream processing, in-memory computing, and distributed query optimization.",
      },
      {
        id: 8,
        time: "1:00 PM",
        title: "Distributed Systems Design Patterns",
        author: "Alex Thompson",
        type: "Principal Architect, Distributed Systems Inc.",
        description:
          "A deep dive into proven design patterns for building resilient, fault-tolerant distributed systems. This session covers consensus algorithms, replication strategies, and failure handling techniques.",
      },
      {
        id: 9,
        time: "3:30 PM",
        title: "Performance Tuning Workshop: From Milliseconds to Microseconds",
        author: "Priya Sharma",
        type: "Performance Engineer, FastData",
        description:
          "A hands-on workshop focused on advanced performance tuning techniques for database systems. Learn how to identify bottlenecks, optimize queries, and tune system parameters for maximum throughput and minimum latency.",
      },
      {
        id: 10,
        time: "5:00 PM",
        title: "Closing Keynote: The Road Ahead",
        author: "Dr. James Wilson",
        type: "Chief Scientist, Data Innovations Lab",
        description:
          "A forward-looking exploration of emerging technologies and research directions in database systems and distributed computing. Learn about the innovations that will shape the next decade of data infrastructure.",
      },
    ],
  },
  day3: {
    date: "June 12, 2024",
    title: "Day 3: Workshops & Deep Dives",
    events: [
      {
        id: 11,
        time: "9:00 AM - 12:00 PM",
        title: "Workshop: Building a Scalable NoSQL Database from Scratch",
        author: "Michael Chen",
        type: "Database Engineer, ScaleDB",
        description:
          "A hands-on workshop where participants will learn the fundamentals of NoSQL database design by building a simple but scalable database system. Topics include storage engines, indexing strategies, and query processing.",
      },
      {
        id: 12,
        time: "9:00 AM - 12:00 PM",
        title: "Workshop: Advanced Data Modeling for NoSQL",
        author: "Sophia Williams",
        type: "Data Architect, ModelMasters",
        description:
          "Learn how to design effective data models for NoSQL databases that balance performance, flexibility, and maintainability. This workshop covers access patterns, denormalization strategies, and handling evolving schemas.",
      },
      {
        id: 13,
        time: "1:00 PM - 4:00 PM",
        title: "Workshop: Monitoring and Observability for Data Systems",
        author: "David Garcia",
        type: "SRE Lead, ObserveCo",
        description:
          "A practical workshop on building comprehensive monitoring and observability solutions for database systems. Learn how to instrument your applications, collect meaningful metrics, and build dashboards that provide actionable insights.",
      },
      {
        id: 14,
        time: "1:00 PM - 4:00 PM",
        title: "Workshop: Disaster Recovery and High Availability",
        author: "Jennifer Lee",
        type: "Reliability Engineer, HighNines",
        description:
          "Learn strategies and techniques for ensuring high availability and disaster recovery for critical database systems. This workshop covers replication, backup strategies, and automated failover mechanisms.",
      },
    ],
  },
  onDemand: {
    date: "Available Anytime",
    title: "On-Demand Sessions",
    events: [
      {
        id: 15,
        time: "On Demand",
        title: "Introduction to NoSQL Database Concepts",
        author: "Robert Johnson",
        type: "Education Lead, DataU",
        description:
          "A foundational overview of NoSQL database concepts, types, and use cases. Perfect for those new to NoSQL or looking to refresh their understanding of key concepts.",
      },
      {
        id: 16,
        time: "On Demand",
        title: "Migrating from Relational to NoSQL: Strategies and Pitfalls",
        author: "Lisa Brown",
        type: "Migration Specialist, DataShift",
        description:
          "Learn proven strategies for migrating applications from relational databases to NoSQL systems. This session covers data modeling transformations, migration patterns, and common pitfalls to avoid.",
      },
      {
        id: 17,
        time: "On Demand",
        title: "Security Best Practices for NoSQL Databases",
        author: "Carlos Mendez",
        type: "Security Architect, SecureData",
        description:
          "A comprehensive overview of security considerations and best practices for NoSQL database systems. Topics include authentication, authorization, encryption, and audit logging.",
      },
      {
        id: 18,
        time: "On Demand",
        title: "NoSQL Performance Benchmarking Methodologies",
        author: "Aisha Patel",
        type: "Performance Engineer, BenchmarkPro",
        description:
          "Learn how to design and conduct meaningful performance benchmarks for NoSQL database systems. This session covers workload modeling, test execution, and results analysis.",
      },
    ],
  },
}

export default function Agenda() {
  const [activeDay, setActiveDay] = useState("day1")
  const [expandedEvents, setExpandedEvents] = useState([])

  const toggleEventExpansion = (eventId) => {
    setExpandedEvents((prev) => (prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-indigo-950 to-black pt-24 pb-16">
      {/* Animated stars background */}
      <div className="fixed inset-0 z-0">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Event Agenda
          </motion.h1>
          <motion.p
            className="text-xl text-indigo-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our lineup of expert-led sessions, workshops, and keynotes.
          </motion.p>
        </div>

        {/* Day tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {Object.entries(agendaData).map(([day, data]) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`flex items-center rounded-full overflow-hidden transition-all duration-300 ${
                activeDay === day
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
                  : "bg-indigo-900/50 text-indigo-200 hover:bg-indigo-800"
              }`}
            >
              <span className="px-4 py-2 font-medium">
                {day === "day1" ? "Day 1" : day === "day2" ? "Day 2" : day === "day3" ? "Day 3" : "On Demand"}
              </span>
              <span className="px-4 py-2 bg-black/20">{day !== "onDemand" ? data.date : "Anytime"}</span>
            </button>
          ))}
        </motion.div>

        {/* Current day title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-white">{agendaData[activeDay].title}</h2>
          <p className="text-indigo-300 mt-2">
            {activeDay !== "onDemand" ? agendaData[activeDay].date : "Available for registered attendees"}
          </p>
        </motion.div>

        {/* Events */}
        <div className="space-y-6">
          {agendaData[activeDay].events.map((event, index) => (
            <motion.div
              key={event.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Time badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm font-medium rounded-full">
                  {event.time}
                </span>
              </div>

              {/* Event card */}
              <div className="bg-indigo-950/50 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-800/50 pl-6 pr-4 pt-12 pb-6">
                <div
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleEventExpansion(event.id)}
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium text-white mb-2">{event.title}</h3>
                    <p className="text-indigo-300 font-medium">{event.author}</p>
                    <p className="text-indigo-400 text-sm">{event.type}</p>
                  </div>
                  <ChevronRight
                    className={`w-6 h-6 text-indigo-400 mt-2 transition-transform duration-300 ${
                      expandedEvents.includes(event.id) ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {expandedEvents.includes(event.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <p className="text-gray-300">{event.description}</p>
                    <div className="mt-4">
                      <button className="px-4 py-2 bg-indigo-700/50 hover:bg-indigo-700 text-white text-sm rounded-md transition-colors duration-300">
                        {activeDay === "onDemand" ? "Watch Now" : "Add to Calendar"}
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
