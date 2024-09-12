import React from "react";
import Navbar from "../../components/Landing/Navbar";
import HeroSection from "../../components/Landing/HeroSection";
import AboutSection from "../../components/Landing/About";
import ServicesSection from "../../components/Landing/ServicesSection";
import ContactSection from "../../components/Landing/ContactSection";
import Footer from "../../components/Landing/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
