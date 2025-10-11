import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Patric Stone",
    location: "Florida",
    testimonial:
      "Service was exceptional, and it's clear that you have a genuine passion for what you do. The attention to detail and willingness to personalize the experience made it truly memorable. The commitment to providing the best service possible is evident in everything you do.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Stefanie Rashford",
    location: "North Carolina",
    testimonial:
      "Work is exceptional, and it's clear that you put a great deal of effort and thought into every aspect of it. Attention to detail is remarkable, and it sets a high standard for the rest of the team is impressive. Creativity and innovation and have contributed greatly to the success of the project. Dedication to producing quality work is appreciated.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    location: "Texas",
    testimonial:
      "Outstanding quality and professionalism throughout the entire project. The level of expertise and commitment shown was truly impressive. Every milestone was met with precision and care, making the collaboration seamless and productive.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Sarah Williams",
    location: "California",
    testimonial:
      "Incredible experience from start to finish. The innovative approach and attention to user needs resulted in a product that exceeded all expectations. Communication was clear and consistent throughout the development process.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "David Martinez",
    location: "New York",
    testimonial:
      "Exceptional technical skills combined with creative problem-solving. The project was delivered on time with outstanding quality. The dedication to excellence is evident in every aspect of the work produced.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

// Avatar positions on the map (adjust based on your design)
const avatarPositions = [
  { top: "15%", left: "45%" }, // Position 1
  { top: "35%", left: "75%" }, // Position 2
  { top: "45%", left: "35%" }, // Position 3
  { top: "28%", left: "88%" }, // Position 4
  { top: "65%", left: "10%" }, // Position 5
  { top: "55%", left: "65%" }, // Position 6
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section
      className="relative w-full min-h-screen bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Customer Testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content Section */}
          <div className="relative z-10 order-2 lg:order-1">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="bg-yellow-400 text-black text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 rounded">
                Testimonials
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            >
              What our clients say
            </motion.h2>

            {/* Testimonial Content */}
            <div className="relative min-h-[300px] sm:min-h-[250px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      handleNext();
                    } else if (swipe > swipeConfidenceThreshold) {
                      handlePrev();
                    }
                  }}
                  className="absolute w-full"
                >
                  {/* Quote Icon */}
                  {/* <div className="mb-6">
                    <svg
                      className="w-12 h-12 sm:w-14 sm:h-14 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M6.5 10c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0-2c1.9 0 3.6.8 4.8 2.1-.3-3.4-2.9-6.1-6.3-6.1v2c2.2 0 4 1.8 4 4h-2.5zm11 2c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0-2c1.9 0 3.6.8 4.8 2.1-.3-3.4-2.9-6.1-6.3-6.1v2c2.2 0 4 1.8 4 4h-2.5z" />
                    </svg>
                  </div> */}

                  {/* Testimonial Text */}
                  <blockquote>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 italic">
                      <span className="text-yellow-400 font-bold text-[25px]">
                        "
                      </span>
                      &nbsp;
                      {testimonials[currentIndex].testimonial}
                    </p>
                  </blockquote>

                  {/* Author Info */}
                  <div className="mt-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-500">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            {/* <div className="flex items-center gap-4 mt-8 lg:mt-12">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded-full"
              >
                <div className="absolute inset-0 bg-gray-200 opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <ChevronLeft
                  className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 text-gray-700"
                  strokeWidth={3}
                />
              </button>

              <div className="h-0.5 w-12 sm:w-16 bg-gray-300 relative">
                <motion.div
                  className="absolute inset-0 bg-yellow-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded-full"
              >
                <div className="absolute inset-0 bg-yellow-400 group-hover:bg-yellow-500 transition-colors duration-300 rounded-full" />
                <ChevronRight
                  className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 text-gray-900"
                  strokeWidth={3}
                />
              </button>
            </div> */}
          </div>

          {/* Right Map Section */}
          <div className="relative order-1 lg:order-2 h-[400px] sm:h-[500px] lg:h-[600px]">
            {/* Map Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-2xl">
                {/* USA Map SVG - Simplified representation */}
                <img
                  src="https://wolt.like-themes.com/wp-content/uploads/2023/03/testimonials-map.png"
                  alt=""
                />

                {/* Decorative airplane icon */}
                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-12 right-12 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                  aria-hidden="true"
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 transform rotate-45"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO-friendly structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: {
            "@type": "Organization",
            name: "Your Company Name",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
          },
          author: {
            "@type": "Person",
            name: testimonials[currentIndex].name,
          },
          reviewBody: testimonials[currentIndex].testimonial,
        })}
      </script>
    </section>
  );
};

export default TestimonialsSection;
