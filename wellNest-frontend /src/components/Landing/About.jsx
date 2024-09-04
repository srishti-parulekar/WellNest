import React from "react";
import aboutImage from "../../assets/about.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="text-center bg-[#fffbeb]">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#78350f] mb-4">
            About WellNest
          </h2>
          <p className="text-lg text-gray-700 lg:pr-8">
            WellNest is dedicated to providing a safe and supportive environment
            for individuals seeking mental wellness. Our platform offers
            resources, community support, and expert guidance to help you
            navigate your mental health journey.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-6">
          <img 
            src={aboutImage} 
            alt="girl" 
            className="w-full max-w-xs lg:max-w-sm h-auto mx-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
