import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/roboloom/Roboloom_Logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false); // Close menu after clicking
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="relative inset-x-0 top-0 z-50 mx-auto w-full max-w-screen-md border border-gray-100 bg-gradient-to-r from-bg-gradientStart to-bg-gradientEnd h-[80px] shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      
      {/* Navbar Main Content */}
      <div className="px-6 h-full flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {["Home", "About", "Why Us", "Programs"].map((item, index) => {
            const sectionId = item.toLowerCase().replace(/[^a-z0-9\s-]/gi, '').replace(/\s+/g, "-");
            return (
              <a
                key={index}
                className="relative px-3 py-2 text-md font-robotoFlex text-font-color transition-all duration-300 
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-font-color 
                after:transition-all after:duration-300 hover:after:w-full hover:font-semibold cursor-pointer"
                onClick={(e) => handleNavClick(e, sectionId)}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle & Join Us Button */}
        <div className="flex items-center justify-end gap-4">
          {/* Join Us Button */}
          <button
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6A7AB6] to-[#4451A6] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(106,122,182,0.5)] transition-all duration-300 transform hover:scale-110 active:scale-95"
            onClick={() => navigate("/register")}
          >
            <span className="relative z-10">Join Us</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-font-color hover:bg-font-color-b focus:outline-none md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-white p-4 shadow-lg rounded-lg">
          {["Home", "About", "Why Us", "Programs"].map((item, index) => {
            const sectionId = item.toLowerCase().replace(/[^a-z0-9\s-]/gi, '').replace(/\s+/g, "-");
            return (
              <a 
                key={index} 
                className="w-full text-center rounded-lg px-3 py-2 text-md font-robotoFlex text-gray-800 transition-all duration-200 hover:bg-gray-200"
                onClick={(e) => handleNavClick(e, sectionId)}
              >
                {item}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
