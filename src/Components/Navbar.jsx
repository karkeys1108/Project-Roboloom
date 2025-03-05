import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Roboloom_Logo.png"; // Ensure the correct path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative inset-x-0 top-0 z-50 mx-auto w-full max-w-screen-md border border-gray-100 bg-gradient-to-r from-bg-gradientStart to-bg-gradientEnd h-[80px] shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">

      <div className="px-6 h-full flex items-center justify-between bg-custon-gradient">
        {/* Logo with Silver Hover Effect */}
        <div className="flex shrink-0 h-full items-center overflow-hidden">
          <a aria-current="page" className="flex items-center" href="/">
            <img 
              className="h-[140px] w-auto object-contain transition-all duration-300 hover:brightness-125 hover:shadow-[0px_0px_15px_rgba(192,192,192,0.8)]"
              src={logo} 
              alt="Roboloom Logo" 
            />
            <p className="sr-only">Roboloom</p>
          </a>
        </div>

        {/* Desktop Nav Links with Smooth Underline & Bold Hover */}
        <div className="hidden md:flex md:items-center md:justify-center md:gap-6">
  {["Home", "About", "Why this ?", "Programs", "Vision"].map((item, index) => {
    const sectionId = item
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/gi, '') // Remove special characters
      .replace(/\s+/g, "-"); // Convert spaces to hyphens

    return (
      <a
        key={index}
        className="relative inline-block px-3 py-2 text-md font-robotoFlex text-font-color transition-all duration-300 
        after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-font-color after:transition-all 
        after:duration-300 hover:after:w-full hover:font-semibold cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      >
        {item}
      </a>
    );
  })}
</div>



        {/* Buttons and Mobile Menu */}
        <div className="flex items-center justify-end gap-4">
  {/* Join Us Button (Hidden on Mobile) */}
  <button
    className="relative hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6A7AB6] to-[#4451A6] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(106,122,182,0.5)] transition-all duration-300 transform hover:scale-110 active:scale-95 overflow-hidden before:absolute before:inset-0 before:rounded-full before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
    onClick={() => window.location.href = '/login'} // Redirect to login page
  >
    <span className="relative z-10">Join Us</span>
    
    {/* Glow Border Animation */}
    <span className="absolute inset-0 w-full h-full rounded-full border-2 border-transparent animate-glow"></span>

    {/* Shimmer Effect */}
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
    
    {/* Ripple Effect on Click */}
    <span className="absolute w-0 h-0 bg-white/20 rounded-full opacity-50 animate-ripple"></span>
  </button>

  {/* Mobile Menu Toggle */}
  <button
    className="inline-flex items-center justify-center rounded-md p-2 text-font-color hover:bg-font-color-b focus:outline-none md:hidden"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  </button>
</div>

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

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-white p-4 shadow-lg rounded-lg">
        {["Home", "About", "Why this?", "Programs", "Vision"].map((item, index) => (
          <a 
            key={index} 
            className="w-full text-center rounded-lg px-3 py-2 text-md font-robotoFlex text-gray-800 transition-all duration-200 hover:bg-gray-200" 
            href={item === "About" ? "#about" : "#"}  // ✅ Link to About section
          >
            {item}
          </a>
        ))}
      </div>
      
      )}
    </header>
  );
};

export default Navbar;
