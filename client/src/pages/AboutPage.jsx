import React from "react";
import AboutHeroSection from "../components/AboutHeroSection/AboutHeroSection.jsx";
import AboutUs from "../components/AboutUs/AboutSection.jsx";
import ServicesSection from "../components/ServiceSection/ServiceSection.jsx";
import TestimonialsSection from "../components/testimonials/Testimonials.jsx";

function AboutPage() {
  return (
    <>
      <AboutHeroSection title={"About Us"} />
      <div className="overflow-x-hidden">
        <AboutUs />
      </div>
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
}

export default AboutPage;
