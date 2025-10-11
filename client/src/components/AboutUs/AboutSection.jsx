import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const services = [
    { name: "Diagnostics", percentage: 66 },
    { name: "Repairs", percentage: 95 },
    { name: "Prevention", percentage: 53 },
    { name: "Installation", percentage: 77 },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-white py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Images and Experience Box */}
          <motion.div
            className="relative w-full h-full min-h-[500px] lg:min-h-[600px]"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            {/* Main Image */}
            <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://wolt.like-themes.com/wp-content/uploads/elementor/thumbs/about_01-r64u0t6pdwvxqgdyzjozudnhz1gxm45t1v27152toc.jpg"
                alt="Experienced electrician with safety equipment"
                className="w-full h-full object-contain"
              />
            </div>

            {/* 30 Years Experience Box */}
            <motion.div
              className="absolute bottom-0 left-0 bg-yellow-400 p-6 sm:p-8 lg:p-10 w-48 sm:w-56 lg:w-64 rounded-tr-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.3, duration: 0.5 },
                },
              }}
            >
              <div className="relative">
                {/* Decorative Icons */}
                <div className="absolute -top-4 left-2 w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
                  <span className="text-black text-lg">−</span>
                </div>
                <div className="absolute -bottom-2 right-2 w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
                  <span className="text-black text-lg">+</span>
                </div>

                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-2">
                  20
                </h3>
                <p className="text-lg sm:text-xl font-semibold text-black leading-tight">
                  Years of
                  <br />
                  experience
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content and Progress Bars */}
          <motion.div
            className="w-full space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
          >
            {/* About Company Tag */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-yellow-500 uppercase border-l-4 border-yellow-500 pl-3">
                About Company
              </span>
            </div>

            {/* Heading */}
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
            >
              We are reliability and experience
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Operating as “Electric Work” and “Jyoti Enterprises”, we offer
              complete electrical solutions—from design for new projects and
              renovations to the wholesale supply of quality LED lighting like
              Apra and Surya street lights.
            </p>

            {/* Progress Bars */}
            <div className="space-y-5 lg:space-y-6 pt-4">
              {services.map((service, index) => (
                <div key={service.name} className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {service.name}
                    </h3>
                    <motion.span
                      className="text-sm sm:text-base font-bold text-white bg-gray-900 px-3 py-1 rounded"
                      initial={{ opacity: 0 }}
                      animate={controls}
                      variants={{
                        visible: {
                          opacity: 1,
                          transition: {
                            delay: 0.5 + index * 0.1,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <AnimatedPercentage
                        value={service.percentage}
                        isInView={isInView}
                        delay={0.5 + index * 0.1}
                      />
                    </motion.span>
                  </div>

                  {/* Progress Bar Background */}
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    {/* Animated Progress Bar Fill */}
                    <motion.div
                      className="h-full bg-yellow-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={controls}
                      variants={{
                        visible: {
                          width: `${service.percentage}%`,
                          transition: {
                            delay: 0.5 + index * 0.1,
                            duration: 1.2,
                            ease: "easeOut",
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Plus Icon */}
            <motion.div
              className="absolute top-8 right-8 lg:top-12 lg:right-0 text-yellow-400 text-4xl"
              initial={{ opacity: 0, rotate: -90 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  rotate: 0,
                  transition: { delay: 0.8, duration: 0.5 },
                },
              }}
            >
              +
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button (Yellow Circle with Arrow) */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 cursor-pointer bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>

      {/* Decorative Color Wheel (Top Right) */}
      {/* <div
        className="fixed top-8 right-8 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-conic from-red-500 via-yellow-500 to-purple-500 opacity-80 z-40"
        style={{
          background:
            "conic-gradient(from 0deg, #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6, #ef4444)",
        }}
      /> */}
    </section>
  );
};

// Animated Percentage Counter Component
const AnimatedPercentage = ({ value, isInView, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 1200;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return <>{count}%</>;
};

export default AboutUs;
