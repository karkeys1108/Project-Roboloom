import React from "react";

const GradientBall = ({ size, position, colors, animation }) => {
  const gradientStyle = {
    background: `linear-gradient(${colors})`,
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    top: position.top,
    left: position.left,
    animation: `${animation} 4s ease-in-out infinite`,
  };

  return <div style={gradientStyle} />;
};

export default GradientBall;
