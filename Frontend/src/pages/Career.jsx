import "./career.css";
import logo from "../assets/images/success-logo-jelly-animal.png";
import { useEffect, useState } from "react";
import blog from "../assets/images/blog.svg";
import newsroom from "../assets/images/newsroom.svg";
import phone from "../assets/images/phone.svg";
import image1 from "../assets/images/image1.avif";
import image2 from "../assets/images/image2.avif";
import image3 from "../assets/images/image3.avif";
import image4 from "../assets/images/image4.avif";
import image5 from "../assets/images/image5.avif";
import image6 from "../assets/images/image6.avif";

const Career = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const images = [image1, image2, image3, image4, image5, image6];

  // Check for screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="md:p-24 bg-gradient-to-b from-blue-900 via-indigo-950 h-fit to-sky-400 text-white">
        <div className="p-4" id="career-text">
          <h2 className="text-center text-5xl md:text-6xl font-light md:text-center p-6 mb-4">
            Careers
          </h2>
          <p className="md:text-2xl text-center md:text-center md:mb-8 md:mx-auto w-fit mb-8 p-2 text-2xl md:w-[46]">
            Join the world-wide team that is building the next generation of
            efficient, scalable NoSQL systems.
          </p>
          <div className="md:mx-auto text-center md:mt-8">
            {" "}
            <button className="bg-blue-950 text-white mb-5 px-8 py-2 text-lg md:px-10 md:text-lg md:py-2">
              Browse Open Positions
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-indigo-900 via-indigo-950 to-sky-500 p-4">
        {/* Mobile Carousel - Updated to match desktop scale effect */}
        {isMobile && (
          <div className="relative w-full overflow-hidden p-4">
            <div
              className="flex transition-transform duration-700 ease-linear gap-0"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${images.length * 17}%`,
              }}
            >
              {images.map((img, index) => {
                const isActive = index === currentIndex;

                return (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 transition-all duration-700 ease-in-out px-4"
                    style={{
                      transform: isActive ? "scale(1.2)" : "scale(0.7)",
                      transition: "all 0.7s ease-in-out",
                      opacity: isActive ? 1 : 0.7,
                    }}
                  >
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Desktop Carousel - Modified to take less vertical space */}
        {!isMobile && (
          <div className="relative w-full overflow-hidden p-4 mb-8">
            <div
              className="flex transition-transform duration-700 ease-linear gap-0 md:-ml-19"
              style={{
                transform: `translateX(-${
                  (currentIndex % images.length) * 33.33
                }%)`,
                width: `${images.length * 18}%`,
              }}
            >
              {images.map((img, index) => {
                const middleIndex = 1; // For 3 visible images
                const isActive =
                  index === (currentIndex + middleIndex) % images.length;

                return (
                  <div
                    key={index}
                    className="md:w-1/3 flex-shrink-0 transition-all duration-700 ease-in-out"
                    style={{
                      transform: isActive ? "scale(1.2)" : "scale(0.7)",
                      transition: "all 0.7s ease-in-out",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Creating Success section - Adjusted margins to reduce space */}
        <div
          id="Creating-success"
          className="md:flex md:justify-between w-fit h-fit md:w-[46rem] lg:w-[62rem] md:h-68 md:mx-auto mt-4 items-center rounded-md p-8 bg-indigo-950 text-white group border border-gray-400"
        >
          {/* Content */}
          <div className="md:flex md:flex-row flex flex-col w-fit justify-center items-center md:w-full md:h-full md:justify-between md:p-8">
            {/* Centered Image */}
            <div className="w-full flex justify-center items-center p-4 md:p-3">
              <img
                src={logo}
                width={120}
                height={120}
                alt="Logo"
                className=""
              />
            </div>

            {/* Divider Line */}
            <div className="md:border-r border-b max-w-full h-full border-b-gray-300 md:border-gray-300"></div>

            {/* Text Content */}
            <div className="p-4 ">
              <p className="text-4xl mb-3">Creating Success</p>
              <p className="text-xl">
                Applying low-level knowledge to our Big Data technology, we the
                best database in the world for data-intensive applications. We
                are committed to an open culture, building together, and our
                users&apos; phenomenal success.
              </p>
            </div>
          </div>
        </div>

        {/* Sea Monster Life heading - Reduced margins */}
        <h1 className="text-center md:text-4xl md:mb-6 md:mt-12 mb-8 mt-10 text-3xl text-white">
          Sea Monster Life
        </h1>

        {/* Sea Monster Life cards - Improved spacing */}
        <div
          className="flex flex-col justify-center items-center gap-6 md:flex md:flex-row md:flex-wrap md:justify-center md:items-center md:gap-4 "
          id="sea-monster-cards
        "
        >
          {[
            {
              src: "https://img.freepik.com/free-vector/telework-concept-illustration_114360-5594.jpg?ga=GA1.1.1301893933.1740478723&semt=ais_hybrid",
              title: "Flexible Workplace",
              description:
                "We support a healthy and productive work environment whether at home or in the office.",
            },
            {
              src: "https://img.freepik.com/free-vector/people-celebrating-together-concept_23-2148429933.jpg?ga=GA1.1.1301893933.1740478723&semt=ais_hybrid",
              title: "Win Together",
              description:
                "We're all eligible for equity shares, so when we think big and work hard together we all win.",
            },
            {
              src: "https://img.freepik.com/free-vector/organic-flat-feedback-concept-illustrated_23-2148951369.jpg?ga=GA1.1.1301893933.1740478723&semt=ais_hybrid",
              title: "Work With the Best",
              description:
                "Be inspired every day by working with the best minds in the business.",
            },
            {
              src: "https://img.freepik.com/free-vector/people-celebrating-together_23-2148392621.jpg?ga=GA1.1.1301893933.1740478723&semt=ais_hybrid",
              title: "Play Hard",
              description:
                "Happy hours, trivia games, and ice cream socials keep us connected across the globe.",
            },
          ].map((item, index) => (
            <div key={index} className="p-[2px]">
              <div className="flex flex-col justify-between items-center w-[17rem] h-[29rem] gradient-border">
                <div>
                  <img src={item.src} alt={item.title} />
                </div>
                <div className="bg-indigo-950 p-4 text-white items-center font-serif flex-grow flex flex-col justify-between min-h-[6rem]">
                  <h5>{item.title}</h5>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ready to Join section - Better spacing */}
        <div className="mx-auto text-center w-fit md:w-[45rem] mt-8 md:mt-10 text-white">
          <h2 className="text-4xl md:text-5xl">
            Ready to Join the Sea Monsters?
          </h2>
          <p className="text-xl md:text-lg mt-4">
            Distributed across more than 27 countries, ScyllaDB Sea Monsters
            share a love of food, waves, snow, ping pong, and code.
          </p>
          <div className="mx-auto text-center mt-6">
            {" "}
            <button className="bg-blue-950 text-white px-10 text-lg py-2 mb-12">
              Browse Open Positions <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom cards section - More compact layout */}
      <div
        className="md:flex md:flex-row md:justify-center md:items-center flex flex-col justify-center items-center gap-8 text-center border text-lg font-stretch-semi-condensed p-4"
        id="bottom-cards"
      >
        <div className="border border-gradient p-6 w md:w-74 gradient-border">
          <div>
            <div className="flex justify-center items-center">
              <img src={newsroom} width={50} height={50} alt="" />
              <h3 className="">Newsroom</h3>
            </div>
            <p className="mb-3 mt-3">
              Press coverage and announcements from ScyllaDB
            </p>
            <p>See What&apos;s new →</p>
          </div>
        </div>

        <div className="border p-6 md:w-74 gradient-border">
          <div>
            <div className="flex justify-center items-center">
              <img src={blog} width={50} height={50} alt="" />
              <h3>Blog</h3>
            </div>
            <p className="mb-3 mt-3">
              Technical deep dives and tips and tricks from our experts
            </p>
            <p>Explore Now →</p>
          </div>
        </div>

        <div className="border p-6 md:w-74 rounded-t-md gradient-border">
          <div>
            <div className="flex justify-center items-center">
              <img src={phone} width={50} height={50} alt="" className="mr-2" />
              <h3>Contact Us</h3>
            </div>
            <p className="mb-3 mt-3">
              Drop us a line to get in touch or start a live chat
            </p>
            <p>Let&apos;s Talk →</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
