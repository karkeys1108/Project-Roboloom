import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Package, Lightbulb, Target } from "lucide-react";
import AboutImage from "../../assets/roboloom/about.webp";
import BottomLeftImage from "../../assets/roboloom/bottom_left.webp";
import BottomRightImage from "../../assets/roboloom/bottom_right.png";
import GlobalImage from "../../assets/roboloom/global.webp";
import Arrow from "../../assets/roboloom/Arrow_Down.svg";


const About = () => {
  const { scrollYProgress } = useScroll();
  const bottomLeftY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const topRightY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  // State to track if About section is reached
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, 1 - rect.top / (window.innerHeight * 0.5)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative -mt-16 flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-10 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Smooth Transition Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: scrollProgress
            ? `linear-gradient(to bottom right, rgba(10,10,42,${scrollProgress}), rgba(20,20,65,${scrollProgress}), rgba(26,26,100,${scrollProgress}))`
            : '#ADBBDA',
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      ></motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-indigo-400 opacity-10 blur-3xl rounded-full top-10 left-10"></div>
        <div className="absolute w-60 h-60 bg-blue-500 opacity-10 blur-3xl rounded-full bottom-20 right-20"></div>
        <div className="absolute w-40 h-40 bg-purple-500 opacity-20 blur-2xl rounded-full top-1/3 right-1/3"></div>
      </div>
      <img
       src={GlobalImage}
      alt="Global Background"
      className="absolute bottom-0 transform -translate-x-1/2 w-[90%] max-w-4xl opacity-30"
    />
      {/* Left Section - Image */}
      <motion.div
        className="md:w-1/2 p-6 flex justify-center relative z-10"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={AboutImage}
          alt="Robotics Teaching"
          className="rounded-lg transform hover:scale-105 transition-transform duration-700 shadow-2xl"
        />

        {/* Bottom Left Image - Moves Up on Scroll */}
        <motion.img
          src={BottomLeftImage}
          alt="Additional Image"
          className="absolute bottom-[-20px] right-[10px] w-28 sm:w-45 md:w-55 rounded-lg"
          style={{ y: bottomLeftY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        />

        {/* Top Right Image - Moves Down on Scroll */}
        <motion.img
          src={BottomRightImage}
          alt="Additional Image"
          className="absolute top-[-25px] right-[15px] w-20 sm:w-40 md:w-20 rounded-lg z-10"
          style={{ y: topRightY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        />
      </motion.div>

      {/* Right Section - Content */}
      <motion.div
        className="md:w-1/2 p-5 z-10"
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <div className="relative max-w-3xl mx-auto p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl">
          <h2 className="mb-4 font-quicksand text-3xl font-semibold sm:text-4xl text-white">
            About <span className="text-indigo-400">Roboloom</span>
          </h2>

          <div className="space-y-4 text-white">
            <div className="flex items-center text-lg font-light">
              <BookOpen className="text-indigo-400 w-8 h-8 mr-4" />
              <p>Hands-on robotics courses designed to make learning engaging and interactive.</p>
            </div>
            <br />

            <div className="flex items-center text-lg font-light">
              <Package className="text-indigo-400 w-8 h-8 mr-4" />
              <p>Custom kits and interactive sessions to boost creativity and problem-solving.</p>
            </div>
            <br />

            <div className="flex items-center text-lg font-light">
              <Lightbulb className="text-indigo-400 w-8 h-8 mr-4" />
              <p>Bridging the gap between education and technology to inspire young innovators.</p>
            </div>
            <br />

            <div className="flex items-center text-lg font-light">
              <Target className="text-indigo-400 w-8 h-8 mr-4" />
              <p>Empowering future engineers with skills to turn ideas into real-world solutions.</p>
            </div>
          </div>
        </div>
        
        <div className="relative flex justify-end">
          <img
            src={Arrow}
            alt="Arrow Icon"
            className="w-16 h-16 md:w-20 md:h-20 opacity-80 absolute -bottom-10 right-0"
          />
        </div>

      </motion.div>
    </section>
  );
};

export default About;
