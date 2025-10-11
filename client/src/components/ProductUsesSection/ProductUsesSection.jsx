import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductUsesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Apartments",
      description:
        "We specialize in installing and maintaining solar-powered lighting systems, providing energy-efficient solutions for modern apartments.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    },
    {
      id: 2,
      title: "Private homes",
      description:
        "We specialize in installing and maintaining solar-powered lighting systems, providing sustainable energy solutions for residential properties.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    },
    {
      id: 3,
      title: "Offices",
      description:
        "We specialize in installing and maintaining solar-powered lighting systems, providing energy-efficient and eco-friendly office environments.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      id: 4,
      title: "Businesses",
      description:
        "We specialize in installing and maintaining solar-powered lighting systems, providing cost-effective solutions for commercial establishments.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      {/* SEO-friendly heading */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Applications
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover how our solar-powered lighting solutions transform different
          spaces
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="relative overflow-hidden h-[400px] sm:h-[450px] lg:h-[500px] group cursor-pointer"
            onMouseEnter={() => setHoveredCard(category.id)}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: category.id * 0.1 }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={category.image}
                alt={`${category.title} solar lighting solutions`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
              {/* Title - Always visible */}
              <motion.h3
                className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                {category.title}
              </motion.h3>

              {/* Description - Appears on hover */}
              <motion.div
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={
                  hoveredCard === category.id
                    ? { opacity: 1, height: "auto", marginBottom: 24 }
                    : { opacity: 0, height: 0, marginBottom: 0 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  {category.description}
                </p>
              </motion.div>

              {/* Read More Button */}
              <div className="relative inline-flex">
                <button
                  className="relative z-10 px-6 py-3 text-black font-semibold text-sm sm:text-base flex items-center gap-2 overflow-hidden"
                  aria-label={`Read more about ${category.title}`}
                >
                  {/* Button Background - Animated fill effect */}
                  <motion.span
                    className="absolute inset-0 bg-yellow-400"
                    initial={{ scaleX: 0 }}
                    animate={
                      hoveredCard === category.id
                        ? { scaleX: 1 }
                        : { scaleX: 0 }
                    }
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Static Yellow Background for non-hover state */}
                  {hoveredCard !== category.id && (
                    <span className="absolute inset-0 bg-yellow-400" />
                  )}

                  {/* Button Text */}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-2xl leading-none">+</span>
                    <span>Read More</span>
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Solar Lighting Product Uses",
            itemListElement: categories.map((cat, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: cat.title,
              description: cat.description,
            })),
          }),
        }}
      />
    </section>
  );
};

export default ProductUsesSection;
