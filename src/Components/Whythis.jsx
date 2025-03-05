import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, UserCheck, Package, Lightbulb } from "lucide-react";

const WhyThis = () => {
  const items = [
    { icon: BookOpen, text: "Hands-on Learning: Real-world applications with practical experience." },
    { icon: UserCheck, text: "Expert Trainers: Skilled professionals in robotics and technology." },
    { icon: Package, text: "Customizable Kits: High-quality kits designed for ease of learning." },
    { icon: Lightbulb, text: "Fostering Creativity: Encouraging innovation and out-of-the-box thinking." }
  ];

  return (
    <section
      id="why-this"
      className="py-20 px-6 md:px-10 border-t border-b border-gray-200 relative overflow-hidden pt-5"
      style={{ background: "linear-gradient(to bottom,#9FADD8, #ADB8DA ,#B6C1E3)" }}
    >
      {/* Floating Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-white opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(50px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              x: [0, 15, -15, 0],
              y: [0, 10, -10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <h2 className="mt-3 text-3xl sm:text-4xl font-quicksand font-bold text-font-color">
          Why Choose <span className="text-indigo-600">Roboloom?</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto font-robotoFlex leading-relaxed text-font-color">
          Our courses emphasize real-world applications and practical experience, ensuring an engaging and interactive learning journey.
        </p>
      </div>

      {/* Parabola Grid Layout */}
      <div className="relative mx-auto max-w-6xl grid grid-cols-3 gap-10 pt-14 z-10">
        <div className="col-span-1 place-self-end">
          <Box icon={items[0].icon} text={items[0].text} delay={0.2} />
        </div>
        <div className="col-span-1 row-span-2 place-self-center">
          <Box icon={items[1].icon} text={items[1].text} delay={0.4} />
        </div>
        <div className="col-span-1 place-self-start">
          <Box icon={items[2].icon} text={items[2].text} delay={0.6} />
        </div>
        <div className="col-span-3 place-self-center">
          <Box icon={items[3].icon} text={items[3].text} delay={0.8} />
        </div>
      </div>
    </section>
  );
};

// 🔥 Box Component with Icon in the Corner
const Box = ({ icon: Icon, text, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-xl p-8 text-center shadow-lg backdrop-blur-lg bg-gradient-end border border-gray-300 overflow-hidden"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Icon in Corner */}
      <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg shadow-md bg-font-color text-white">
        <Icon className="w-6 h-6" />
      </div>

      <p className="mt-12 font-medium text-gray-800 leading-relaxed">{text}</p>
    </motion.div>
  );
};

export default WhyThis;
