import React from "react";
import "./Schedule.css"; // Add styling separately

const Schedule = () => {
  return (
    <section className="schedule-section">
      <div className="container">
        <div className="content">
          <h2 className="schedule-title">Schedule</h2>
          <p className="description">
          TEN Summit features 30+ engaging sessions that delve into large-scale challenges, cutting-edge industry trends, and high-performance engineering solutions. Experts will provide in-depth insights into architecture, real-world experience reports, infrastructure advancements, and hands-on workshops to help businesses scale effectively.
          </p>
          <div className="button-wrapper">
            <a className="button" href="">See Full Agenda →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
