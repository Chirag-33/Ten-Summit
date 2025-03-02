import React from "react";
import SpeakerCard from "../../components/homepage/speakercard/speakercard";
import "./Homepage.css";
import Schedule from "../../components/homepage/schedule/Schedule";
import Agenda from "../../components/homepage/agenda/Agenda";
import Carousel from "../../components/homepage/carousel/Carousel";
import WhyAttend from "../../components/homepage/whyattend/WhyAttend";
import Herosection from "../../components/homepage/herosection/Herosection";

const Homepage = () => {
  return (
  <div className="main-homepage">
    <Herosection />
    <SpeakerCard />
    <Schedule />
    <Agenda />
    <Carousel />
    <WhyAttend />
  </div>
  );
};

export default Homepage;
