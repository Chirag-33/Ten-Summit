import React from "react";
import "./Agenda.css";

const eventData = [
  {
    day: 1,
    date: "Tuesday, March 11",  
    schedule: [
      { time: "7:30am PT", event: "Lounge Opens" },
      { time: "8:00am-10:00am PT", event: "Keynote Sessions" },
      { time: "10:00am-12:15pm PT", event: "Scaling Success Stories + Engineering Breakout Sessions" },
      { time: "12:15pm-1:00pm PT", event: "Interactive Hands-On Labs" },
    ],
  },
  {
    day: 2,
    date: "Wednesday, March 12",
    schedule: [
      { time: "8:00am PT", event: "Breakfast & Networking" },
      { time: "9:00am-11:00am PT", event: "Advanced Technical Deep Dives" },
      { time: "11:15am-1:00pm PT", event: "Expert Workshops & Panel Discussions" },
    ],
  },
];

const AgendaDay = ({ day, date, schedule }) => {
  return (
    <div className="agenda-day-block">
      <div className="agenda-header">
        <div className="agenda-day-number">Day </div>
        <div className="day-no">{day}</div>
      </div>
      
      <ul className="agenda-list">
        <h2>{date}</h2>
        {schedule.map((item, index) => (
          <li key={index} className="agenda-item">
            <strong>{item.time}</strong> <span>{item.event}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Agenda = () => {
  return (
    <div className="agenda-container">
      {eventData.map((event, index) => (
        <AgendaDay key={index} {...event} />
      ))}
    </div>
  );
};

export default Agenda;
