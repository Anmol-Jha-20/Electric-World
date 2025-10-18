import React from "react";
import { motion } from "framer-motion";
import AboutHeroSection from "../components/AboutHeroSection/AboutHeroSection.jsx";
import AboutUs from "../components/AboutUs/AboutSection.jsx";
import ServicesSection from "../components/ServiceSection/ServiceSection.jsx";
import TestimonialsSection from "../components/testimonials/Testimonials.jsx";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      <AboutHeroSection title={"About Us"} />
      {/* <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#F0B100] to-[#FDC700] flex items-center justify-center">
                  <img
                    src="https://5.imimg.com/data5/NSDMERP/Board/2023/4/298653442/MZ/ET/AD/60856849/60856849-board-1680855481364-1000x1000.jpg"
                    alt="Jyoti Enterprises Building"
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6"
                whileInView={{ opacity: [0, 1], x: [30, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Story
              </motion.h2>

              <motion.div
                className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed"
                variants={containerVariants}
              >
                <motion.p variants={itemVariants}>
                  Established in{" "}
                  <span className="font-bold text-[#F0B100]">2003</span>, Jyoti
                  Enterprises began its journey as a Proprietor firm in
                  Prakasam, Bhilwara, India. For over two decades, we have been
                  committed to providing exceptional LED lighting solutions to
                  our valued customers.
                </motion.p>

                <motion.p variants={itemVariants}>
                  As a leading{" "}
                  <span className="font-bold text-[#F0B100]">
                    Wholesaler Trader
                  </span>
                  , we specialize in a comprehensive range of high-quality LED
                  products including 50W Apra LED Flood Lights, 72W Surya LED
                  Street Lights, and 45W Surya LED Street Lights. Our products
                  are carefully selected to ensure superior performance and
                  longevity.
                </motion.p>

                <motion.p variants={itemVariants}>
                  Our success is built on the foundation of trust, quality, and
                  customer satisfaction. We take pride in being your reliable
                  partner for all lighting needs, delivering excellence with
                  every product we offer.
                </motion.p>
              </motion.div>

              <motion.div className="mt-8" variants={itemVariants}>
                <motion.button
                  className="px-8 py-4 bg-[#FDC700] text-black font-bold rounded-full text-lg shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#F0B100",
                    boxShadow: "0 20px 40px rgba(240, 177, 0, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Explore Our Products
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section> */}

      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Reverse order for large screens */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text content (left on large screens) */}
            <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6"
                whileInView={{ opacity: [0, 1], x: [30, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Story
              </motion.h2>

              <motion.div
                className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed"
                variants={containerVariants}
              >
                <motion.p variants={itemVariants}>
                  Established in{" "}
                  <span className="font-bold text-[#F0B100]">2003</span>, We
                  Jyoti Enterprises and Electric World began its journey as a
                  Proprietor firm in Prakasam, Bhilwara, India. For over two
                  decades, we have been committed to providing exceptional LED
                  lighting solutions to our valued customers.
                </motion.p>

                <motion.p variants={itemVariants}>
                  As a leading{" "}
                  <span className="font-bold text-[#F0B100]">
                    Wholesaler Trader
                  </span>
                  , we specialize in a comprehensive range of high-quality LED
                  products including 50W Apra LED Flood Lights, 72W Surya LED
                  Street Lights, and 45W Surya LED Street Lights. Our products
                  are carefully selected to ensure superior performance and
                  longevity.
                </motion.p>

                <motion.p variants={itemVariants}>
                  Our success is built on the foundation of trust, quality, and
                  customer satisfaction. We take pride in being your reliable
                  partner for all lighting needs, delivering excellence with
                  every product we offer.
                </motion.p>
              </motion.div>

              <motion.div className="mt-8" variants={itemVariants}>
                <motion.button
                  className="px-8 py-4 bg-[#FDC700] text-black cursor-pointer font-bold rounded-full text-lg shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#F0B100",
                    boxShadow: "0 20px 40px rgba(240, 177, 0, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => {
                    navigate("/gallery");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Explore Our Gallery
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Image (right on large screens) */}
            <motion.div variants={fadeInRight} className="order-1 lg:order-2">
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#F0B100] to-[#FDC700] flex items-center justify-center">
                  <img
                    src="https://5.imimg.com/data5/NSDMERP/Board/2023/4/298653442/MZ/ET/AD/60856849/60856849-board-1680855481364-1000x1000.jpg"
                    alt="Jyoti Enterprises Building"
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="overflow-x-hidden">
        <AboutUs />
      </div>
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
}

export default AboutPage;
