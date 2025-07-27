import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // triggers earlier
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
      isScrolled 
        ? 'bg-black/70 backdrop-blur-lg border border-white/10 shadow-xl mx-0 md:mx-[15%] mt-4 md:rounded-3xl'
        : 'bg-transparent'
    }`}>
      <div className={`transition-all duration-700 ease-out ${
        isScrolled 
          ? 'px-6 py-2' 
          : 'px-8 py-3'
      }`}>
        <div className="navbar-css flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
  <div className="relative">
    <div className="w-9 h-9 bg-gradient-to-br from-blue-300 via-blue-500 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
      <div className="w-3 h-3 bg-white rounded-full"></div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-80"></div>
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full opacity-80"></div>
    </div>
  </div>
  <span className="text-white font-semibold text-xl tracking-wide">MomntumAI</span>
</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-10">
              <a href="#product-section" className="text-white/90 hover:text-white transition-all duration-300 font-light text-base hover:scale-105 transform">Products</a>
              <a href="/team" className="text-white/90 hover:text-white transition-all duration-300 font-light text-base hover:scale-105 transform">Team</a>
              <a href="/contact" className="text-white/90 hover:text-white transition-all duration-300 font-light text-base hover:scale-105 transform">Contact</a>
            </div>
            <a href="/signup">
              <button className="bg-white text-black px-5 py-2 rounded-full font-medium text-base transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-xl transform">
                Sign in
              </button>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-black/70 backdrop-blur-lg">
          <div className="flex flex-col items-start space-y-4">
            <a href="#product-section" className="text-white/90 hover:text-white font-light text-base">Products</a>
            <a href="/team" className="text-white/90 hover:text-white font-light text-base">Team</a>
            <a href="/contact" className="text-white/90 hover:text-white font-light text-base">Contact</a>
            <a href="/signup">
              <button className="bg-white text-black px-5 py-2 rounded-full font-medium text-base transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-xl transform">
                Sign in
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
