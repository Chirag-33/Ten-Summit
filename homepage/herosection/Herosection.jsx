import React, { useEffect, useState, useRef } from "react";
import "./HeroSection.css";
import ScrollingText from "./ScrollingText";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000; // Animation duration in ms
          const stepTime = Math.max(20, duration / target); // Adaptive step time
          const stepSize = Math.ceil(target / (duration / stepTime)); // Adjust step size dynamically
          
          let interval = setInterval(() => {
            start += stepSize;
            if (start >= target) {
              clearInterval(interval);
              start = target;
            }
            setCount(start);
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const formatNumber = (num) => {
    if (target === 2) return num; // Keep "2 Days" without +
    return num >= 1000 ? `${Math.floor(num / 1000)}K+` : `${num}+`;
  };

  return (
    <div ref={ref} className="counter-number-wrapper">
      <span className="counter-number">{formatNumber(count)}</span>
    </div>
  );
};

const Herosection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-fade-in2");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <section className="summit-hero-section animated fadeIn">
        <div className="hero-container">
          <img
            src="https://www.scylladb.com/wp-content/uploads/monster-scale-horizontal-white-logo-1.svg"
            alt="Monster Scale Summit logo"
            className="hero-logo animate-fade-in"
          />
          <h2 className="animate-fade-in ">Extreme Scale Engineering</h2>
          <p className="animate-fade-in ">ONLINE | MARCH 11-12, 2025</p>
          <div className="hero-buttons animate-fade-in">
            <a
              className="register-btn"
              href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjY1NzYxIiwidG9nZ2xlIjpmYWxzZX0%3D"
            >
              REGISTER FREE
            </a>
          </div>
        </div>
      </section>

      <section className="elementor-section elementor-inner-section scylla-summit-img-boxes">
        <div className="elementor-container">
          <div className="elementor-column animate-fade-in2 delay-1">
            <h3 className="elementor-image-box-title">Tech talks</h3>
            <p className="elementor-image-box-description">
              Discover how your peers are approaching real-time engineering challenges.
            </p>
          </div>
          <div className="elementor-column animate-fade-in2 delay-2">
            <h3 className="elementor-image-box-title">Community</h3>
            <p className="elementor-image-box-description">
              Connect with other engineers designing, implementing, and optimizing systems.
            </p>
          </div>
          <div className="elementor-column animate-fade-in2 delay-3">
            <h3 className="elementor-image-box-title">Hands-on</h3>
            <p className="elementor-image-box-description">
              Roll up your sleeves and master best practices.
            </p>
          </div>
        </div>
      </section>
      
      <ScrollingText />
      
      <section className="counter-section">
        <div className="counter-container">
          <div className="counter-column">
            <div className="counter-item">
              <Counter target={2} />
              <div className="counter-title">Days</div>
            </div>
          </div>
          <div className="counter-column">
            <div className="counter-item">
              <Counter target={30} />
              <div className="counter-title">Hours of Content</div>
            </div>
          </div>
          <div className="counter-column">
            <div className="counter-item">
              <Counter target={40} />
              <div className="counter-title">Speakers</div>
            </div>
          </div>
          <div className="counter-column">
            <div className="counter-item">
              <Counter target={15000} />
              <div className="counter-title">Attendees</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;