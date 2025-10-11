// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   // Validation functions
//   const validatePhone = (phone) => {
//     const phoneRegex = /^[6-9]\d{9}$/;
//     return phoneRegex.test(phone);
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!validatePhone(formData.phone)) {
//       newErrors.phone = "Please enter a valid 10-digit phone number";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Replace with your actual API endpoint
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setSubmitSuccess(true);
//         setFormData({ name: "", phone: "", message: "" });
//         setTimeout(() => setSubmitSuccess(false), 5000);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setErrors({ submit: "Something went wrong. Please try again." });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="bg-yellow-400 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left Side - Heading and Illustration */}
//           <div className="order-2 lg:order-1 relative">
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-8">
//               Check the <br />
//               wiring in your <br />
//               home
//             </h1>

//             {/* Light Bulb Illustration */}
//             <div className="relative mt-12 lg:mt-16">
//               <svg
//                 className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0"
//                 viewBox="0 0 200 200"
//                 aria-label="Light bulb illustration"
//               >
//                 {/* Wire */}
//                 <path
//                   d="M 20 180 Q 50 160, 80 170 Q 110 180, 100 140"
//                   stroke="#2d2d2d"
//                   strokeWidth="3"
//                   fill="none"
//                   strokeLinecap="round"
//                 />

//                 {/* Bulb Base */}
//                 <rect x="90" y="140" width="20" height="15" fill="#9ca3af" />
//                 <rect x="88" y="155" width="24" height="3" fill="#6b7280" />
//                 <rect x="88" y="159" width="24" height="3" fill="#6b7280" />
//                 <rect x="88" y="163" width="24" height="3" fill="#6b7280" />

//                 {/* Bulb Glass */}
//                 <ellipse
//                   cx="100"
//                   cy="100"
//                   rx="35"
//                   ry="40"
//                   fill="rgba(255, 255, 255, 0.3)"
//                 />
//                 <ellipse
//                   cx="100"
//                   cy="100"
//                   rx="30"
//                   ry="35"
//                   fill="rgba(255, 255, 255, 0.5)"
//                 />

//                 {/* Filament */}
//                 <path
//                   d="M 95 110 Q 100 100, 105 110"
//                   stroke="#fbbf24"
//                   strokeWidth="2"
//                   fill="none"
//                 />
//                 <line
//                   x1="100"
//                   y1="95"
//                   x2="100"
//                   y2="120"
//                   stroke="#fbbf24"
//                   strokeWidth="2"
//                 />

//                 {/* Glow effect */}
//                 <ellipse
//                   cx="100"
//                   cy="100"
//                   rx="38"
//                   ry="43"
//                   fill="rgba(251, 191, 36, 0.2)"
//                 />
//               </svg>

//               {/* Decorative wire curl */}
//               <div className="absolute left-0 top-40 lg:top-48">
//                 <svg width="60" height="60" viewBox="0 0 60 60">
//                   <path
//                     d="M 10 30 Q 20 10, 40 30 Q 20 50, 10 30"
//                     stroke="#2d2d2d"
//                     strokeWidth="2.5"
//                     fill="none"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div className="order-1 lg:order-2 bg-white rounded-none lg:rounded-lg p-0 lg:p-1">
//             <div className="bg-yellow-400 p-6 sm:p-8 lg:p-10">
//               <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
//                 Get in touch
//               </h2>
//               <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
//                 Get a free consultation with an electrical engineer.
//               </p>

//               {submitSuccess && (
//                 <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
//                   Thank you! Your message has been sent successfully.
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
//                 {/* Name Input */}
//                 <div>
//                   <label htmlFor="name" className="sr-only">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Name"
//                     className={`w-full px-4 py-3 sm:py-4 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all ${
//                       errors.name ? "ring-2 ring-red-500" : ""
//                     }`}
//                     aria-required="true"
//                     aria-invalid={errors.name ? "true" : "false"}
//                     aria-describedby={errors.name ? "name-error" : undefined}
//                   />
//                   {errors.name && (
//                     <p
//                       id="name-error"
//                       className="mt-1 text-sm text-red-600"
//                       role="alert"
//                     >
//                       {errors.name}
//                     </p>
//                   )}
//                 </div>

//                 {/* Phone Input */}
//                 <div>
//                   <label htmlFor="phone" className="sr-only">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Phone"
//                     className={`w-full px-4 py-3 sm:py-4 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all ${
//                       errors.phone ? "ring-2 ring-red-500" : ""
//                     }`}
//                     aria-required="true"
//                     aria-invalid={errors.phone ? "true" : "false"}
//                     aria-describedby={errors.phone ? "phone-error" : undefined}
//                   />
//                   {errors.phone && (
//                     <p
//                       id="phone-error"
//                       className="mt-1 text-sm text-red-600"
//                       role="alert"
//                     >
//                       {errors.phone}
//                     </p>
//                   )}
//                 </div>

//                 {/* Message Textarea */}
//                 <div>
//                   <label htmlFor="message" className="sr-only">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Message"
//                     rows="5"
//                     className={`w-full px-4 py-3 sm:py-4 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all resize-none ${
//                       errors.message ? "ring-2 ring-red-500" : ""
//                     }`}
//                     aria-required="true"
//                     aria-invalid={errors.message ? "true" : "false"}
//                     aria-describedby={
//                       errors.message ? "message-error" : undefined
//                     }
//                   />
//                   {errors.message && (
//                     <p
//                       id="message-error"
//                       className="mt-1 text-sm text-red-600"
//                       role="alert"
//                     >
//                       {errors.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                   aria-label="Submit contact form"
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit"}
//                 </button>

//                 {errors.submit && (
//                   <p className="mt-2 text-sm text-red-600" role="alert">
//                     {errors.submit}
//                   </p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Decorative arrow at bottom right */}
//       <div className="fixed bottom-8 right-8 hidden lg:block">
//         <svg
//           width="40"
//           height="40"
//           viewBox="0 0 40 40"
//           className="text-gray-900"
//         >
//           <path
//             d="M20 5 L20 35 M20 35 L10 25 M20 35 L30 25"
//             stroke="currentColor"
//             strokeWidth="2"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation functions
  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", phone: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-yellow-400 min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Heading and Animated Bulb */}
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Check the <br />
              wiring in your <br />
              home
            </motion.h1>

            {/* Animated Light Bulb with Blinking Effect */}
            <div className="relative mt-12 lg:mt-16 flex justify-center lg:justify-start">
              <BlinkingBulb />

              {/* Decorative wire curl */}
              <motion.div
                className="absolute left-0 lg:left-8 top-48 lg:top-56"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.8, type: "spring" }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <path
                    d="M 10 30 Q 20 10, 40 30 Q 20 50, 10 30"
                    stroke="#2d2d2d"
                    strokeWidth="2.5"
                    fill="none"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="order-1 lg:order-2 bg-white rounded-none lg:rounded-lg p-0 lg:p-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="bg-yellow-400 p-6 sm:p-8 lg:p-10">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Get in touch
              </motion.h2>
              <motion.p
                className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Get a free consultation with an electrical engineer.
              </motion.p>

              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className={`w-full px-4 py-3 sm:py-4 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all ${
                      errors.name ? "ring-2 ring-red-500" : ""
                    }`}
                    aria-required="true"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        id="name-error"
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Phone Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className={`w-full px-4 py-3 sm:py-4 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all ${
                      errors.phone ? "ring-2 ring-red-500" : ""
                    }`}
                    aria-required="true"
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  <AnimatePresence>
                    {errors.phone && (
                      <motion.p
                        id="phone-error"
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="5"
                    className={`w-full px-4 py-3 sm:py-4 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all resize-none ${
                      errors.message ? "ring-2 ring-red-500" : ""
                    }`}
                    aria-required="true"
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        id="message-error"
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Submit contact form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </motion.button>

                <AnimatePresence>
                  {errors.submit && (
                    <motion.p
                      className="mt-2 text-sm text-red-600"
                      role="alert"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {errors.submit}
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative animated arrow at bottom right */}
      <motion.div
        className="fixed bottom-8 right-8 hidden lg:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="text-gray-900"
        >
          <path
            d="M20 5 L20 35 M20 35 L10 25 M20 35 L30 25"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
};

// Separate component for blinking bulb animation
const BlinkingBulb = () => {
  const [isBlinking, setIsBlinking] = useState(true);

  // Bulb blink animation variants
  const bulbVariants = {
    off: {
      opacity: 1,
      scale: 1,
    },
    on: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
      <AnimatePresence mode="wait">
        {isBlinking ? (
          <motion.div
            key="blinking"
            className="w-full h-full"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
            }}
          >
            {/* Use the actual images provided */}
            <motion.img
              src="https://wolt.like-themes.com/wp-content/uploads/2023/04/form_01-noblink.png"
              alt="Light bulb off"
              className="w-full h-full object-contain"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 1, 0, 0, 1] }}
              transition={{
                duration: 2.5,
                times: [0, 0.4, 0.5, 0.6, 1],
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            />
            <motion.img
              src="https://wolt.like-themes.com/wp-content/uploads/2023/04/form_01-blink.png"
              alt="Light bulb on"
              className="w-full h-full object-contain absolute top-0 left-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{
                duration: 2.5,
                times: [0, 0.4, 0.5, 0.6, 1],
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
