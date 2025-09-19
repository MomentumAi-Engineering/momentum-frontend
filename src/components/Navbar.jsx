import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";
import { User, LogOut } from "lucide-react";
import logo from "../assets/logo.png"; 
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

 const navLinks = [
  { name: "Product", type: "link", target: "/product" },
  { name: "Team", type: "link", target: "/team" },
  { name: "Contact", type: "link", target: "/contact" },
];


  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? "bg-black/70 backdrop-blur-lg border border-white/10 shadow-xl mx-0 md:mx-[10%] mt-4 md:rounded-3xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`transition-all duration-700 ease-out ${
          isScrolled ? "px-6 py-2" : "px-8 py-3"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <motion.img
              src={logo}
              alt="MomentumAI Logo"
              className="h-10 w-auto object-contain"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <span className="text-white font-extralight text-xl tracking-wide">
              MomntumAI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) =>
              link.type === "scroll" ? (
                <motion.button
                  key={index}
                  onClick={() => handleScrollTo(link.target)}
                  className="relative text-white/90 font-light text-base hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                  <motion.span
                    className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ) : (
                <motion.button
                  key={index}
                  onClick={() => navigate(link.target)}
                  className="relative text-white/90 font-light text-base hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                  <motion.span
                    className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              )
            )}
            {/* Authentication Section */}
            {currentUser ? (
              <div className="relative">
                <motion.button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
                    {currentUser.photoURL ? (
                      <img 
                        src={currentUser.photoURL} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <span className="font-medium">
                    {currentUser.displayName?.split(' ')[0] || 'User'}
                  </span>
                </motion.button>
                
                {/* User Dropdown */}
                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl py-2 z-50"
                    >
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <User className="w-4 h-4" />
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setShowUserMenu(false);
                        }}
                        className="flex items-center gap-2 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors w-full text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white/90 hover:text-white font-medium text-base transition-all duration-300"
                  >
                    Sign In
                  </motion.button>
                </Link>
                <Link to="/signup">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium text-base transition-all duration-300 hover:shadow-xl"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-4 bg-black/70 backdrop-blur-lg border-t border-white/10"
          >
            <div className="flex flex-col items-start space-y-4">
              {navLinks.map((link, index) =>
                link.type === "scroll" ? (
                  <button
                    key={index}
                    onClick={() => {
                      handleScrollTo(link.target);
                      setMenuOpen(false);
                    }}
                    className="text-white/90 hover:text-white font-light text-base transition-all duration-300"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={index}
                    to={link.target}
                    onClick={() => setMenuOpen(false)}
                    className="text-white/90 hover:text-white font-light text-base transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                )
              )}
              {/* Mobile Authentication */}
              {currentUser ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-white/90 hover:text-white font-light text-base transition-all duration-300"
                  >
                    <User className="w-4 h-4" />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-red-400 hover:text-red-300 font-light text-base transition-all duration-300"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="text-white/90 hover:text-white font-light text-base transition-all duration-300"
                  >
                    Sign In
                  </Link>
                  <Link to="/signup" className="w-full" onClick={() => setMenuOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium text-base transition-all duration-300 hover:shadow-xl w-full"
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
