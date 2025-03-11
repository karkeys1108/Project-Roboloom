import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "./assets/loading.json";
import Navbar from "./Components/nav-component/Navbar";
import Hero from "./Components/sections/Hero";
import About from "./Components/sections/About";
import WhyThis from "./Components/sections/Whythis";
import Programs from "./Components/sections/OurProgram";
import Footer from "./Components/sections/Footer";
import Works from "./Components/sections/Works";
import BottomHero from "./Components/sections/BottomHero";
import Register from "./Components/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 2500);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Layout component for pages with Navbar and Footer
  const DefaultLayout = ({ children }) => (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );

  // Layout component for the registration page (without Navbar and Footer)
  const RegistrationLayout = ({ children }) => <>{children}</>;

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#ADB8DA] via-[#EDE8F5] to-[#8697C4] text-black">
      {loading ? (
        <div
          className={`flex justify-center items-center h-screen transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <DefaultLayout>
                  <Hero />
                  <About />
                  <WhyThis />
                  <Programs />
                  <Works />
                  <BottomHero />
                </DefaultLayout>
              }
            />
            <Route
              path="/register"
              element={
                <RegistrationLayout>
                  <Register />
                </RegistrationLayout>
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;