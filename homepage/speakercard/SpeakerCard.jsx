import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa"; // Importing LinkedIn icon
import "./SpeakerCard.css";

const speakers = [
  {
    name: "Gwen Shapira",
    role: "Co-Founder and CPO",
    company: "Nile",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-gwen-shapira-nile.jpg",
    companyLogo: "https://www.scylladb.com/wp-content/uploads/Nile-logo.svg",
    linkedin: "https://www.linkedin.com/in/gwenshapira/",
    about: "Gwen Shapira is the Co-Founder and CPO at Nile, with extensive experience in distributed systems and database technology."
  },
  {
    name: "Dor Laor",
    role: "CEO & Co-Founder",
    company: "ScyllaDB",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-dor-laor-scylladb.jpg",
    companyLogo: "https://university.scylladb.com/wp-content/uploads/2018/12/scylladb-logo.png",
    linkedin: "https://www.linkedin.com/in/dorlaor/",
    about: "Dor Laor is the CEO & Co-Founder of ScyllaDB, specializing in high-performance database systems."
  },
  {
    name: "Gwen Shapira",
    role: "Co-Founder and CPO",
    company: "Nile",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-gwen-shapira-nile.jpg",
    companyLogo: "https://www.scylladb.com/wp-content/uploads/Nile-logo.svg",
    linkedin: "https://www.linkedin.com/in/gwenshapira/",
    about: "Gwen Shapira is a co-founder and CPO of Nile. She specializes in distributed systems, databases, and real-time data infrastructure."
  },
  {
    name: "Dor Laor",
    role: "CEO & Co-Founder",
    company: "ScyllaDB",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-dor-laor-scylladb.jpg",
    companyLogo: "https://university.scylladb.com/wp-content/uploads/2018/12/scylladb-logo.png",
    linkedin: "https://www.linkedin.com/in/dorlaor/",
    about: "Dor Laor is the CEO and Co-Founder of ScyllaDB, leading the innovation behind ultra-fast distributed databases."
  },
  {
    name: "Gwen Shapira",
    role: "Co-Founder and CPO",
    company: "Nile",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-gwen-shapira-nile.jpg",
    companyLogo: "https://www.scylladb.com/wp-content/uploads/Nile-logo.svg",
    linkedin: "https://www.linkedin.com/in/gwenshapira/",
    about: "Gwen Shapira is a co-founder and CPO of Nile. She specializes in distributed systems, databases, and real-time data infrastructure."
  },
  {
    name: "Dor Laor",
    role: "CEO & Co-Founder",
    company: "ScyllaDB",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-dor-laor-scylladb.jpg",
    companyLogo: "https://university.scylladb.com/wp-content/uploads/2018/12/scylladb-logo.png",
    linkedin: "https://www.linkedin.com/in/dorlaor/",
    about: "Dor Laor is the CEO and Co-Founder of ScyllaDB, leading the innovation behind ultra-fast distributed databases."
  },
  {
    name: "Gwen Shapira",
    role: "Co-Founder and CPO",
    company: "Nile",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-gwen-shapira-nile.jpg",
    companyLogo: "https://www.scylladb.com/wp-content/uploads/Nile-logo.svg",
    linkedin: "https://www.linkedin.com/in/gwenshapira/",
    about: "Gwen Shapira is a co-founder and CPO of Nile. She specializes in distributed systems, databases, and real-time data infrastructure."
  },
  {
    name: "Dor Laor",
    role: "CEO & Co-Founder",
    company: "ScyllaDB",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-dor-laor-scylladb.jpg",
    companyLogo: "https://university.scylladb.com/wp-content/uploads/2018/12/scylladb-logo.png",
    linkedin: "https://www.linkedin.com/in/dorlaor/",
    about: "Dor Laor is the CEO and Co-Founder of ScyllaDB, leading the innovation behind ultra-fast distributed databases."
  },
  {
    name: "Gwen Shapira",
    role: "Co-Founder and CPO",
    company: "Nile",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-gwen-shapira-nile.jpg",
    companyLogo: "https://www.scylladb.com/wp-content/uploads/Nile-logo.svg",
    linkedin: "https://www.linkedin.com/in/gwenshapira/",
    about: "Gwen Shapira is a co-founder and CPO of Nile. She specializes in distributed systems, databases, and real-time data infrastructure."
  },
  {
    name: "Dor Laor",
    role: "CEO & Co-Founder",
    company: "ScyllaDB",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-dor-laor-scylladb.jpg",
    companyLogo: "https://university.scylladb.com/wp-content/uploads/2018/12/scylladb-logo.png",
    linkedin: "https://www.linkedin.com/in/dorlaor/",
    about: "Dor Laor is the CEO and Co-Founder of ScyllaDB, leading the innovation behind ultra-fast distributed databases."
  },
  {
    name: "Gwen Shapira",
    role: "Co-Founder and CPO",
    company: "Nile",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-gwen-shapira-nile.jpg",
    companyLogo: "https://www.scylladb.com/wp-content/uploads/Nile-logo.svg",
    linkedin: "https://www.linkedin.com/in/gwenshapira/",
    about: "Gwen Shapira is the Co-Founder and CPO at Nile, with extensive experience in distributed systems and database technology."
  },
  {
    name: "Dor Laor",
    role: "CEO & Co-Founder",
    company: "ScyllaDB",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-dor-laor-scylladb.jpg",
    companyLogo: "https://university.scylladb.com/wp-content/uploads/2018/12/scylladb-logo.png",
    linkedin: "https://www.linkedin.com/in/dorlaor/",
    about: "Dor Laor is the CEO & Co-Founder of ScyllaDB, specializing in high-performance database systems."
  },
  {
    name: "Gwen Shapira",
    role: "Co-Founder and CPO",
    company: "Nile",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-gwen-shapira-nile.jpg",
    companyLogo: "https://www.scylladb.com/wp-content/uploads/Nile-logo.svg",
    linkedin: "https://www.linkedin.com/in/gwenshapira/",
    about: "Gwen Shapira is a co-founder and CPO of Nile. She specializes in distributed systems, databases, and real-time data infrastructure."
  },
  {
    name: "Dor Laor",
    role: "CEO & Co-Founder",
    company: "ScyllaDB",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-dor-laor-scylladb.jpg",
    companyLogo: "https://university.scylladb.com/wp-content/uploads/2018/12/scylladb-logo.png",
    linkedin: "https://www.linkedin.com/in/dorlaor/",
    about: "Dor Laor is the CEO and Co-Founder of ScyllaDB, leading the innovation behind ultra-fast distributed databases."
  },
  {
    name: "Gwen Shapira",
    role: "Co-Founder and CPO",
    company: "Nile",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-gwen-shapira-nile.jpg",
    companyLogo: "https://www.scylladb.com/wp-content/uploads/Nile-logo.svg",
    linkedin: "https://www.linkedin.com/in/gwenshapira/",
    about: "Gwen Shapira is a co-founder and CPO of Nile. She specializes in distributed systems, databases, and real-time data infrastructure."
  },
  {
    name: "Dor Laor",
    role: "CEO & Co-Founder",
    company: "ScyllaDB",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-dor-laor-scylladb.jpg",
    companyLogo: "https://university.scylladb.com/wp-content/uploads/2018/12/scylladb-logo.png",
    linkedin: "https://www.linkedin.com/in/dorlaor/",
    about: "Dor Laor is the CEO and Co-Founder of ScyllaDB, leading the innovation behind ultra-fast distributed databases."
  },
  {
    name: "Gwen Shapira",
    role: "Co-Founder and CPO",
    company: "Nile",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-gwen-shapira-nile.jpg",
    companyLogo: "https://www.scylladb.com/wp-content/uploads/Nile-logo.svg",
    linkedin: "https://www.linkedin.com/in/gwenshapira/",
    about: "Gwen Shapira is a co-founder and CPO of Nile. She specializes in distributed systems, databases, and real-time data infrastructure."
  },
  {
    name: "Dor Laor",
    role: "CEO & Co-Founder",
    company: "ScyllaDB",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-dor-laor-scylladb.jpg",
    companyLogo: "https://university.scylladb.com/wp-content/uploads/2018/12/scylladb-logo.png",
    linkedin: "https://www.linkedin.com/in/dorlaor/",
    about: "Dor Laor is the CEO and Co-Founder of ScyllaDB, leading the innovation behind ultra-fast distributed databases."
  },
  {
    name: "Gwen Shapira",
    role: "Co-Founder and CPO",
    company: "Nile",
    image: "https://www.scylladb.com/wp-content/uploads/1280x896-summit25-gwen-shapira-nile.jpg",
    companyLogo: "https://www.scylladb.com/wp-content/uploads/Nile-logo.svg",
    linkedin: "https://www.linkedin.com/in/gwenshapira/",
    about: "Gwen Shapira is a co-founder and CPO of Nile. She specializes in distributed systems, databases, and real-time data infrastructure."
  }
];


const SpeakerCard = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [scrollScale, setScrollScale] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scale = 1 + window.scrollY / 3000; // Smooth scaling
      setScrollScale(scale > 1.5 ? 1.5 : scale);
      setScrollY(window.scrollY * 0.5); // Parallax effect for stars
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="SpeakerCard-main">
      {/* Background Image */}
      <div className="background-container">
        <img
          src="https://www.scylladb.com/wp-content/uploads/Moebius-Group-Wide-2048x1695.png"
          alt="Background"
          className="background-image"
          style={{ transform: `scale(${scrollScale})` }}
        />
      </div>
        <img
          src="https://www.scylladb.com/wp-content/uploads/yellow-star-2.png"
          alt="Yellow Star"
          className="background-star yellow-star"
          style={{ transform: `translateY(${scrollY}px)` }}
        />
        <img
          src="https://www.scylladb.com/wp-content/uploads/blue-star-01.png"
          alt="Blue Star"
          className="background-star blue-star"
          style={{ transform: `translateY(${scrollY}px)` }}
        />
        <img
          src="https://www.scylladb.com/wp-content/uploads/yellow-star-2.png"
          alt="Yellow Star"
          className="background-star yellow-star1"
          style={{ transform: `translateY(${scrollY}px)` }}
        />
        <img
          src="https://www.scylladb.com/wp-content/uploads/blue-star-01.png"
          alt="Blue Star"
          className="background-star blue-star1"
          style={{ transform: `translateY(${scrollY}px)` }}
        />
        

      {/* Title */}
      <div className="container-title">
        <h1>Featured Speakers</h1>
      </div>

      {/* Speaker Cards */}
      <div className="speaker-container">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="speaker-card"
            onClick={() => setSelectedSpeaker(speaker)}
          >
            <img className="speaker-img" src={speaker.image} alt={speaker.name} />
            <div className="speaker-info">
              <h3>{speaker.name}</h3>
              <p className="speaker-role">{speaker.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedSpeaker && (
        <div className="modal-overlay" onClick={() => setSelectedSpeaker(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedSpeaker(null)}>
              &times;
            </span>
            <div className="modal-header">
              <img className="modal-img" src={selectedSpeaker.image} alt={selectedSpeaker.name} />
              <div className="modal-text">
                <h2>{selectedSpeaker.name}</h2>
                <p className="modal-role">{selectedSpeaker.role}</p>
              </div>
              <img className="company-logo" src={selectedSpeaker.companyLogo} alt={selectedSpeaker.company} />
            </div>
            <div className="modal-body">
              <h3>About {selectedSpeaker.name}:</h3>
              <p>{selectedSpeaker.about}</p>
              <a href={selectedSpeaker.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-btn">
                <FaLinkedin className="linkedin-icon" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeakerCard;
