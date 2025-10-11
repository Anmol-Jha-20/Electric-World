import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1a1a1a] text-gray-300 overflow-hidden">
      {/* Decorative curved lines */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-2/3 md:w-1/2 h-full opacity-20"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400 0 Q350 250 400 500"
            stroke="#ffc107"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M300 100 Q250 300 300 500"
            stroke="#ffc107"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Scroll to top button */}
      {/* <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 bg-[#ffc107] text-black p-4 rounded-full hover:bg-yellow-500 transition-all duration-300 z-10 shadow-lg"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </button> */}

      {/* Yellow top border */}
      <div className="w-full h-1 bg-[#ffc107]"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Section - Brand and Description */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              {/* <div className="bg-[#ffc107] p-3 rounded">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Wolt
              </h2> */}
              <img
                src="Logo.png"
                className="w-24 h-auto sm:w-32 md:w-40 lg:w-48 object-contain"
                alt="Logo"
              />
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed max-w-md">
              Our team can assist with the installation and integration of home
              automation systems, allowing you to control your lighting and
              other electronic devices with ease, can provide backup generator
              installation and maintenance services.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ffc107] text-black p-3 rounded hover:bg-yellow-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ffc107] text-black p-3 rounded hover:bg-yellow-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ffc107] text-black p-3 rounded hover:bg-yellow-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Information */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-[#ffc107]">
              Contact Us
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-[#ffc107] mt-1">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-gray-400">
                    19, Ground Floor, Raj Brij Tower Narsingh Colony, Gulabpura
                    Road Bijainagar, Dist. Ajmer (Raj.) – 305624
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-[#ffc107] mt-1">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone:</h4>
                  <p className="text-gray-400">+91 7427 051 223</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-[#ffc107] mt-1">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email:</h4>
                  <p className="text-gray-400">
                    electricworldbijainagar@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm text-center md:text-left">
            Electric World © All Rights Reserved - 2025 - Designed by&nbsp;
            <a
              href="https://webvortexsolutions.com/"
              target="_blank"
              className="text-[#ffc107] hover:underline"
            >
              Webvortex Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
