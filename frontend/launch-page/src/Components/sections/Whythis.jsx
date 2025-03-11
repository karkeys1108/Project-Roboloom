import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Box, LayoutGrid, Sparkles } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "../../assets/roboloom/WhyRobot.json";
import plusBg from "../../assets/roboloom/plusbg.svg";

const features = [
  {
    icon: <GraduationCap className="text-[#698be0] w-8 h-8" />,
    title: "Hands-on Learning",
    description: "Our courses emphasize real-world applications and practical experience.",
  },
  {
    icon: <Users className="text-[#698be0] w-8 h-8" />,
    title: "Expert Trainers",
    description: "Skilled professionals with expertise in robotics and technology.",
  },
  {
    icon: <Box className="text-[#698be0] w-8 h-8" />,
    title: "Customizable Kits",
    description: "High-quality, white-labeled kits designed for ease of learning.",
  },
  {
    icon: <LayoutGrid className="text-[#698be0] w-8 h-8" />,
    title: "Engaging Curriculum",
    description: "A well-structured program tailored for school students.",
  },
  {
    icon: <Sparkles className="text-[#698be0] w-8 h-8" />,
    title: "Fostering Creativity",
    description: "Encouraging innovation and out-of-the-box thinking.",
  },
];

const WhyThis = () => {
  return (
    <section id="why-us">
    <motion.div
      initial={{ opacity: 0, y: 20 }} // ✅ Fade-in + slight slide up
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }} // ✅ Smooth animation
      className="relative flex flex-col gap-5 sm:px-25 px-20 py-16 max-w-screen-xl w-full mx-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${plusBg})` }} // ✅ Background applied
    >
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-[#EDE8F5]/70"></div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} // ✅ Smooth fade-in effect
          className="flex flex-col gap-2 items-center text-center"
        >
          <h2 className="mb-4 font-quicksand text-5xl font-bold sm:text-4xl text-font-color">
            Why <span className="text-indigo-600">Choose Us?</span>
          </h2>
          <p className="text-center font-robotoFlex text-grey-900 font-light">
            Unlock a world of innovation with our hands-on robotics learning experience.
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="flex items-center gap-8 lg:flex-row">
          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }} // ✅ Slide-in animation
            className="max-w-[500px] hidden sm:block -ml-10"
          >
            <Lottie animationData={animationData} />
          </motion.div>

          {/* Features List */}
          <div className="self-center lg:self-end flex flex-col gap-6 ml-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} // ✅ Staggered animation
                className="flex gap-8 items-center"
              >
                {feature.icon}
                <div className="text-font-color w-fit flex flex-col max-w-sm">
                  <span className="font-quicksand font-medium text-2xl text-[#698be0] sm:text-2xl !leading-[40px] ">
                    {feature.title}
                  </span>
                  <span className="font-robotoFlex font-light text-sm sm:text-xl text-grey-900">
                    {feature.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
    </section>
  );
};

export default WhyThis;
