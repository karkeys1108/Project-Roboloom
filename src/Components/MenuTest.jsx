import React from "react";
import MenuSvg from "../assets/Svg/Arrow";

const MenuTest = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      {/* Directly Displaying the SVG */}
      <MenuSvg openNavigation={false} />
    </div>
  );
};

export default MenuTest;
