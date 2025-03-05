import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative px-8 py-4 text-lg md:text-xl font-bold text-white rounded-full bg-gradient-to-r from-[#6A7AB6] to-[#4451A6] shadow-[0_10px_30px_rgba(106,122,182,0.5)] transition-all duration-300 transform hover:scale-110 active:scale-95 overflow-hidden before:absolute before:inset-0 before:rounded-full before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
    >
      <span className="relative z-10">{text}</span>
      
      {/* Glow Border Animation */}
      <span className="absolute inset-0 w-full h-full rounded-full border-2 border-transparent animate-glow"></span>

      {/* Shimmer Effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
      
      {/* Ripple Effect on Click */}
      <span className="absolute w-0 h-0 bg-white/20 rounded-full opacity-50 animate-ripple"></span>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes glow {
            0% { border-color: rgba(255, 255, 255, 0.2); }
            50% { border-color: rgba(255, 255, 255, 0.6); }
            100% { border-color: rgba(255, 255, 255, 0.2); }
          }
          .animate-glow {
            animation: glow 2s infinite alternate;
          }

          @keyframes ripple {
            0% { width: 0; height: 0; opacity: 0.5; }
            100% { width: 250px; height: 250px; opacity: 0; }
          }
          .animate-ripple:active {
            animation: ripple 0.6s linear;
          }
        `}
      </style>
    </button>
  );
};

export default Button;
