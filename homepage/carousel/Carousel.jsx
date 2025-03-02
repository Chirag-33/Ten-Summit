import React, { useState } from "react";
import "./Carousel.css";

const testimonials = [
  {
    id: 1,
    name: "AK(The Sticker Guy 🦊 )",
    username: "@Aviraltech",
    image: "https://www.scylladb.com/wp-content/uploads/ESGoGo4h_x96.jpg",
    review:
      "Learning about the future of database technology has never been more fun. Big shoutout to @ScyllaDB for hosting an awesome event. Catch you all on the flip side! 😎👾",
  },
  {
    id: 2,
    name: "Lucrecia Paolini",
    username: "@lpaoliespin",
    image: "https://www.scylladb.com/wp-content/uploads/5aIATWMU_x96.jpg",
    review:
      "Such an exciting event that brings together a vibrant community of users, developers, and industry experts who are passionate about high-performance, scalable, and reliable NoSQL databases. Don't miss it!!",
  },
  {
    id: 3,
    name: "Stuart Phelps",
    username: "@StuartPhelps5",
    image: "https://www.scylladb.com/wp-content/uploads/kx96ggdF_x96.jpg",
    review:
      "Listening to Mr. Osipov's session makes me write so much notes. This is what conferences should be like. Plain, simple, valuable.",
  },
  {
    id: 4,
    name: "Tim Wyles 🇬🇧 🇺🇦",
    username: "@timwyles",
    image: "https://www.scylladb.com/wp-content/uploads/d58d52ea13a854355768ba8dc21654d8_x96.jpeg",
    review:
      "I said it before and I'll say it again - virtual keynotes are the best. This conference allows everyone to participate regardless of location or timezone - really enjoying the community vibe.",
  },
  {
    id: 5,
    name: "TechieTeee 🧑🏽‍💻 🎨 🧑🏽‍💻 NGDO",
    username: "@TechieTeee",
    image: "https://www.scylladb.com/wp-content/uploads/YIER1nGm_x96.jpg",
    review:
      "Day 1 of the summit just wrapped up. My favorite sessions today were from @Discord, @Strava, and @Numberly. The recordings are available online under Instant Access.",
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="main">
        <div className="title">What People are Saying</div>
        <div className="carousel">
      <button className="nav-btn prev" onClick={prevSlide}>‹</button>
      <div className="carousel-card">
        <p className="testimonial-text">{testimonials[currentIndex].review}</p>
        <div className="user-info">
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="profile-pic" />
          <div>
            <h3 className="username">{testimonials[currentIndex].name}</h3>
            <p className="handle">{testimonials[currentIndex].username}</p>
          </div>
        </div>
      </div>
      <button className="nav-btn next" onClick={nextSlide}>›</button>
    </div>
    </div>
  );
};

export default Carousel;
