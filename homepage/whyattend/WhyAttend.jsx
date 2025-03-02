import React from "react";
import "./WhyAttend.css";

const WhyAttend = () => {
  return (
    <div className="why-attend-main">
      <section className="why-attend">
        <div className="why-attend-content">
          <h2>Why Attend Ten Summit</h2>
          <p>
            The Ten Summit community is dedicated to exploring innovative strategies  
            for achieving high-performance scalability. Whether you're designing,  
            building, or optimizing systems that push boundaries, we welcome you to  
            share your most remarkable insights, breakthroughs, and lessons learned.
          </p>

          <h3>Core topics include:</h3>
          <ul className="why-attend-list">
            <li>Scalable database architectures</li>
            <li>Real-time data processing and streaming</li>
            <li>Advanced system design methodologies</li>
            <li>Site reliability engineering (SRE) best practices</li>
            <li>Optimizing for latency, concurrency, and throughput</li>
            <li>Building infrastructure for extreme-scale demands</li>
          </ul>
        </div>
      </section>
      <div className="copy-right">2025 © Ten Summit | Code of Conduct | Questions or Comments</div>
    </div>
  );
};

export default WhyAttend;
