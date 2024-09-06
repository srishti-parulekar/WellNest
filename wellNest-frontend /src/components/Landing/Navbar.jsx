import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg sticky top-0 z-50 bg-[#78350f]">
      <div className="mx-auto px-10">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold text-[#fffbeb]">WellNest</div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="text-lg text-[#fffbeb]">
              Home
            </a>
            <a href="#about" className="text-lg text-[#fffbeb]">
              About
            </a>
            <a href="#services" className="text-lg text-[#fffbeb]">
              Services
            </a>
            <a href="#contact" className="text-lg text-[#fffbeb]">
              Contact
            </a>

            <div className="border-l-2 border-[#fffbeb] h-6 mx-4"></div>

            <button
              onClick={() => navigate("/auth/signin")} // Use navigate for routing
              className="text-amber-900 px-6 py-3 bg-[#fffbeb] rounded-lg border border-amber-900 hover:bg-[#fef7e8] transition duration-5000"
            >
              Login
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#fffbeb] focus:outline-none"
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        <div
          className={`text-center mb-7 md:hidden ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a href="#home" className="block text-lg text-[#fffbeb] py-2">
            Home
          </a>
          <a href="#about" className="block text-lg text-[#fffbeb] py-2">
            About
          </a>
          <a href="#services" className="block text-lg text-[#fffbeb] py-2">
            Services
          </a>
          <a href="#contact" className="block text-lg text-[#fffbeb] py-2">
            Contact
          </a>

          <div className="border-t-2 border-[#fffbeb] my-4"></div>

          <button
            onClick={() => navigate("/auth/login")} 
            className="bg-[#fffbeb] text-[#78350f] py-2 px-6 rounded-lg hover:bg-[#fef7e8] transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
