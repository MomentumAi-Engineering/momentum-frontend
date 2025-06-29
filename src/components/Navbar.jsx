import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import MomentumLogo from "../assets/MomntumAi.png";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ["team", "pricing", "contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0f111580] border-b transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4">
        {/* Logo */}
        <a href="/" className="w-36 h-10 flex items-center">
          <img src={MomentumLogo} alt="Logo" className="h-full object-contain" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`/${item}`}
              className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-1 rounded-md transition text-sm font-medium"
            >
              {item.toUpperCase()}
            </a>
          ))}
          <a
            href="/signin"
            className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-300 transition"
          >
            Sign in
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f1115] border-t border-white/10 px-6 py-4 space-y-4">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`/${item}`}
              className="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item.toUpperCase()}
            </a>
          ))}
          <a
            href="/signin"
            className="block bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Sign in
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
