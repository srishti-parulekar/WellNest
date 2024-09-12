import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('src/assets/background.jpg')" }} 
    >
      <section
        id="home"
        className="flex flex-col justify-center items-center text-center mt-1 pt-8 w-full h-full bg-black bg-opacity-40"
      >
        <h1 className="text-5xl font-bold mb-4 text-[#fffbeb]">
          Your Safe Space for Mental Health
        </h1>
        <p className="text-xl mb-6 text-[#fffbeb]">
          Join our community and start your journey towards mental wellness.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate("/auth/signup")}
            className="bg-amber-900 px-6 py-3 text-[#fffbeb] rounded-lg hover:bg-amber-800 transition delay-5000"
          >
            Get Started
          </button>
          <button className="text-amber-900 px-6 py-3 bg-[#fffbeb] rounded-lg border border-amber-900 hover:bg-[#fef7e8] transition duration-5000">
            <a href="#about">Learn More</a>
          </button>
        </div>
      </section>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-[#fffbeb]"></div>
    </div>
  );
};

export default HeroSection;
