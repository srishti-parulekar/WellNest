import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="flex-grow flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-5xl font-bold mb-4">
        Your Safe Space for Mental Health
      </h1>
      <p className="text-xl mb-6">
        Join our community and start your journey towards mental wellness.
      </p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => navigate("/auth/register")}
          className="bg-amber-900 px-6 py-3 text-[#fffbeb] rounded-lg hover:bg-amber-800 transition delay-5000"
        >
          Get Started
        </button>
        <button className="text-amber-900 px-6 py-3 bg-[#fffbeb] rounded-lg border border-amber-900 hover:bg-[#fef7e8] transition duration-5000">
          <a href="#about">Learn More</a>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
