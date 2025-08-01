import React from "react";
import { Outlet } from "react-router-dom";
import { 
  HeroSection,
  AboutSection,
  ServicesSection,
  FeaturesSection,
  TestimonialsSection,
  FAQSection,
  ContactSection 
} from "../components/main";

export const HomeLayout = () => {
  return (
    <div>
      {/* For the home page, show all sections */}
      <div>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </div>
      {/* For other routes, use the Outlet */}
      <Outlet />
    </div>
  );
};
