import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg" style={{ backgroundColor: '#78350f' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold" style={{ color: '#fffbeb' }}>WellNest</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-lg" style={{ color: '#fffbeb' }}>Home</a>
            <a href="#about" className="text-lg" style={{ color: '#fffbeb' }}>About</a>
            <a href="#services" className="text-lg" style={{ color: '#fffbeb' }}>Services</a>
            <a href="#contact" className="text-lg" style={{ color: '#fffbeb' }}>Contact</a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-amber-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#home" className="block text-lg text-amber-900 py-2">Home</a>
          <a href="#about" className="block text-lg text-amber-900 py-2">About</a>
          <a href="#services" className="block text-lg text-amber-900 py-2">Services</a>
          <a href="#contact" className="block text-lg text-amber-900 py-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
