import React from "react";

const AboutHeroSection = ({ title }) => {
  return (
    <section className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Placeholder for lantern background - replace with actual image */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://wolt.like-themes.com/wp-content/uploads/2023/04/header_inner_01.jpg')`,
            filter: "blur(1px)",
            transform: "scale(1.1)",
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-sm sm:text-base"
        >
          <a
            href="/"
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
          >
            Home
          </a>
          <span className="text-white/60">/</span>
          <span className="text-white/90">{title}</span>
        </nav>
      </div>

      {/* Decorative Lantern Elements */}
      <div className="absolute top-10 right-10 w-32 h-48 opacity-30">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-yellow-200/20 to-transparent blur-2xl" />
      </div>
      <div className="absolute bottom-20 left-20 w-40 h-56 opacity-25">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-amber-200/20 to-transparent blur-3xl" />
      </div>
      <div className="absolute top-1/2 right-1/4 w-36 h-52 opacity-20">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-orange-200/20 to-transparent blur-2xl" />
      </div>
    </section>
  );
};

export default AboutHeroSection;
