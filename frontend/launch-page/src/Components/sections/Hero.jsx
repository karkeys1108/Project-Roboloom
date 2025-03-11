import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import MenuSvg from "../../assets/roboloom/MenuSvg";
import robotAnimation from "../../assets/roboloom/robot.json";
import gridBg from "../../assets/roboloom/grid.png";
import GradientBall from "../elements/GradientBall";
import SettingImg from "../../assets/roboloom/setting.webp";
import Brain from "../../assets/roboloom/brain.webp";
import Learning from "../../assets/roboloom/learning.webp";
import Bulb from "../../assets/roboloom/bulb.webp";
import Button from "../elements/Button"; 
import Arrow from "../../assets/roboloom/Arrow.svg";

const Hero = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const navigate = useNavigate();

  const themeColors = [
    "#7586E8, #ADB8DA", 
    "#EDE8F5, #8697C4",
    "#B3C5E4, #A0B0C7", 
    "#D4E1F4, #7586E8", 
    "#8697C4, #EDE8F5", 
    "#ADB8DA, #B3C5E4",
    "#A0B0C7, #D4E1F4"  
  ];

  const fixedPositions = [
    { top: "75%", left: "30%" },   
    { top: "76%", left: "35%" },  
    { top: "30%", left: "40%" },  
    { top: "10%", left: "5%" },  
    { top: "15%", left: "85%" },  
    { top: "80%", left: "90%" }, 
  ];

  const fixedSizes = [
    "20px", 
    "30px", 
    "40px", 
    "25px", 
    "35px", 
    "45px", 
    "30px"  
  ];

  const gradientBalls = fixedPositions.map((position, index) => ({
    size: fixedSizes[index % fixedSizes.length], 
    position,
    colors: themeColors[index],
  }));


  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const beatAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section
    id="home"
    className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 text-[#1A1A32] overflow-hidden pt-20 sm:pt-20 md:pt-14"
  
      style={{
        backgroundImage: `url(${gridBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        opacity: 0.9,
        top: '-60px',
        position: "relative",
      }}
    >
      {/* Mobile Navigation Menu */}
      <button
        className="absolute top-6 left-6 md:hidden z-20"
        onClick={() => setOpenNavigation(!openNavigation)}
      >
        <MenuSvg openNavigation={openNavigation} />
      </button>

      {/* Left Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideUpVariants}
        className="max-w-2xl md:w-1/2 text-center md:text-left z-10"
      >
        <h1 className="text-4xl md:text-5xl font-quicksand font-semibold leading-tight">
          Empowering Young Minds Through Robotics
        </h1>
        <p className="mt-4 md:mt-65 font-robotoFlex text-gray-800 text-sm md:text-base">
          At <span className="font-quicksand font-semibold text-indigo-500">RoboLoom</span>, we inspire creativity in students through robotics. Our hands-on courses spark curiosity, foster innovation, and equip young learners with essential tech skills.
        </p>

        {/* Button Component */}
        <div className="mt-6 md:mt-8">
          <Button text="Get Started" onClick={() => navigate("/register")} />
        </div>
        <div className="flex justify-start md:justify-start items-end ml[-10px] md:ml-[-10px] ">
        <img src={Arrow} alt="Arrow Icon" className="w-20 h-20 md:w-28 md:h-28 opacity-80" />
        </div>

      </motion.div>

      {/* Right Side - Robot with Floating Images */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideUpVariants}
        className="relative w-full md:w-1/2 flex justify-center items-center z-10 mt-6 md:mt-0"
      >
        {/* Floating Small Images with Beating Effect */}
        <motion.img src={Brain} alt="Brain"
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          whileHover={beatAnimation}
          className="absolute top-[-5%] left-[5%] w-[70px] md:w-[85px] opacity-90 z-20 rotate-[-10deg]"
        />
        
        <motion.img src={SettingImg} alt="Setting"
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          whileHover={beatAnimation}
          className="absolute bottom-[10%] left-[10%] w-[50px] md:w-[80px] opacity-90 z-20 rotate-[0deg]"
        />
        
        <motion.img src={Bulb} alt="Bulb"
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          whileHover={beatAnimation}
          className="absolute top-[-5%] right-[15%] w-[50px] md:w-[70px] opacity-90 z-20 rotate-[30deg]"
        />
        
        <motion.img src={Learning} alt="Learning"
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          whileHover={beatAnimation}
          className="absolute bottom-[15%] right-[5%] w-[50px] md:w-[85px] opacity-90 z-20 rotate-[15deg]"
        />

        {/* Robot Animation */}
        <Lottie animationData={robotAnimation} loop autoplay className="w-[280px] md:w-[400px] z-10" />
      </motion.div>
       {/* Fixed Gradient Balls with Theme Colors */}
       {gradientBalls.map((ball, index) => (
        <GradientBall
          key={index}
          size={ball.size}
          position={ball.position}
          colors={ball.colors}
          animation="animate-floating"
        />
      ))}
    </section>
  );
};

export default Hero;
