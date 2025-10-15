import React, { useState } from "react";
import { motion } from "framer-motion";
import AboutHeroSection from "../components/AboutHeroSection/AboutHeroSection.jsx";
import { useNavigate } from "react-router-dom";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  // Product data array
  const products = [
    {
      id: 1,
      title: "200W Surya Flood Light",
      price: "₹ 7,300",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301915484/HB/JV/TK/60856849/200w-surya-flood-light-500x500.jpg",
    },
    {
      id: 2,
      title: "200W Surya Flood Light",
      price: "₹ 7,300",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301963721/FT/NY/VL/60856849/200w-surya-flood-light-500x500.jpg",
    },
    {
      id: 3,
      title: "150W Surya Flood Light",
      price: "₹ 5,192",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301874700/KZ/DA/FJ/60856849/surya-150-watt-light-500x500.jpg",
    },
    {
      id: 4,
      title: "50W Apra Kaixin LED Flood Light",
      price: "₹ 3,800",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301873776/PH/FC/NR/60856849/50w-apra-led-street-light-500x500.jpg",
    },
    {
      id: 5,
      title: "Havells Max Pro Flood Light",
      price: "₹ 5,310",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301914255/EC/QO/AY/60856849/havells-max-pro-flood-light-500x500.jpg",
    },
    {
      id: 6,
      title: "Havells Max Pro Flood Light",
      price: "₹ 5,310",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301914576/HF/EN/ET/60856849/havells-max-pro-flood-light-500x500.jpg",
    },
    {
      id: 7,
      title: "100W Philips Flood Light",
      price: "₹ 3,950",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301873553/GN/TD/AD/60856849/philips-100-w-flood-light-500x500.jpeg",
    },
    {
      id: 8,
      title: "100W Philips Flood Light",
      price: "₹ 5,310",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301873472/MC/BL/PO/60856849/philips-100-w-flood-light-500x500.jpeg",
    },
    {
      id: 9,
      title: "100W Philips Flood Light",
      price: "₹ 3,950",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301963584/LH/GU/TC/60856849/100w-philips-flood-light-500x500.jpg",
    },
    {
      id: 10,
      title: "Surya SL-45W LED Street Light",
      price: "₹ 1,680",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301922562/WB/NZ/UL/60856849/45w-surya-led-street-light-500x500.jpeg",
    },
    {
      id: 11,
      title: "Led Display Module",
      price: "Ask Price",
      unit: "",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/9/343376949/ID/PC/YI/60856849/led-module-500x500.jpg",
    },
    {
      id: 12,
      title: "60W Surya Pride Solar LED Street Light",
      price: "₹ 4,250",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301921614/LC/OM/SY/60856849/60w-surya-solar-led-street-light-500x500.jpeg",
    },
    {
      id: 13,
      title: "Surya SL-72W LED Street Light",
      price: "₹ 2,650",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301921980/NP/HS/ZT/60856849/72w-surya-led-street-light-500x500.jpeg",
    },
    {
      id: 14,
      title: "Surya SL-20W LED Street Light",
      price: "₹ 850",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301953919/IL/UI/XE/60856849/20w-surya-led-street-light-500x500.jpeg",
    },
    {
      id: 15,
      title: "Havells Reo Utsav Ceiling Fan",
      price: "₹ 1,680",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301987614/IL/ZC/IV/60856849/havells-reo-utsav-ceiling-fan-500x500.jpg",
    },
    {
      id: 16,
      title: "Orient Electric Gratia Ceiling Fan",
      price: "₹ 1,475",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301878798/VO/SM/EY/60856849/orient-fan-500x500.jpg",
    },
    {
      id: 17,
      title: "Motion Sensor Flood Light",
      price: "₹ 1,475",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301855927/JB/NU/AW/60856849/havells-12-watt-cob-light-500x500.jpg",
    },
    {
      id: 18,
      title: "Led Cob Chip",
      price: "Ask Price",
      unit: "",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/9/343377162/EL/MB/EF/60856849/led-chip-500x500.jpg",
    },
    {
      id: 19,
      title: "Led Cob Chip",
      price: "Ask Price",
      unit: "",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/9/343377164/QD/WY/YG/60856849/led-chip-500x500.jpg",
    },
    {
      id: 20,
      title: "Electrical Switch Board",
      price: "₹ 350",
      unit: "/ Piece",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/301920459/RR/CZ/TS/60856849/anchor-switch-board-accessories-3--500x500.jpeg",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      {/* <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Photos
          </motion.h1>
        </div>
      </header> */}
      <AboutHeroSection title={"Gallery"} />

      {/* Gallery Grid */}
      <main className="container mx-auto px-4 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div
                className="relative w-full h-64 bg-gray-100 cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-xl font-bold text-[#FFC107] mb-3">
                  {product.price} {product.unit}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 px-4 border-2 border-yellow-500 text-amber-500 font-semibold rounded-md cursor-pointer hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
                  onClick={() => (window.location.href = "tel:+917427051223")}
                >
                  Get Best Quote
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="bg-white p-4 mt-4 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-2xl font-bold text-blue-600">
                {selectedImage.price} / {selectedImage.unit}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PhotoGallery;
