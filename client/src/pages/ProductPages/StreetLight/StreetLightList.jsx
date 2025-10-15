// ProductList.jsx - Updated with theme colors
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductPage from "./StreetLightProductPage.jsx";
import { productsData } from "./StreetLightData.js";
import AboutHeroSection from "../../../components/AboutHeroSection/AboutHeroSection.jsx";

const StreetLightProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (selectedProduct) {
    return (
      <ProductPage
        productId={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <AboutHeroSection title={"Street Light"} />
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-6">
        {/* <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#F0B100]">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium range of LED lighting solutions designed for
            every application
          </p>
        </motion.div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product, idx) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProduct(product.id)}
            >
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                {/* <div className="absolute top-4 right-4 bg-[#FFC107] text-black px-3 py-1 rounded-full text-sm font-bold">
                  {product.model}
                </div> */}
              </div>
              <div className="p-6">
                <span className="text-sm text-[#F0B100] font-bold uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#F0B100] transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                {/* <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-[#FFC107]"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({product.rating})
                  </span>
                </div> */}

                <div className="flex items-baseline gap-2 mb-4">
                  <p className="text-3xl font-bold text-[#F0B100]">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                  <span className="text-gray-500 text-sm">/Piece</span>
                </div>

                <motion.button
                  className="mt-4 w-full bg-gradient-to-r from-[#F0B100] to-[#FFC107] cursor-pointer text-black py-3 rounded-lg font-bold shadow-md hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreetLightProductList;
