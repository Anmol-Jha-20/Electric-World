import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why to choose us?",
      answer:
        "With over two decades of experience, we operate as both Electric Work and Jyoti Enterprises, offering end-to-end electrical solutions and reliable LED lighting products. From customized electrical designs to supplying trusted brands like Apra and Surya, we are committed to quality, efficiency, and customer satisfaction.",
    },
    {
      question: "What types of products do you deal in?",
      answer:
        "Through Jyoti Enterprises, we supply a wide range of LED lighting products including 50W Apra LED Flood Lights, 72W and 45W Surya LED Street Lights, and other energy-efficient lighting solutions.",
    },
    {
      question: "Are you a contractor or supplier?",
      answer:
        "Both. Electric Work handles electrical design and contracting services, while Jyoti Enterprises focuses on wholesale trading of electrical and lighting products. Together, we offer end-to-end solutions.",
    },
    {
      question: "How long have you been in business?",
      answer:
        "We’ve been serving the industry since 2003, earning trust through reliable service, quality products, and customer satisfaction.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - FAQ Questions */}
          <div className="w-full">
            <div className="mb-8">
              <p className="text-yellow-500 text-sm font-semibold uppercase tracking-wider mb-2">
                EXPLORE FAQ'S
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Popular questions
                <br />
                about our company
              </h2>
            </div>

            {/* Accordion Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-lg font-medium text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-yellow-400 rounded transition-all duration-300">
                      {openIndex === index ? (
                        <svg
                          className="w-5 h-5 text-gray-900"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18 12H6"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-gray-900"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Answer Panel */}
                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-5 pr-12">
                      <p className="text-gray-600 text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* All Questions Button */}
            <div className="mt-8">
              <button
                className="inline-flex items-center px-6 py-3 bg-yellow-400 cursor-pointer text-gray-900 font-semibold rounded hover:bg-yellow-500 transition-colors duration-300"
                onClick={() => (window.location.href = "tel:+917427051223")}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Top Right Image */}
            <div className="sm:col-span-2 h-64 sm:h-80 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop"
                alt="Electrical outlet installation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="h-64 sm:h-80 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="https://wolt.like-themes.com/wp-content/uploads/2023/03/faq_01-720x1024.jpg"
                alt="Electrician working"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="h-64 sm:h-80 bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="https://wolt.like-themes.com/wp-content/uploads/2023/03/faq_03.jpg"
                alt="Lighting fixture"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Button */}
            {/* <div className="absolute bottom-4 right-4 sm:relative sm:bottom-0 sm:right-0 sm:col-span-2 sm:flex sm:justify-end">
              <button className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-all duration-300 hover:scale-110">
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
