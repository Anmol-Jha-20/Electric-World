import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Home,
  ChevronRight,
} from "lucide-react";
import AboutHeroSection from "../components/AboutHeroSection/AboutHeroSection";

const ContactPage = () => {
  const heroRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Service 1",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Service 1",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHeroSection title={"Contacts"} />

      {/* Header Contact Info Section */}
      <motion.section
        className="bg-white py-12 shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Section */}
            <motion.div
              className="text-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-yellow-500 hover:bg-gray-800 p-4 rounded-lg">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                MAIL US NOW
              </h3>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Email Address
              </h4>
              <div className="space-y-2">
                <p className="text-gray-600">
                  electricworldbijainagar@gmail.com
                </p>
                <p className="text-gray-600">jyotigulabpura@gmail.com</p>
              </div>
            </motion.div>

            {/* Phone Section */}
            <motion.div
              className="text-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="hover:bg-yellow-500 bg-gray-800 p-4 rounded-lg">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                CALL US ANYTIME
              </h3>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Phone Number
              </h4>
              <div className="space-y-2">
                <p className="text-gray-600">Phone No : + (91) 7427-051-223</p>
                <p className="text-gray-600">Phone No : + (91) 8769-965-694</p>
              </div>
            </motion.div>

            {/* Location Section */}
            <motion.div
              className="text-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-yellow-500 hover:bg-gray-800 p-4 rounded-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                OUR LOCATION
              </h3>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Our Location
              </h4>
              <div className="space-y-1">
                <p className="text-gray-600">
                  19, Ground Floor, Raj Brij Tower Narsingh Colony,
                </p>
                <p className="text-gray-600">Gulabpura Road Bijainagar,</p>
                <p className="text-gray-600">Dist. Ajmer (Raj.) – 305624</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Contact Section */}
      <motion.section
        className="py-16 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info & Map */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-yellow-500 mr-2" />
                  <span className="text-yellow-500 font-medium uppercase tracking-wide">
                    LET'S TALK
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Contact Us & Get In Here Touch !
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Established In 2003, Electric World is a leading Wholesaler
                  Trader of a wide range of 50W Apra LED Flood Light,72W Surya
                  LED Street Light,45W Surya LED Street Light etc
                </p>
              </div>

              {/* Google Map */}
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674286.0863895365!2d70.03440856933592!3d25.929642083279973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39693f8062eadd3d%3A0xc0b0cad5a634e33c!2sDr%20Lal%20PathLabs!5e0!3m2!1sen!2sin!4v1760444513855!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                  className="w-full h-96"
                ></iframe>

                {/* Map Info Overlay */}
                <div className="p-4 bg-white border-t">
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-500 p-2 rounded">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Our Office
                      </h4>
                      <p className="text-sm text-gray-600">
                        19, Ground Floor, Raj Brij Tower Narsingh Colony,
                        <br />
                        Gulabpura Road Bijainagar,
                        <br />
                        Dist. Ajmer (Raj.) – 305624
                      </p>
                      {/* <div className="flex items-center mt-2">
                        <span className="text-yellow-400">★★★★★</span>
                        <span className="text-sm text-gray-600 ml-2">
                          4.5 (1,92,793 reviews)
                        </span>
                      </div> */}
                      <a
                        href="https://www.google.co.in/maps/dir//25.349497,74.6574/@25.3494741,74.5749985,12z?entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        className="text-yellow-500 cursor-pointer text-sm hover:underline mt-1"
                      >
                        View larger map
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Send Your Message
                </h3>

                <div className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 bg-gray-50"
                    />
                  </motion.div>

                  {/* Email and Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 bg-gray-50"
                      />
                    </motion.div>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 bg-gray-50"
                      />
                    </motion.div>
                  </div>

                  {/* Service Dropdown */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 bg-gray-50 appearance-none"
                    >
                      <option value="Service 1">Flood Light</option>
                      <option value="Service 2">Ceiling Fan</option>
                      <option value="Service 3">Switch Board</option>
                      <option value="Service 4">LED Bulb</option>
                      <option value="Service 5">Street Light</option>
                      <option value="Service 6">COB Light</option>
                      <option value="Service 7">Tube Light</option>
                    </select>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      rows="6"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 bg-gray-50 resize-none"
                    ></textarea>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full md:w-auto px-8 py-4 bg-yellow-400 cursor-pointer text-white font-bold text-lg rounded-lg hover:bg-yellow-500 transition-all duration-300 ${
                      isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : "transform hover:scale-105"
                    }`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? "SENDING..." : "SUBMIT"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
