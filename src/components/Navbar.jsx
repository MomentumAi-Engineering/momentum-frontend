import React, { useEffect, useState } from "react";
import MomentumLogo from "../assets/MomntumAi.png";
import './Navbar.css'; // Assuming you have a CSS file for additional styles

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling Down
        setShowNavbar(false);
      } else {
        // Scrolling Up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0f111580] border-b  shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-6">
        <div className="w-120 h-12 overflow-hidden flex items-center">
          <img src={MomentumLogo} alt="Logo" className="h-full object-contain" />
        </div>

        <div className="navbar-css flex items-center space-x-8">
          <a
            href="/team"
            className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-1 rounded-md transition-all text-sm font-medium"
          >
            TEAM
          </a>
          <a
            href="/pricing"
            className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-1 rounded-md transition-all text-sm font-medium"
          >
            PRICING
          </a>
          <a
            href="/contact"
            className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-1 rounded-md transition-all text-sm font-medium"
          >
            CONTACT
          </a>

          <a
            href="/signin"
            className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-300 transition-all border border-transparent"
          >
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
