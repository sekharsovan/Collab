import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-40 transition-all duration-500 ${isMenuOpen ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold tracking-wider">COLLAB</div>
        <div className="hidden md:flex space-x-8">
          <a href="#vision" className="hover:font-bold transition-all duration-300 cursor-pointer">Vision</a>
          <a href="#how-it-works" className="hover:font-bold transition-all duration-300 cursor-pointer">Process</a>
          <a href="#influencers" className="hover:font-bold transition-all duration-300 cursor-pointer">Influencers</a>
          <a href="#impact" className="hover:font-bold transition-all duration-300 cursor-pointer">Impact</a>
          <a href="#contact" className="hover:font-bold transition-all duration-300 cursor-pointer">Contact</a>
        </div>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none cursor-pointer">
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>
      </div>
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-500 overflow-hidden ${isMenuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a href="#vision" className="hover:font-bold transition-all duration-300 cursor-pointer" onClick={toggleMenu}>Vision</a>
          <a href="#how-it-works" className="hover:font-bold transition-all duration-300 cursor-pointer" onClick={toggleMenu}>Process</a>
          <a href="#influencers" className="hover:font-bold transition-all duration-300 cursor-pointer" onClick={toggleMenu}>Influencers</a>
          <a href="#impact" className="hover:font-bold transition-all duration-300 cursor-pointer" onClick={toggleMenu}>Impact</a>
          <a href="#contact" className="hover:font-bold transition-all duration-300 cursor-pointer" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;