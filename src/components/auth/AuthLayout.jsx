import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children, title, subtitle, showBackToHome = true }) => {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // GSAP animations for background elements
    const tl = gsap.timeline();
    
    // Animated gradient background
    tl.to(backgroundRef.current, {
      backgroundPosition: '200% 200%',
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'none'
    });

    // Floating particles animation
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      Array.from(particles).forEach((particle, index) => {
        gsap.to(particle, {
          y: '-=50',
          x: `${Math.sin(index) * 30}`,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2
        });
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  // Generate floating particles
  const generateParticles = () => {
    return Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`
        }}
      />
    ));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
        style={{
          backgroundSize: '400% 400%',
          backgroundPosition: '0% 0%'
        }}
      />
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {generateParticles()}
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 50, -100, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Navigation */}
      {showBackToHome && (
        <motion.nav
          className="absolute top-6 left-6 z-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <motion.div
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.div>
            <span className="font-medium">Back to Home</span>
          </Link>
        </motion.nav>
      )}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          ref={containerRef}
          className="w-full max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Glassmorphism Card */}
          <motion.div
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-xl -z-10" />
            
            {/* Header */}
            <motion.div
              className="text-center mb-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-3xl font-bold text-white mb-2">
                {title}
              </h1>
              {subtitle && (
                <p className="text-white/70 text-sm">
                  {subtitle}
                </p>
              )}
            </motion.div>

            {/* Form Content */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Decoration */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
    </div>
  );
};

export default AuthLayout;