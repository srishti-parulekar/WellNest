import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg sticky top-0 z-50 bg-[#78350f]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold text-[#fffbeb]">WellNest</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-lg text-[#fffbeb]">Home</a>
            <a href="#about" className="text-lg text-[#fffbeb]">About</a>
            <a href="#services" className="text-lg text-[#fffbeb]">Services</a>
            <a href="#contact" className="text-lg text-[#fffbeb]">Contact</a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#fffbeb] focus:outline-none"
            >
                <MenuIcon/>
            </button>
          </div>
        </div>

        <div className={`text-center mb-10 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#home" className="block text-lg text-[#fffbeb] py-2">Home</a>
          <a href="#about" className="block text-lg text-[#fffbeb] py-2">About</a>
          <a href="#services" className="block text-lg text-[#fffbeb] py-2">Services</a>
          <a href="#contact" className="block text-lg text-[#fffbeb] py-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
