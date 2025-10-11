// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       title: "Full range",
//       subtitle: "of electrical",
//       subtitle2: "services",
//       description:
//         "We understand that electrical problems can happen at any time, so we respond quickly to your requests and are ready to come to you at a convenient time, including nights and weekends.",
//       buttonText: "Our Services",
//       image:
//         "https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_01.jpg", // Replace with actual image path
//       bgColor: "from-gray-900 to-gray-800",
//     },
//     {
//       id: 2,
//       title: "Professional",
//       subtitle: "electrical",
//       subtitle2: "solutions",
//       description:
//         "Expert electricians providing top-quality residential and commercial electrical services with 24/7 emergency support and guaranteed satisfaction.",
//       buttonText: "Contact Us",
//       image:
//         "https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_02.jpg",
//       bgColor: "from-gray-800 to-gray-900",
//     },
//     {
//       id: 3,
//       title: "Reliable",
//       subtitle: "and trusted",
//       subtitle2: "service",
//       description:
//         "Licensed and insured electrical contractors delivering safe, efficient, and cost-effective solutions for all your electrical needs.",
//       buttonText: "Learn More",
//       image:
//         "https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_03.jpg",
//       bgColor: "from-slate-900 to-slate-800",
//     },
//   ];

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//   };

//   const textVariants = {
//     enter: {
//       y: 50,
//       opacity: 0,
//     },
//     center: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.6, 0.05, 0.01, 0.9],
//         staggerChildren: 0.1,
//       },
//     },
//     exit: {
//       y: -50,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const imageVariants = {
//     enter: {
//       scale: 1.2,
//       opacity: 0,
//     },
//     center: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 1.2,
//         ease: [0.6, 0.05, 0.01, 0.9],
//       },
//     },
//     exit: {
//       scale: 0.9,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const buttonVariants = {
//     enter: {
//       scale: 0.8,
//       opacity: 0,
//     },
//     center: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         delay: 0.4,
//         duration: 0.6,
//         ease: [0.6, 0.05, 0.01, 0.9],
//       },
//     },
//     exit: {
//       scale: 0.8,
//       opacity: 0,
//     },
//   };

//   const swipeConfidenceThreshold = 10000;
//   const swipePower = (offset, velocity) => {
//     return Math.abs(offset) * velocity;
//   };

//   const paginate = (newDirection) => {
//     setDirection(newDirection);
//     setCurrentSlide((prevSlide) => {
//       let nextSlide = prevSlide + newDirection;
//       if (nextSlide < 0) nextSlide = slides.length - 1;
//       if (nextSlide >= slides.length) nextSlide = 0;
//       return nextSlide;
//     });
//   };

//   // Auto-play functionality
//   useEffect(() => {
//     const timer = setInterval(() => {
//       paginate(1);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//   }, [currentSlide]);

//   return (
//     <section
//       className="relative w-full h-screen overflow-hidden bg-gray-900"
//       aria-label="Hero Slider"
//     >
//       <AnimatePresence initial={false} custom={direction} mode="wait">
//         <motion.div
//           key={currentSlide}
//           custom={direction}
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.5 },
//           }}
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           dragElastic={1}
//           onDragEnd={(e, { offset, velocity }) => {
//             const swipe = swipePower(offset.x, velocity.x);

//             if (swipe < -swipeConfidenceThreshold) {
//               paginate(1);
//             } else if (swipe > swipeConfidenceThreshold) {
//               paginate(-1);
//             }
//           }}
//           className={`absolute inset-0 w-full h-full bg-gradient-to-br ${slides[currentSlide].bgColor}`}
//         >
//           {/* Background Image with Overlay */}
//           <motion.div
//             variants={imageVariants}
//             className="absolute inset-0 w-full h-full"
//           >
//             <div className="absolute inset-0 bg-black/50 z-10" />
//             <img
//               src={slides[currentSlide].image}
//               alt={`${slides[currentSlide].title} ${slides[currentSlide].subtitle}`}
//               className="w-full h-full object-cover"
//               loading="lazy"
//             />
//           </motion.div>

//           {/* Content Container */}
//           <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//             <div className="w-full max-w-7xl mx-auto">
//               <motion.div
//                 variants={textVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="max-w-3xl"
//               >
//                 {/* Title */}
//                 <motion.h1
//                   variants={textVariants}
//                   className="text-white font-bold leading-tight mb-6"
//                 >
//                   <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-yellow-400">
//                     {slides[currentSlide].title}
//                   </span>
//                   <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mt-2">
//                     {slides[currentSlide].subtitle}
//                   </span>
//                   <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
//                     {slides[currentSlide].subtitle2}
//                   </span>
//                 </motion.h1>

//                 {/* Description */}
//                 <motion.p
//                   variants={textVariants}
//                   className="text-white text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
//                 >
//                   {slides[currentSlide].description}
//                 </motion.p>

//                 {/* CTA Button */}
//                 <motion.button
//                   variants={buttonVariants}
//                   whileHover={{ scale: 1.05, backgroundColor: "#fbbf24" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
//                   aria-label={slides[currentSlide].buttonText}
//                 >
//                   <span className="text-xl">+</span>
//                   {slides[currentSlide].buttonText}
//                 </motion.button>
//               </motion.div>
//             </div>
//           </div>

//           {/* Decorative Icon (Bottom Right) */}
//           {/* <motion.div
//             initial={{ scale: 0, rotate: -180 }}
//             animate={{ scale: 1, rotate: 0 }}
//             transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
//             className="absolute bottom-8 right-8 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-2xl z-20"
//           >
//             <svg
//               className="w-8 h-8 text-gray-900"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               aria-hidden="true"
//             >
//               <path d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z" />
//             </svg>
//           </motion.div> */}
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Buttons */}
//       {/* <div className="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 lg:px-8 pointer-events-none">
//         <motion.button
//           whileHover={{
//             scale: 1.1,
//             backgroundColor: "rgba(251, 191, 36, 0.9)",
//           }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => paginate(-1)}
//           className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500/70 hover:bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 shadow-lg backdrop-blur-sm"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
//         </motion.button>

//         <motion.button
//           whileHover={{
//             scale: 1.1,
//             backgroundColor: "rgba(251, 191, 36, 0.9)",
//           }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => paginate(1)}
//           className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500/70 hover:bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 shadow-lg backdrop-blur-sm"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
//         </motion.button>
//       </div> */}

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
//         {slides.map((_, index) => (
//           <motion.button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentSlide ? 1 : -1);
//               setCurrentSlide(index);
//             }}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               index === currentSlide
//                 ? "w-12 bg-yellow-500"
//                 : "w-2 bg-white/50 hover:bg-white/80"
//             }`}
//             whileHover={{ scale: 1.2 }}
//             aria-label={`Go to slide ${index + 1}`}
//             aria-current={index === currentSlide ? "true" : "false"}
//           />
//         ))}
//       </div>

//       {/* Color Wheel Icon (Top Right) */}
//       <motion.div
//         initial={{ scale: 0, rotate: 180 }}
//         animate={{ scale: 1, rotate: 0 }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//         className="absolute top-6 right-6 w-12 h-12 z-30"
//       >
//         <div
//           className="w-full h-full rounded-full bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 animate-spin-slow shadow-lg"
//           style={{ animation: "spin 10s linear infinite" }}
//           aria-hidden="true"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSlider;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Full range",
      subtitle: "of electrical",
      subtitle2: "products",
      description:
        "We understand that electrical problems can happen at any time, so we respond quickly to your requests and are ready to come to you at a convenient time, including nights and weekends.",
      buttonText: "Our Products",
      image:
        "https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_01.jpg",
      bgColor: "from-gray-900 to-gray-800",
    },
    {
      id: 2,
      title: "Professional",
      subtitle: "electrical",
      subtitle2: "solutions",
      description:
        "Expert electricians providing top-quality residential and commercial electrical services with 24/7 emergency support and guaranteed satisfaction.",
      buttonText: "Contact Us",
      image:
        "https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_02.jpg",
      bgColor: "from-gray-800 to-gray-900",
    },
    {
      id: 3,
      title: "Reliable",
      subtitle: "and trusted",
      subtitle2: "service",
      description:
        "Licensed and insured electrical contractors delivering safe, efficient, and cost-effective solutions for all your electrical needs.",
      buttonText: "Learn More",
      image:
        "https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_03.jpg",
      bgColor: "from-slate-900 to-slate-800",
    },
  ];

  // Smooth slide variants - position absolute se overlap karenge
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 2,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 1,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  // Text animation with proper stagger
  const containerVariants = {
    enter: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    center: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const textVariants = {
    enter: {
      y: 50,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      y: -30,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.55, 0.085, 0.68, 0.53],
      },
    },
  };

  // Image animation
  const imageVariants = {
    enter: {
      scale: 1.15,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      scale: 1.05,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.55, 0.055, 0.675, 0.19],
      },
    },
  };

  // Button animation
  const buttonVariants = {
    enter: {
      scale: 0.9,
      opacity: 0,
      y: 20,
    },
    center: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.4,
      },
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prevSlide) => {
      let nextSlide = prevSlide + newDirection;
      if (nextSlide < 0) nextSlide = slides.length - 1;
      if (nextSlide >= slides.length) nextSlide = 0;
      return nextSlide;
    });
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-gray-900"
      aria-label="Hero Slider"
    >
      {/* Background layer - permanent dark background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 z-0" />

      {/* Slides with AnimatePresence - NO mode="wait" */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: {
              type: "spring",
              stiffness: 250,
              damping: 30,
              mass: 0.8,
            },
            opacity: {
              duration: 0.6,
            },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Background Image with Overlay */}
          <motion.div
            variants={imageVariants}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <motion.img
              src={slides[currentSlide].image}
              alt={`${slides[currentSlide].title} ${slides[currentSlide].subtitle}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>

          {/* Content Container */}
          <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="w-full max-w-7xl mx-auto">
              <motion.div
                variants={containerVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="max-w-3xl"
              >
                {/* Title with staggered animation */}
                <div className="mb-6">
                  <motion.h1
                    variants={textVariants}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-yellow-400 font-bold leading-tight"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  <motion.h2
                    variants={textVariants}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mt-2"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.h2>
                  <motion.h2
                    variants={textVariants}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight"
                  >
                    {slides[currentSlide].subtitle2}
                  </motion.h2>
                </div>

                {/* Description */}
                <motion.p
                  variants={textVariants}
                  className="text-white text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* CTA Button */}
                <motion.button
                  variants={buttonVariants}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#fbbf24",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  aria-label={slides[currentSlide].buttonText}
                >
                  <span className="text-xl">+</span>
                  {slides[currentSlide].buttonText}
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Decorative Icon (Bottom Right) */}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {/* <div className="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 lg:px-8 pointer-events-none">
        <motion.button
          whileHover={{
            scale: 1.15,
            backgroundColor: "rgba(251, 191, 36, 0.95)",
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500/70 hover:bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 shadow-lg backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.15,
            backgroundColor: "rgba(251, 191, 36, 0.95)",
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500/70 hover:bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 shadow-lg backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.button>
      </div> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-12 bg-yellow-500"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>

      {/* Color Wheel Icon (Top Right) */}
      {/* <motion.div
        initial={{ scale: 0, rotate: 180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 1,
          type: "spring",
          stiffness: 120,
          damping: 15,
        }}
        className="absolute top-6 right-6 w-12 h-12 z-30"
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 shadow-lg"
          animate={{ rotate: 360 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          aria-hidden="true"
        />
      </motion.div> */}
    </section>
  );
};

export default HeroSlider;
