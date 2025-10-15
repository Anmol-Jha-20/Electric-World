import React from "react";
import Header from "../components/Header/Header.jsx";
import HeroSlider from "../components/Hero/Hero.jsx";
import AboutUs from "../components/AboutUs/AboutSection.jsx";
import ServicesSection from "../components/ServiceSection/ServiceSection.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ProductUsesSection from "../components/ProductUsesSection/ProductUsesSection.jsx";
import TestimonialsSection from "../components/testimonials/Testimonials.jsx";
import ContactForm from "../components/ContactFormSection/ContactFormSection.jsx";
import FAQSection from "../components/FaqSection/FaqSection.jsx";

function HomePage() {
  return (
    <>
      {/* <Header /> */}

      <HeroSlider />
      <div className="overflow-x-hidden">
        <AboutUs />
      </div>
      <ServicesSection />
      <FAQSection />
      <ProductUsesSection />
      <TestimonialsSection />
      <ContactForm />
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
