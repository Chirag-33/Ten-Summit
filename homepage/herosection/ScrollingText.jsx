import React, { useEffect, useRef } from "react";
import "./Herosection.css";

const ScrollingText = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      // Duplicate the content for seamless scrolling
      marquee.innerHTML += marquee.innerHTML;
    }
  }, []);

  return (
    <div className="marquee-container">
      <div className="marquee-content" ref={marqueeRef}>
        <span>EXTREME SCALE</span> <span className="dot">•</span>
        <span>HANDS-ON LABS</span> <span className="dot">•</span>
        <span>ENGINEERING DEEP DIVES</span> <span className="dot">•</span>
        <span>MONSTER SCALE STORIES</span> <span className="dot">•</span>
        <span>AI/ML</span> <span className="dot">•</span>
        <span>GLOBAL TECHNOLOGY</span> <span className="dot">•</span>
      </div>
    </div>
  );
};

export default ScrollingText;