import React from "react";
import Navbar from "./Components/Navbar"; // Ensure path is correct
import Hero from "./Components/Hero"; // Ensure path is correct
import About from "./Components/About"; 
import WhyThis from "./Components/Whythis";
import Programs from "./Components/OurProgram";
import Footer  from "./Components/Footer";
import "./App.css"; // Ensure you have styles for your app

const App = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#ADB8DA] via-[#EDE8F5] to-[#8697C4] text-black">
      {/* Navbar Component */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About /> {/* ✅ About Section Added */}

       <WhyThis/> 
       <Programs /> {/* ✅ Programs Section Added */}
      <Footer /> {/* ✅ Footer Section Added */}

      
      {/* Spacer */}
      <div className="h-[100px]"></div> {/* Pushes content down */}
    </div>
  );
};

export default App;
