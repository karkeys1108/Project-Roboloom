import React, { useState, useEffect } from "react";
import RoboticsImg from "../../assets/e-learning/robotics.jpg";
import ArduinoImg from "../../assets/e-learning/aurdino.webp";
import AiImg from "../../assets/e-learning/ai-ml.jpg";
import AdvanceImg from "../../assets/e-learning/advanced.jpg";
import ProgramBg from "../../assets/roboloom/Program-bg.png"; 

const CardJson = [
  {
    image: RoboticsImg,
    title: "Intro to Robotics",
    desc: "Basic concepts using interactive kits to build foundational robotics skills. Hands-on coding and hardware integration. Engaging introduction to artificial intelligence.",
  },
  {
    image: ArduinoImg,
    title: "Arduino & Micro:bit Training",
    desc: "Learn to code and build projects with Arduino and Micro:bit. Explore sensors, actuators, and IoT integration. Develop problem-solving skills through real-world applications.",
  },
  {
    image: AiImg,
    title: "AI & Machine Learning for Kids",
    desc: "Understand the basics of AI and machine learning. Create fun projects like image recognition and chatbots. Tailored for young learners to spark curiosity and creativity.",
  },
  {
    image: AdvanceImg,
    title: "Advanced Robotics",
    desc: "Dive into advanced robotics concepts like path planning and automation. Work on real-world robotics challenges. Build and program complex robots for competitions.",
  },
];

const SkilledLearning = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CardJson.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CardJson.length) % CardJson.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="programs">
    <div
      className="relative w-full bg-gradient-to-b from-[#9FADD8] via-[#ADB8DA] to-[#B6C1E3] py-12 md:py-16 "
      style={{
        backgroundImage: `url(${ProgramBg})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
      }}
    >
     
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 text-center z-10">
        <h2 className="text-3xl sm:text-4xl font-quicksand font-bold text-grey-900">
          Our <span className="text-indigo-600">Programs</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto font-robotoFlex text-grey-900 font-light text-xl mb-8 md:mb-12">
          Explore our structured courses designed to provide hands-on experience in robotics and AI.
        </p>
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-lg rounded-full p-3 shadow-lg hover:bg-opacity-50 transition-all duration-300 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Card Container */}
          <div className="relative w-full md:w-[80%] bg-white bg-opacity-30 backdrop-blur-lg shadow-2xl p-6 md:p-10 rounded-3xl flex flex-col md:flex-row items-center border border-white/30">
            {/* Image */}
            <img
              src={CardJson[currentIndex].image}
              alt={CardJson[currentIndex].title}
              className="w-64 h-64 md:w-96 md:h-96 rounded-xl shadow-lg mb-6 md:mb-0 md:mr-8 object-cover"
            />
            {/* Content */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-quicksand text-indigo-600 font-semibold">
                {CardJson[currentIndex].title}
              </h2>
              <div className="mt-4 max-w-2xl mx-auto font-robotoFlex text-gray-700 font-medium">
                {CardJson[currentIndex].desc.split(". ").map((point, index) => (
                  <div key={index} className="flex items-start space-x-2 mb-2">
                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-6 md:w-6 text-indigo-500 flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {/* Point */}
                    <p className="text-sm md:text-base">{point.trim()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-lg rounded-full p-3 shadow-lg hover:bg-opacity-50 transition-all duration-300 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots - Glassmorphism Effect (Hidden on Mobile) */}
        <div className="hidden md:flex mt-6 justify-center space-x-2">
          {CardJson.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border border-gray-700 backdrop-blur-lg bg-white bg-opacity-30 ${
                index === currentIndex ? "bg-indigo-500 scale-110" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
 </section>
  );
};

export default SkilledLearning;