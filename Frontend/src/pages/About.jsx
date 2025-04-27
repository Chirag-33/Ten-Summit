"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-indigo-950 to-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-20">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Monster Ten Summit</h1>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              The premier conference for database engineering and scalability
            </p>
          </motion.div>

          <motion.div
            className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="/images/about-hero.jpg" alt="About Monster Ten Summit" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-white text-xl md:text-2xl font-medium max-w-xl">
                Pushing the boundaries of data technology since 2018
              </p>
            </div>
          </motion.div>
        </div>

        {/* Our Mission */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-indigo-200 mb-4">
                Monster Ten Summit was founded with a clear mission: to bring together the brightest minds in database
                engineering and scalability to share knowledge, inspire innovation, and push the boundaries of what's
                possible with data technology.
              </p>
              <p className="text-indigo-200 mb-4">
                We believe that by fostering a community of experts and enthusiasts, we can accelerate the development
                of more efficient, scalable, and powerful database solutions that will shape the future of technology.
              </p>
              <p className="text-indigo-200">
                Our annual summit has grown from a small gathering of database engineers to a global event attracting
                thousands of participants from around the world, all united by their passion for building better data
                systems.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <img src="/images/mission.jpg" alt="Our Mission" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* What We Offer */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-950/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-800/50 hover:border-indigo-600 transition-all duration-300">
              <div className="bg-indigo-700/50 p-3 rounded-lg w-fit mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert-Led Sessions</h3>
              <p className="text-indigo-200">
                Learn from industry leaders and technical experts who share their knowledge, experiences, and insights
                on database engineering, scalability, and performance optimization.
              </p>
            </div>

            <div className="bg-indigo-950/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-800/50 hover:border-indigo-600 transition-all duration-300">
              <div className="bg-indigo-700/50 p-3 rounded-lg w-fit mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Networking Opportunities</h3>
              <p className="text-indigo-200">
                Connect with peers, potential collaborators, and industry leaders in a vibrant community of database
                professionals and enthusiasts from around the world.
              </p>
            </div>

            <div className="bg-indigo-950/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-800/50 hover:border-indigo-600 transition-all duration-300">
              <div className="bg-indigo-700/50 p-3 rounded-lg w-fit mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Hands-On Workshops</h3>
              <p className="text-indigo-200">
                Participate in practical, hands-on workshops where you can develop new skills, experiment with
                cutting-edge technologies, and solve real-world database challenges.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Our Team */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "Founder & CEO",
                image: "/images/team-1.jpg",
                bio: "Database architect with 20+ years of experience building scalable systems.",
              },
              {
                name: "Sarah Chen",
                role: "CTO",
                image: "/images/team-2.jpg",
                bio: "Former lead engineer at Google Cloud, expert in distributed systems.",
              },
              {
                name: "Michael Rodriguez",
                role: "Event Director",
                image: "/images/team-3.jpg",
                bio: "Organized tech conferences for over a decade with a passion for community building.",
              },
              {
                name: "Priya Sharma",
                role: "Technical Program Manager",
                image: "/images/team-4.jpg",
                bio: "Specializes in curating high-quality technical content and speaker programs.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-indigo-950/50 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-800/50 hover:border-indigo-600 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-indigo-400 mb-3">{member.role}</p>
                  <p className="text-indigo-200">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What Attendees Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Monster Ten Summit has been instrumental in helping our team stay at the cutting edge of database technology. The insights we've gained have directly translated to performance improvements in our systems.",
                author: "David Kim",
                role: "CTO, TechScale Inc.",
              },
              {
                quote:
                  "The networking opportunities alone make this event worth attending. I've connected with brilliant minds who have helped me solve complex scaling challenges that were holding our product back.",
                author: "Jennifer Wu",
                role: "Lead Database Engineer, DataFlow",
              },
              {
                quote:
                  "As someone relatively new to the field, the workshops at Monster Ten Summit provided me with practical skills that I could immediately apply to my work. The instructors were knowledgeable and approachable.",
                author: "Marcus Johnson",
                role: "Database Developer, StartupX",
              },
              {
                quote:
                  "I've attended many tech conferences, but Monster Ten Summit stands out for the quality of its content and the caliber of its speakers. It's the one event I make sure never to miss each year.",
                author: "Sophia Garcia",
                role: "VP of Engineering, DataSystems",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-indigo-950/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-800/50">
                <svg className="h-8 w-8 text-indigo-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-indigo-200 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-indigo-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="bg-indigo-950/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-800/50 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Join Us at the Next Summit</h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-8">
            Be part of the community that's shaping the future of database technology and scalability.
          </p>
          <Link
            to="/register"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-md hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 text-white font-medium inline-flex items-center"
          >
            Register Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.section>
      </div>
    </div>
  )
}
