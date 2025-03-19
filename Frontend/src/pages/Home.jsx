import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import sectionsData from "../assets/sectionData";

import { useState, useEffect } from "react";


const Home = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false); // Stop animation after 1 second
    }, 1000);
  }, []);

  return (
    <motion.div
       className="home-container animated-space"
      initial={{ backgroundPosition: "0% 0%" }}
      animate={animate ? { backgroundPosition: "50% 50%" } : {}}
      transition={{ duration: 6, ease: "linear" }}
    >
      <header className="hero">
        <motion.div
          className="hero-content"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="title">
            Welcome to <span className="scale">TEN SUMMIT</span>
          </h1>
          <h2 className="subtitle">Pushing the Boundaries of Data</h2>
          <p className="description">
            Explore groundbreaking innovations in database engineering and
            scalability.
            <br />
            Access 50+ expert-led sessions on demand.
          </p>
        </motion.div>
      </header>

      {/* Featured Sessions Section */}
      <section className="featured-sessions">
        <h2 className="session-title">Top Technology Talks</h2>
        <div className="session-cards">
          <div className="session-box">
            <div className="session-card">
              <img
                src="https://www.scylladb.com/wp-content/uploads/1280x881-summit25-techtalk-speakers_0052_Chris-Riccomini-Materialized-View-Martin-Kleppmann-Campbridge-U.jpg"
                alt="Chris Riccomini & Martin Kleppmann"
              />
              <div className="session-preview__info">
                <h3 className="session-preview__title">
                  <a href="#">Build Next-Gen Data Pipelines</a>
                </h3>
                <h4 className="session-preview__speaker-info">
                  Chris Riccomini
                </h4>
                <p>Software Architect & Author</p>
              
                <div className="session-preview__desc">
                  Explore cutting-edge techniques for designing
                  high-performance, real-time data pipelines.
                </div>
                <a className="session-preview__video-link" href="#">
                  Watch Session
                </a>
              </div>
            </div>
            <div className="session-card">
              <img
                src="https://www.scylladb.com/wp-content/uploads/1280x881-summit25-techtalk-speakers_0019_Vicki-Niu-Discord.jpg"
                alt="Vicki Niu at Discord"
              />
              <div className="session-preview__info">
                <h3 className="session-preview__title">
                  <a href="#">The Future of Search & AI</a>
                </h3>
                <h4 className="session-preview__speaker-info">Vicki Niu</h4>
                <p>Senior Engineer, Discord</p>
                <div className="session-preview__desc">
                  Learn how AI and advanced indexing methods are revolutionizing
                  search performance.
                </div>
                <a className="session-preview__video-link" href="#">
                  Watch Session
                </a>
              </div>
            </div>
            <div className="session-card">
              <img
                src="https://www.scylladb.com/wp-content/uploads/1280x881-summit25-techtalk-speakers_0016_Kelsey-Hightower.jpg"
                alt="Kelsey Hightower - Cloud Expert"
              />
              <div className="session-preview__info">
                <h3 className="session-preview__title">
                  <a href="#">Mastering Cloud Architecture</a>
                </h3>
                <h4 className="session-preview__speaker-info">
                  Kelsey Hightower
                </h4>
                <p>Cloud Computing</p>
                <div className="session-preview__desc">
                  Gain insights into optimizing cloud infrastructure for speed,
                  efficiency, and scalability.
                </div>
                <a className="session-preview__video-link" href="#">
                  Watch Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="all-sessions">
        <h2 className="all-session-title">Explore More Tech Insights</h2>
        <motion.div
          className="all-sections-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {sectionsData.map((section) => (
            <motion.div
              key={section.id}
              className="all-section-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={section.imgSrc}
                alt={section.title}
                className="all-section-image"
              />
              <div className="all-section-paragraph">
                <h2 className="all-section-title">{section.title}</h2>
                <h4 className="all-section-subtitle">{section.subtitle}</h4>
                <p className="all-section-description">{section.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
