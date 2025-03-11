import React from 'react';
import { useNavigate } from 'react-router-dom';
import SmallRobo from '../../assets/roboloom/robot.jpg';  
import RobotIcon from '../../assets/roboloom/Robot3.png';   
import RegisterIcon from '../../assets/roboloom/Robot2.png';  

const BottomHero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-[660px] overflow-hidden flex items-center justify-center px-6">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={SmallRobo} 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1321] via-[#1b2a49] to-[#2e4a80] opacity-85"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col sm:flex-row w-full max-w-7xl px-6 sm:px-12">
        {/* Left Section */}
        <div className="flex flex-col gap-6 justify-start text-white text-left w-full sm:w-1/2">
          {/* Branding Badge */}
          <div className="flex max-w-[220px] items-center gap-4 rounded-lg bg-white/10 backdrop-blur-lg py-3 px-5 shadow-lg border border-blue-400/30 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#8ca3f7] to-[#5a70ff] shadow-md">
              <img src={RobotIcon} alt="Robot" className="w-8 h-8 object-contain" />
            </div>
            <span className="text-lg font-semibold bg-gradient-to-r from-[#8ca3f7] to-[#5a70ff]  font-robotoFlex bg-clip-text text-transparent">
              RoboLoom
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-[480px] text-[36px] sm:text-[42px] font-extrabold font-robotoFlex leading-tight text-white">
            #Best Robotics Program For Students
          </h1>
          
          {/* Call to Action */}
          <button className="hidden sm:flex max-w-[260px] items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-[#8ca3f7] to-[#5a70ff] py-4 px-8 text-lg font-semibold font-robotoFlex text-white shadow-lg hover:scale-105 transition" onClick={() => navigate("/register")}>
            <img src={RegisterIcon} alt="Register" className="h-6 w-6" />
            Register Now
          </button>
        </div>
      </div>

      {/* Mobile Button */}
      <div className="absolute bottom-6 w-full px-6 sm:hidden">
        <button className="flex w-full items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-[#8ca3f7] to-[#5a70ff] py-4 text-lg font-semibold text-white shadow-md hover:scale-105 transition">
          <img src={RegisterIcon} alt="Register" className="h-6 w-6" onClick={() =>navigate("/register")}/>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default BottomHero;
