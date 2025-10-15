// ProductPage.jsx - Updated with theme colors and dynamic product loading
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Package,
  Shield,
  Zap,
  ArrowLeft,
} from "lucide-react";
import { productsData } from "./TubeLightData.js";

const TubeLightProductPage = ({ productId, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState("specifications");

  // Find the product based on productId
  const product = productsData.find((p) => p.id === productId);

  // Reset states when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setSelectedTab("specifications");
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
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

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{product.seo.title}</title>
      <meta name="description" content={product.seo.description} />
      <meta name="keywords" content={product.seo.keywords} />
      <meta property="og:title" content={product.seo.title} />
      <meta property="og:description" content={product.seo.description} />
      <meta property="og:image" content={product.images[0]} />
      <meta name="twitter:card" content="summary_large_image" />

      <motion.div
        className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-[#F0B100] mb-6 font-medium transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </motion.button>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-12">
              {/* Image Gallery Section */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                  <AnimatePresence initial={false} custom={currentImageIndex}>
                    <motion.img
                      key={currentImageIndex}
                      src={product.images[currentImageIndex]}
                      alt={`${product.name} - View ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                      custom={currentImageIndex}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 },
                      }}
                    />
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#F0B100] hover:text-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#F0B100] hover:text-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {product.images.map((_, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? "bg-[#F0B100] w-8"
                            : "bg-white/70"
                        }`}
                        whileHover={{ scale: 1.2 }}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-3 gap-3">
                  {product.images.map((img, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex
                          ? "border-[#F0B100] shadow-lg shadow-[#F0B100]/30"
                          : "border-gray-200 hover:border-[#FFC107]"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-contain bg-gray-50"
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Product Details Section */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div>
                  {/* Category Badge */}
                  <motion.span
                    className="inline-block bg-[#FFC107] text-black px-3 py-1 rounded-full text-sm font-semibold mb-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    {product.category}
                  </motion.span>

                  <motion.h1
                    className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {product.name}
                  </motion.h1>

                  {/* <motion.div
                    className="flex items-center gap-4 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? "fill-[#FFC107] text-[#FFC107]"
                              : "fill-gray-300 text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">
                      ({product.rating}/5.0)
                    </span>
                  </motion.div> */}

                  <motion.div
                    className="flex items-baseline gap-3 mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    <span className="text-4xl font-bold text-[#F0B100]">
                      ₹ {product.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-gray-500">/Piece</span>
                  </motion.div>

                  <motion.div
                    className="inline-block bg-[#FFC107]/20 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium border border-[#FFC107]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Package className="inline w-4 h-4 mr-2" />
                    Minimum Order: {product.minOrder}
                  </motion.div>
                </div>

                {/* Trust Badges */}
                <motion.div
                  className="grid grid-cols-3 gap-3"
                  variants={containerVariants}
                >
                  {[
                    {
                      icon: Shield,
                      text: product.specifications.Warranty,
                      label: "Warranty",
                      color: "bg-green-50 text-green-700 border-green-200",
                    },
                    {
                      icon: Zap,
                      text: "Energy Efficient",
                      label: "Certified",
                      color: "bg-[#FFC107]/10 text-gray-800 border-[#FFC107]",
                    },
                    {
                      icon: Package,
                      text: "Made in India",
                      label: "Quality",
                      color: "bg-orange-50 text-orange-700 border-orange-200",
                    },
                  ].map((badge, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className={`${badge.color} p-3 rounded-lg text-center border`}
                      whileHover={{ y: -5 }}
                    >
                      <badge.icon className="w-6 h-6 mx-auto mb-1" />
                      <p className="text-xs font-bold">{badge.text}</p>
                      <p className="text-[10px] opacity-70">{badge.label}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3"
                  variants={containerVariants}
                >
                  <motion.button
                    className="flex-1 bg-gradient-to-r from-[#F0B100] to-[#FFC107] cursor-pointer text-black py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => (window.location.href = "tel:+917427051223")}
                  >
                    Contact Us
                  </motion.button>
                  <motion.button
                    className="flex-1 border-2 border-[#F0B100] text-[#F0B100] py-4 rounded-xl cursor-pointer font-bold text-lg hover:bg-[#F0B100]/10 transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => (window.location.href = "tel:+917427051223")}
                  >
                    Get Best Quote
                  </motion.button>
                </motion.div>

                {/* Key Features */}
                <motion.div
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                  variants={itemVariants}
                >
                  <h3 className="font-bold text-lg mb-4 text-gray-900">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 bg-[#F0B100] rounded-full mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            {/* Tabs Section */}
            <motion.div
              className="border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex border-b border-gray-200 overflow-x-auto">
                {["specifications", "additional"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-8 py-4 font-medium text-sm sm:text-base whitespace-nowrap transition-all ${
                      selectedTab === tab
                        ? "border-b-2 border-[#F0B100] text-[#F0B100]"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab === "specifications"
                      ? "Specifications"
                      : "Additional Information"}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 lg:p-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(
                      selectedTab === "specifications"
                        ? product.specifications
                        : product.additionalInfo
                    ).map(([key, value], idx) => (
                      <motion.div
                        key={key}
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-[#FFC107]/10 hover:border-[#FFC107] border border-transparent transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="font-medium text-gray-700">{key}</span>
                        <span className="text-gray-900 font-bold">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TubeLightProductPage;
