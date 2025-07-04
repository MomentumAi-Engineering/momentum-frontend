import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Trigger when scrolled past 100vh
      setIsScrolled(scrollPosition > viewportHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
      isScrolled 
        ? 'bg-black/15 backdrop-blur-2xl border border-white/10 shadow-2xl mx-[15%] mt-4 rounded-3xl' 
        : 'bg-transparent'
    }`}>
      <div className={`transition-all duration-700 ease-out ${
        isScrolled 
          ? 'px-10 py-2' 
          : 'px-16 py-3'
      }`}>
        <div className="navbar-css flex items-center justify-between">
          {/* Logo - Left Side */}
          <div className="flex items-center space-x-3">
            {/* Orygin Logo Recreation */}
           <div className="relative">
  <div className="w-9 h-9 bg-gradient-to-br from-blue-300 via-blue-500 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
    <div className="w-3 h-3 bg-white rounded-full"></div>
    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-80"></div>
    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full opacity-80"></div>
  </div>
</div>

            <span className="text-white font-semibold text-xl tracking-wide">MomntumAI</span>
          </div>

          {/* Navigation Items - Right Side */}
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-10">
              <a href="#services-section" className="text-white/90 hover:text-white transition-all duration-300 font-medium text-lg hover:scale-105 transform">
                Services
              </a>
              <a href="/team" className="text-white/90 hover:text-white transition-all duration-300 font-medium text-lg hover:scale-105 transform">
                Team
              </a>
              <a href="/contact" className="text-white/90 hover:text-white transition-all duration-300 font-medium text-lg hover:scale-105 transform">
                Contact
              </a>
            </div>

            {/* Sign In Button */}
           <a href="/signup">
  <button className="bg-white text-black px-5 py-2 rounded-full font-medium text-base transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-xl transform">
    Sign in
  </button>
</a>

          </div>
        </div>
      </div>

      {/* Enhanced glassmorphism overlay for premium look */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-3xl pointer-events-none"></div>
      )}
    </nav>
  );
};

export default Navbar;