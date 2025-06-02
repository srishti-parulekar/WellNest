import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); 

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#78350f]/95 backdrop-blur-md shadow-2xl border-b border-amber-200/20' 
        : 'bg-[#78350f] shadow-lg'
    }`}>
      <div className="mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center py-2">
          {/* Logo with enhanced styling */}
          <div className="relative group">
            <div className="text-3xl font-bold text-[#fffbeb] tracking-tight">
              WellNest
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-300 to-amber-500 group-hover:w-full transition-all duration-300"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-lg text-[#fffbeb] font-medium transition-all duration-300 hover:text-amber-200 group"
                >
                  {link.label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-300 to-amber-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>

            <div className="w-px h-8 bg-gradient-to-b from-transparent via-amber-200 to-transparent"></div>

            <button
              onClick={() => navigate("/auth/signin")}
              className="relative overflow-hidden text-amber-900 px-8 py-2 bg-[#fffbeb] rounded-xl font-semibold border-2 border-transparent hover:border-amber-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#fffbeb] focus:outline-none p-2 rounded-lg hover:bg-amber-900/20 transition-colors duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="transform transition-transform duration-300">
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-lg text-[#fffbeb] py-3 px-4 rounded-lg hover:bg-amber-900/20 transition-all duration-200 transform hover:translate-x-2"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent my-6"></div>

            <button
              onClick={() => {
                navigate("/auth/signin");
                setIsOpen(false);
              }}
              className="w-full bg-[#fffbeb] text-[#78350f] py-4 px-6 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden -z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;