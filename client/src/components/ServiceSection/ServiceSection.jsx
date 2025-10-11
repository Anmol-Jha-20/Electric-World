import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      id: "01",
      title: "Flood Light",
      description:
        "Leading Wholesale Trader of 200W Surya Flood Light, 150W Surya Flood Light, 50W Apra Kaixin LED Flood Light, Havells Max Pro Flood Light, 100W Philips Flood Light and 100W Havells Jeta Sturdy Flood Light from Bhilwara.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301915484/HB/JV/TK/60856849/200w-surya-flood-light-500x500.jpg",
    },
    {
      id: "02",
      title: "Ceiling Fan",
      description:
        "Prominent & Leading Wholesale Trader from Bhilwara, we offer Havells Reo Utsav Ceiling Fan, Orient Electric Gratia Ceiling Fan and BLDC Ceiling Fan.",
      image: "/placeholder-ceiling-light.jpg",
    },
    {
      id: "03",
      title: "Switch Board",
      description:
        "Providing you the best range of Electrical Switch Board and Anchor Electrical Switch Board with effective & timely delivery.",
      image: "/placeholder-geometric-light.jpg",
    },
    {
      id: "04",
      title: "LED Bulb",
      description:
        "Wholesale Trader of a wide range of products which include Philips Stellar Bright LED Bulb.",
      image: "/placeholder-ceiling-light.jpg",
    },
    {
      id: "05",
      title: "Street Light",
      description:
        "Wholesale Trader of a wide range of products which include Surya SL-45W LED Street Light, Led Display Module, Surya SL-72W LED Street Light and Surya SL-20W LED Street Light.",
      image: "/placeholder-ceiling-light.jpg",
    },
    {
      id: "06",
      title: "COB Light",
      description:
        "Our product range includes a wide range of 12W Havells LED COB Light and Led Cob Chip.",
      image: "/placeholder-ceiling-light.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gray-100 rounded-full -translate-y-1/2 translate-x-1/4 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-gray-50 rounded-full translate-y-1/2 -translate-x-1/4"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-full translate-x-1/3"></div>

      {/* Floating Color Wheel Icon */}
      {/* <motion.div
        className="absolute top-8 right-8 md:top-12 md:right-12 lg:top-16 lg:right-16 w-8 h-8 md:w-10 md:h-10 z-10"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-red-400 via-yellow-400 to-purple-400"></div>
      </motion.div> */}

      {/* Floating Arrow Up Button */}
      {/* <motion.button
        className="fixed bottom-8 right-8 md:bottom-12 md:right-12 w-14 h-14 md:w-16 md:h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6 md:w-7 md:h-7 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </motion.button> */}

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-xs md:text-sm font-bold uppercase tracking-wider text-black mb-4 inline-block px-4 py-1 bg-yellow-400"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            OUR PRODUCTS
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
            Full range of products
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-px bg-gray-200"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className="bg-white p-8 md:p-10 lg:p-12 relative group hover:bg-gray-50 transition-colors duration-300"
              variants={itemVariants}
            >
              {/* Service Number */}
              <div className="flex items-start gap-4 md:gap-6 mb-6">
                <motion.span
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.id}.
                </motion.span>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Service Image - Centered */}
              {/* {(index === 0 || index === 2) && (
                <motion.div
                  className="mt-8 flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
                    loading="lazy"
                  />
                </motion.div>
              )} */}

              {/* Decorative Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const ServicesSection = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const services = [
//     {
//       id: "01",
//       title: "Electrical repairs",
//       description:
//         "Our electronic services include installation, maintenance, and repair of all types of electrical systems for residential and commercial buildings.",
//       bgImage:
//         "https://5.imimg.com/data5/SELLER/Default/2023/4/301915484/HB/JV/TK/60856849/200w-surya-flood-light-500x500.jpg",
//     },
//     {
//       id: "02",
//       title: "Safety improvement",
//       description:
//         "Looking for energy-efficient lighting solutions? Our experts can help you choose the right LED lighting systems that meet your needs and budget.",
//       bgImage:
//         "https://5.imimg.com/data5/SELLER/Default/2023/4/301915484/HB/JV/TK/60856849/200w-surya-flood-light-500x500.jpg",
//     },
//     {
//       id: "03",
//       title: "Lighting upgrades",
//       description:
//         "From outdoor landscape lighting to indoor ambient lighting, our team of professionals can create a customized lighting plan that enhances your space.",
//       bgImage:
//         "https://5.imimg.com/data5/SELLER/Default/2023/4/301915484/HB/JV/TK/60856849/200w-surya-flood-light-500x500.jpg",
//     },
//     {
//       id: "04",
//       title: "Surge protection",
//       description:
//         "Our experienced technicians can perform electrical safety inspections to identify potential hazards and ensure that your electrical systems are up to code.",
//       bgImage:
//         "https://5.imimg.com/data5/SELLER/Default/2023/4/301915484/HB/JV/TK/60856849/200w-surya-flood-light-500x500.jpg",
//     },
//     {
//       id: "05",
//       title: "Panel upgrades",
//       description:
//         "Upgrade your electrical panel to improve energy efficiency, increase capacity, and protect your home or business from power surges and electrical fires.",
//       bgImage:
//         "https://5.imimg.com/data5/SELLER/Default/2023/4/301915484/HB/JV/TK/60856849/200w-surya-flood-light-500x500.jpg",
//     },
//     {
//       id: "06",
//       title: "Cable installation",
//       description:
//         "Whether you need lighting repairs, electrical upgrades, or a new installation, we're here to provide quality services that meet your needs and exceed your expectations.",
//       bgImage:
//         "https://5.imimg.com/data5/SELLER/Default/2023/4/301915484/HB/JV/TK/60856849/200w-surya-flood-light-500x500.jpg",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section className="relative bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gray-100 rounded-full -translate-y-1/2 translate-x-1/4 opacity-50"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-gray-50 rounded-full translate-y-1/2 -translate-x-1/4"></div>
//       <div className="absolute top-1/2 right-0 w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-full translate-x-1/3"></div>

//       {/* Floating Color Wheel Icon */}
//       <motion.div
//         className="absolute top-8 right-8 md:top-12 md:right-12 lg:top-16 lg:right-16 w-8 h-8 md:w-10 md:h-10 z-10"
//         animate={{
//           y: [0, -10, 0],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <div className="w-full h-full rounded-full bg-gradient-to-br from-red-400 via-yellow-400 to-purple-400"></div>
//       </motion.div>

//       {/* Floating Arrow Up Button */}
//       {/* <motion.button
//         className="fixed bottom-8 right-8 md:bottom-12 md:right-12 w-14 h-14 md:w-16 md:h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors z-50"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         animate={{
//           y: [0, -5, 0],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         aria-label="Scroll to top"
//       >
//         <svg
//           className="w-6 h-6 md:w-7 md:h-7 text-black"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2.5}
//             d="M5 15l7-7 7 7"
//           />
//         </svg>
//       </motion.button> */}

//       <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-12 md:mb-16 lg:mb-20"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.p
//             className="text-xs md:text-sm font-bold uppercase tracking-wider text-black mb-4 inline-block px-4 py-1 bg-yellow-400"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             OUR SERVICES
//           </motion.p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
//             Full range of services
//           </h2>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-px bg-gray-200"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {services.map((service, index) => (
//             <motion.article
//               key={service.id}
//               className="relative overflow-hidden group cursor-pointer"
//               variants={itemVariants}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Background Image Layer */}
//               <motion.div
//                 className="absolute inset-0 bg-cover bg-center z-0"
//                 style={{
//                   backgroundImage: `url(${service.bgImage})`,
//                 }}
//                 initial={{ opacity: 0, scale: 1.1 }}
//                 animate={{
//                   opacity: hoveredIndex === index ? 1 : 0,
//                   scale: hoveredIndex === index ? 1 : 1.1,
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   ease: "easeInOut",
//                 }}
//               >
//                 {/* Dark Overlay for better text readability */}
//                 <motion.div
//                   className="absolute inset-0 bg-black"
//                   initial={{ opacity: 0 }}
//                   animate={{
//                     opacity: hoveredIndex === index ? 0.5 : 0,
//                   }}
//                   transition={{
//                     duration: 0.6,
//                     ease: "easeInOut",
//                   }}
//                 />
//               </motion.div>

//               {/* White Background Layer */}
//               <motion.div
//                 className="absolute inset-0 bg-white z-[1]"
//                 initial={{ opacity: 1 }}
//                 animate={{
//                   opacity: hoveredIndex === index ? 0 : 1,
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   ease: "easeInOut",
//                 }}
//               />

//               {/* Content Layer */}
//               <div className="relative z-[2] p-8 md:p-10 lg:p-12">
//                 {/* Service Number */}
//                 <div className="flex items-start gap-4 md:gap-6 mb-6">
//                   <motion.span
//                     className={`text-4xl md:text-5xl lg:text-6xl font-bold transition-colors duration-600 ${
//                       hoveredIndex === index
//                         ? "text-yellow-400"
//                         : "text-yellow-400"
//                     }`}
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     {service.id}.
//                   </motion.span>
//                   <div className="flex-1">
//                     <motion.h3
//                       className={`text-xl md:text-2xl lg:text-3xl font-bold mb-4 transition-colors duration-600 ${
//                         hoveredIndex === index ? "text-white" : "text-gray-900"
//                       }`}
//                     >
//                       {service.title}
//                     </motion.h3>
//                     <motion.p
//                       className={`text-sm md:text-base leading-relaxed transition-colors duration-600 ${
//                         hoveredIndex === index
//                           ? "text-gray-100"
//                           : "text-gray-600"
//                       }`}
//                     >
//                       {service.description}
//                     </motion.p>
//                   </div>
//                 </div>

//                 {/* Decorative Border */}
//                 <motion.div
//                   className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 origin-left"
//                   initial={{ scaleX: 0 }}
//                   animate={{
//                     scaleX: hoveredIndex === index ? 1 : 0,
//                   }}
//                   transition={{
//                     duration: 0.4,
//                     ease: "easeInOut",
//                   }}
//                 />
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
