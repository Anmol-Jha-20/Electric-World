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
//       subtitle2: "products",
//       description:
//         "We understand that electrical problems can happen at any time, so we respond quickly to your requests and are ready to come to you at a convenient time, including nights and weekends.",
//       buttonText: "Our Products",
//       image:
//         "https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_01.jpg",
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

//   // Smooth slide variants - position absolute se overlap karenge
//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 2,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       zIndex: 1,
//       x: direction < 0 ? "100%" : "-100%",
//       opacity: 0,
//     }),
//   };

//   // Text animation with proper stagger
//   const containerVariants = {
//     enter: {
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//     center: {
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3,
//       },
//     },
//     exit: {
//       transition: {
//         staggerChildren: 0.05,
//         staggerDirection: -1,
//       },
//     },
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
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//     exit: {
//       y: -30,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//         ease: [0.55, 0.085, 0.68, 0.53],
//       },
//     },
//   };

//   // Image animation
//   const imageVariants = {
//     enter: {
//       scale: 1.15,
//       opacity: 0,
//     },
//     center: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 1.8,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//     exit: {
//       scale: 1.05,
//       opacity: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.55, 0.055, 0.675, 0.19],
//       },
//     },
//   };

//   // Button animation
//   const buttonVariants = {
//     enter: {
//       scale: 0.9,
//       opacity: 0,
//       y: 20,
//     },
//     center: {
//       scale: 1,
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.6,
//         duration: 0.7,
//         ease: [0.34, 1.56, 0.64, 1],
//       },
//     },
//     exit: {
//       scale: 0.9,
//       opacity: 0,
//       y: -10,
//       transition: {
//         duration: 0.4,
//       },
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

//   // Auto-play
//   useEffect(() => {
//     const timer = setInterval(() => {
//       paginate(1);
//     }, 7000);

//     return () => clearInterval(timer);
//   }, [currentSlide]);

//   return (
//     <section
//       className="relative w-full h-screen overflow-hidden bg-gray-900"
//       aria-label="Hero Slider"
//     >
//       {/* Background layer - permanent dark background */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 z-0" />

//       {/* Slides with AnimatePresence - NO mode="wait" */}
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.div
//           key={currentSlide}
//           custom={direction}
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: {
//               type: "spring",
//               stiffness: 250,
//               damping: 30,
//               mass: 0.8,
//             },
//             opacity: {
//               duration: 0.6,
//             },
//           }}
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           dragElastic={0.2}
//           onDragEnd={(e, { offset, velocity }) => {
//             const swipe = swipePower(offset.x, velocity.x);

//             if (swipe < -swipeConfidenceThreshold) {
//               paginate(1);
//             } else if (swipe > swipeConfidenceThreshold) {
//               paginate(-1);
//             }
//           }}
//           className="absolute inset-0 w-full h-full"
//           style={{ willChange: "transform, opacity" }}
//         >
//           {/* Background Image with Overlay */}
//           <motion.div
//             variants={imageVariants}
//             className="absolute inset-0 w-full h-full"
//           >
//             <div className="absolute inset-0 bg-black/50 z-10" />
//             <motion.img
//               src={slides[currentSlide].image}
//               alt={`${slides[currentSlide].title} ${slides[currentSlide].subtitle}`}
//               className="w-full h-full object-cover"
//               loading="eager"
//             />
//           </motion.div>

//           {/* Content Container */}
//           <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//             <div className="w-full max-w-7xl mx-auto">
//               <motion.div
//                 variants={containerVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="max-w-3xl"
//               >
//                 {/* Title with staggered animation */}
//                 <div className="mb-6">
//                   <motion.h1
//                     variants={textVariants}
//                     className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-yellow-400 font-bold leading-tight"
//                   >
//                     {slides[currentSlide].title}
//                   </motion.h1>
//                   <motion.h2
//                     variants={textVariants}
//                     className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mt-2"
//                   >
//                     {slides[currentSlide].subtitle}
//                   </motion.h2>
//                   <motion.h2
//                     variants={textVariants}
//                     className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight"
//                   >
//                     {slides[currentSlide].subtitle2}
//                   </motion.h2>
//                 </div>

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
//                   whileHover={{
//                     scale: 1.05,
//                     backgroundColor: "#fbbf24",
//                     transition: { duration: 0.3 },
//                   }}
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
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Buttons */}
//       {/* <div className="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 lg:px-8 pointer-events-none">
//         <motion.button
//           whileHover={{
//             scale: 1.15,
//             backgroundColor: "rgba(251, 191, 36, 0.95)",
//             transition: { duration: 0.3 },
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
//             scale: 1.15,
//             backgroundColor: "rgba(251, 191, 36, 0.95)",
//             transition: { duration: 0.3 },
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
//             className={`h-2 rounded-full transition-all duration-500 ${
//               index === currentSlide
//                 ? "w-12 bg-yellow-500"
//                 : "w-2 bg-white/50 hover:bg-white/80"
//             }`}
//             whileHover={{ scale: 1.3 }}
//             transition={{ duration: 0.3 }}
//             aria-label={`Go to slide ${index + 1}`}
//             aria-current={index === currentSlide ? "true" : "false"}
//           />
//         ))}
//       </div>

//       {/* Color Wheel Icon (Top Right) */}
//       {/* <motion.div
//         initial={{ scale: 0, rotate: 180, opacity: 0 }}
//         animate={{ scale: 1, rotate: 0, opacity: 1 }}
//         transition={{
//           delay: 0.4,
//           duration: 1,
//           type: "spring",
//           stiffness: 120,
//           damping: 15,
//         }}
//         className="absolute top-6 right-6 w-12 h-12 z-30"
//       >
//         <motion.div
//           className="w-full h-full rounded-full bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 shadow-lg"
//           animate={{ rotate: 360 }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           aria-hidden="true"
//         />
//       </motion.div> */}
//     </section>
//   );
// };

// export default HeroSlider;

// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const heroRef = useRef(null);

//   // Scroll progress for video section
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   // Transform values for smooth transitions
//   const videoOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.3, 0.5],
//     [1, 0.5, 0]
//   );
//   const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
//   const sliderOpacity = useTransform(
//     scrollYProgress,
//     [0.3, 0.5, 0.7],
//     [0, 0.5, 1]
//   );
//   const sliderY = useTransform(scrollYProgress, [0.3, 0.7], [100, 0]);

//   const slides = [
//     {
//       id: 1,
//       title: "50W Apra",
//       subtitle: "LED Flood",
//       subtitle2: "Light",
//       description:
//         "High-performance LED flood lights designed for industrial and commercial applications with superior brightness and energy efficiency.",
//       buttonText: "View Product",
//       image:
//         "https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_01.jpg",
//     },
//     {
//       id: 2,
//       title: "72W Surya",
//       subtitle: "LED Street",
//       subtitle2: "Light",
//       description:
//         "Premium quality street lighting solutions providing excellent illumination for roads and highways with long-lasting durability.",
//       buttonText: "Learn More",
//       image:
//         "https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_02.jpg",
//     },
//     {
//       id: 3,
//       title: "45W Surya",
//       subtitle: "LED Street",
//       subtitle2: "Light",
//       description:
//         "Efficient and reliable LED street lights perfect for residential areas and smaller roads with optimal power consumption.",
//       buttonText: "Contact Us",
//       image:
//         "https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_03.jpg",
//     },
//   ];

//   // Slide animation variants
//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 2,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       zIndex: 1,
//       x: direction < 0 ? "100%" : "-100%",
//       opacity: 0,
//     }),
//   };

//   // Text animation variants with stagger
//   const containerVariants = {
//     enter: {
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//     center: {
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3,
//       },
//     },
//     exit: {
//       transition: {
//         staggerChildren: 0.05,
//         staggerDirection: -1,
//       },
//     },
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
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//     exit: {
//       y: -30,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//         ease: [0.55, 0.085, 0.68, 0.53],
//       },
//     },
//   };

//   // Image animation
//   const imageVariants = {
//     enter: {
//       scale: 1.15,
//       opacity: 0,
//     },
//     center: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 1.8,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//     exit: {
//       scale: 1.05,
//       opacity: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.55, 0.055, 0.675, 0.19],
//       },
//     },
//   };

//   // Button animation
//   const buttonVariants = {
//     enter: {
//       scale: 0.9,
//       opacity: 0,
//       y: 20,
//     },
//     center: {
//       scale: 1,
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.6,
//         duration: 0.7,
//         ease: [0.34, 1.56, 0.64, 1],
//       },
//     },
//     exit: {
//       scale: 0.9,
//       opacity: 0,
//       y: -10,
//       transition: {
//         duration: 0.4,
//       },
//     },
//   };

//   // Video overlay text animation
//   const videoTextVariants = {
//     initial: { opacity: 0, y: 30 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 1,
//         ease: "easeOut",
//       },
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

//   // Auto-play for slider
//   useEffect(() => {
//     const timer = setInterval(() => {
//       paginate(1);
//     }, 7000);

//     return () => clearInterval(timer);
//   }, [currentSlide]);

//   return (
//     <section
//       ref={heroRef}
//       className="relative w-full min-h-[200vh] bg-gray-900"
//       aria-label="Hero Section"
//     >
//       {/* Video Section - Fades out on scroll */}
//       <motion.div
//         style={{
//           opacity: videoOpacity,
//           scale: videoScale,
//         }}
//         className="sticky top-0 w-full h-screen overflow-hidden"
//       >
//         {/* Video Background */}
//         <div className="absolute inset-0 w-full h-full">
//           <div className="absolute inset-0 bg-black/60 z-10" />
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover"
//             poster="https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_01.jpg"
//           >
//             {/* Replace with your LED product video */}
//             <source
//               src="https://cdn.pixabay.com/video/2023/06/30/169438-841382803_large.mp4"
//               type="video/mp4"
//             />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         {/* Video Overlay Text - Animated */}
//         <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
//           <motion.div
//             variants={videoTextVariants}
//             initial="initial"
//             animate="animate"
//             className="text-center max-w-4xl"
//           >
//             <motion.h1
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.2 }}
//               className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-yellow-400 font-bold leading-tight mb-6"
//             >
//               Jyoti Enterprises
//             </motion.h1>
//             <motion.h2
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.4 }}
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-8"
//             >
//               Premium LED Lighting Solutions
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.6 }}
//               className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed mb-10"
//             >
//               Since 2003 - Your Trusted Partner for Quality LED Products
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.8,
//                 type: "spring",
//                 stiffness: 150,
//               }}
//               className="inline-block"
//             >
//               <button className="bg-yellow-500 text-gray-900 px-10 py-5 rounded-md text-xl font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 hover:scale-105">
//                 Explore Our Range
//               </button>
//             </motion.div>

//             {/* Scroll indicator */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 1.2 }}
//               className="mt-16"
//             >
//               <motion.div
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//                 className="text-white text-sm"
//               >
//                 <div className="flex flex-col items-center gap-2">
//                   <span className="text-yellow-400 font-medium">
//                     Scroll to explore
//                   </span>
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                     />
//                   </svg>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Slider Section - Fades in on scroll */}
//       <motion.div
//         style={{
//           opacity: sliderOpacity,
//           y: sliderY,
//         }}
//         className="sticky top-0 w-full h-screen overflow-hidden"
//       >
//         <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 z-0" />

//         {/* Animated Slides */}
//         <AnimatePresence initial={false} custom={direction}>
//           <motion.div
//             key={currentSlide}
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               x: {
//                 type: "spring",
//                 stiffness: 250,
//                 damping: 30,
//                 mass: 0.8,
//               },
//               opacity: {
//                 duration: 0.6,
//               },
//             }}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={0.2}
//             onDragEnd={(e, { offset, velocity }) => {
//               const swipe = swipePower(offset.x, velocity.x);

//               if (swipe < -swipeConfidenceThreshold) {
//                 paginate(1);
//               } else if (swipe > swipeConfidenceThreshold) {
//                 paginate(-1);
//               }
//             }}
//             className="absolute inset-0 w-full h-full"
//             style={{ willChange: "transform, opacity" }}
//           >
//             {/* Background Image with Overlay */}
//             <motion.div
//               variants={imageVariants}
//               className="absolute inset-0 w-full h-full"
//             >
//               <div className="absolute inset-0 bg-black/50 z-10" />
//               <motion.img
//                 src={slides[currentSlide].image}
//                 alt={`${slides[currentSlide].title} ${slides[currentSlide].subtitle}`}
//                 className="w-full h-full object-cover"
//                 loading="eager"
//               />
//             </motion.div>

//             {/* Content Container */}
//             <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//               <div className="w-full max-w-7xl mx-auto">
//                 <motion.div
//                   variants={containerVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   className="max-w-3xl"
//                 >
//                   {/* Title with staggered animation */}
//                   <div className="mb-6">
//                     <motion.h1
//                       variants={textVariants}
//                       className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-yellow-400 font-bold leading-tight"
//                     >
//                       {slides[currentSlide].title}
//                     </motion.h1>
//                     <motion.h2
//                       variants={textVariants}
//                       className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mt-2"
//                     >
//                       {slides[currentSlide].subtitle}
//                     </motion.h2>
//                     <motion.h2
//                       variants={textVariants}
//                       className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight"
//                     >
//                       {slides[currentSlide].subtitle2}
//                     </motion.h2>
//                   </div>

//                   {/* Description */}
//                   <motion.p
//                     variants={textVariants}
//                     className="text-white text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
//                   >
//                     {slides[currentSlide].description}
//                   </motion.p>

//                   {/* CTA Button */}
//                   <motion.button
//                     variants={buttonVariants}
//                     whileHover={{
//                       scale: 1.05,
//                       backgroundColor: "#fbbf24",
//                       transition: { duration: 0.3 },
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
//                     aria-label={slides[currentSlide].buttonText}
//                   >
//                     <span className="text-xl">+</span>
//                     {slides[currentSlide].buttonText}
//                   </motion.button>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation Buttons */}
//         <div className="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 lg:px-8 pointer-events-none">
//           <motion.button
//             whileHover={{
//               scale: 1.15,
//               backgroundColor: "rgba(251, 191, 36, 0.95)",
//               transition: { duration: 0.3 },
//             }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => paginate(-1)}
//             className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500/70 hover:bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 shadow-lg backdrop-blur-sm"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
//           </motion.button>

//           <motion.button
//             whileHover={{
//               scale: 1.15,
//               backgroundColor: "rgba(251, 191, 36, 0.95)",
//               transition: { duration: 0.3 },
//             }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => paginate(1)}
//             className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500/70 hover:bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 shadow-lg backdrop-blur-sm"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
//           </motion.button>
//         </div>

//         {/* Slide Indicators */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
//           {slides.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => {
//                 setDirection(index > currentSlide ? 1 : -1);
//                 setCurrentSlide(index);
//               }}
//               className={`h-2 rounded-full transition-all duration-500 ${
//                 index === currentSlide
//                   ? "w-12 bg-yellow-500"
//                   : "w-2 bg-white/50 hover:bg-white/80"
//               }`}
//               whileHover={{ scale: 1.3 }}
//               transition={{ duration: 0.3 }}
//               aria-label={`Go to slide ${index + 1}`}
//               aria-current={index === currentSlide ? "true" : "false"}
//             />
//           ))}
//         </div>
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
  const [showVideo, setShowVideo] = useState(true);

  const slides = [
    {
      id: 1,
      title: "50W Apra",
      subtitle: "LED Flood",
      subtitle2: "Light",
      description:
        "High-performance LED flood lights designed for industrial and commercial applications with superior brightness and energy efficiency.",
      buttonText: "View Product",
      image:
        "https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_01.jpg",
    },
    {
      id: 2,
      title: "72W Surya",
      subtitle: "LED Street",
      subtitle2: "Light",
      description:
        "Premium quality street lighting solutions providing excellent illumination for roads and highways with long-lasting durability.",
      buttonText: "Learn More",
      image:
        "https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_02.jpg",
    },
    {
      id: 3,
      title: "45W Surya",
      subtitle: "LED Street",
      subtitle2: "Light",
      description:
        "Efficient and reliable LED street lights perfect for residential areas and smaller roads with optimal power consumption.",
      buttonText: "Contact Us",
      image:
        "https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_03.jpg",
    },
  ];

  // Auto transition from video to slider after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Slide animation variants with 3D effects
  const slideVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 2,
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 1,
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
    }),
  };

  // Text animation variants with bounce effect
  const containerVariants = {
    enter: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
    center: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
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
      y: 60,
      opacity: 0,
      scale: 0.9,
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.5,
      },
    },
    exit: {
      y: -40,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Image animation with zoom and rotation
  const imageVariants = {
    enter: {
      scale: 1.3,
      opacity: 0,
      rotate: 5,
    },
    center: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      rotate: -3,
      transition: {
        duration: 0.8,
      },
    },
  };

  // Button animation with elastic effect
  const buttonVariants = {
    enter: {
      scale: 0.5,
      opacity: 0,
      y: 30,
      rotate: -10,
    },
    center: {
      scale: 1,
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: 0.7,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: -15,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Video overlay text animation
  const videoTextVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Video section exit animation
  const videoContainerVariants = {
    initial: { opacity: 1, scale: 1 },
    exit: {
      opacity: 0,
      scale: 1.2,
      rotateY: -15,
      transition: {
        duration: 1.2,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  // Slider entrance animation
  const sliderContainerVariants = {
    initial: { opacity: 0, scale: 0.85, rotateX: 45 },
    animate: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
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

  // Auto-play for slider
  useEffect(() => {
    if (!showVideo) {
      const timer = setInterval(() => {
        paginate(1);
      }, 7000);

      return () => clearInterval(timer);
    }
  }, [currentSlide, showVideo]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-gray-900"
      aria-label="Hero Section"
      style={{ perspective: "2000px" }}
    >
      <AnimatePresence mode="wait">
        {showVideo ? (
          // Video Section
          <motion.div
            key="video"
            variants={videoContainerVariants}
            initial="initial"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-10" />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster="https://wolt.like-themes.com/wp-content/uploads/2023/03/slider_01.jpg"
              >
                <source
                  src="https://cdn.pixabay.com/video/2015/08/08/113-135736259_large.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Overlay Text - Animated */}
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
              {/* <div className="text-center max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 80,
                  }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl text-yellow-400 font-bold leading-tight mb-6 drop-shadow-2xl">
                    Jyoti Enterprises
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    type: "spring",
                    stiffness: 60,
                  }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-4">
                    Premium LED Lighting
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.8,
                    type: "spring",
                    stiffness: 60,
                  }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-8">
                    Solutions
                  </h2>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2,
                  }}
                  className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 drop-shadow-lg"
                >
                  Since 2003 - Your Trusted Partner
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.6,
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                  }}
                  className="inline-block"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 text-gray-900 px-12 py-6 rounded-full text-xl font-bold hover:bg-yellow-400 transition-all duration-300 shadow-2xl"
                  >
                    Explore Products
                  </motion.button>
                </motion.div>

                
              </div> */}

              {/* Alternate text for this particular video */}
              <div className="text-center max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 80,
                  }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl text-yellow-400 font-bold leading-tight mb-6 drop-shadow-2xl">
                    Electric World
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    type: "spring",
                    stiffness: 60,
                  }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-4">
                    Premium LED Lighting
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.8,
                    type: "spring",
                    stiffness: 60,
                  }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-8">
                    Solutions
                  </h2>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2,
                  }}
                  className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 drop-shadow-lg"
                >
                  Since 2003 - Your Trusted Partner
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.6,
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                  }}
                  className="inline-block"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 text-gray-900 px-12 py-6 rounded-full text-xl font-bold hover:bg-yellow-400 transition-all duration-300 shadow-2xl"
                  >
                    Explore Products
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          // Slider Section
          <motion.div
            key="slider"
            variants={sliderContainerVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0" />

            {/* Animated Slides */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  rotateY: {
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                  },
                  opacity: {
                    duration: 0.5,
                  },
                  scale: {
                    duration: 0.8,
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
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Background Image with Overlay */}
                <motion.div
                  variants={imageVariants}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70 z-10" />
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
                          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-yellow-400 font-bold leading-tight drop-shadow-2xl"
                        >
                          {slides[currentSlide].title}
                        </motion.h1>
                        <motion.h2
                          variants={textVariants}
                          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mt-2 drop-shadow-xl"
                        >
                          {slides[currentSlide].subtitle}
                        </motion.h2>
                        <motion.h2
                          variants={textVariants}
                          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight drop-shadow-xl"
                        >
                          {slides[currentSlide].subtitle2}
                        </motion.h2>
                      </div>

                      {/* Description */}
                      <motion.p
                        variants={textVariants}
                        className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed drop-shadow-lg"
                      >
                        {slides[currentSlide].description}
                      </motion.p>

                      {/* CTA Button */}
                      <motion.button
                        variants={buttonVariants}
                        whileHover={{
                          scale: 1.08,
                          backgroundColor: "#fbbf24",
                          boxShadow: "0 0 25px rgba(251, 191, 36, 0.5)",
                          transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.92 }}
                        className="inline-flex items-center gap-3 bg-yellow-500 text-gray-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-400 transition-colors duration-300 shadow-2xl"
                        aria-label={slides[currentSlide].buttonText}
                      >
                        <span className="text-2xl">+</span>
                        {slides[currentSlide].buttonText}
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons with enhanced animation */}
            {/* <div className="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 lg:px-8 pointer-events-none">
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "rgba(251, 191, 36, 1)",
                  boxShadow: "0 0 20px rgba(251, 191, 36, 0.6)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.85 }}
                onClick={() => paginate(-1)}
                className="pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500/80 hover:bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 shadow-2xl backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-7 h-7 sm:w-9 sm:h-9" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "rgba(251, 191, 36, 1)",
                  boxShadow: "0 0 20px rgba(251, 191, 36, 0.6)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.85 }}
                onClick={() => paginate(1)}
                className="pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500/80 hover:bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 shadow-2xl backdrop-blur-sm"
                aria-label="Next slide"
              >
                <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9" />
              </motion.button>
            </div> */}

            {/* Slide Indicators with animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3"
            >
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1);
                    setCurrentSlide(index);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? "w-14 bg-yellow-500"
                      : "w-2.5 bg-white/50 hover:bg-white/80"
                  }`}
                  whileHover={{
                    scale: 1.4,
                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentSlide ? "true" : "false"}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSlider;
