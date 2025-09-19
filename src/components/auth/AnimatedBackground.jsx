import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const AnimatedBackground = ({ children }) => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    // Create floating particles
    const particles = [];
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-white/20 rounded-full pointer-events-none';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      containerRef.current?.appendChild(particle);
      particles.push(particle);
    }
    particlesRef.current = particles;

    // Animate particles
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: '-=100',
        x: `+=${Math.sin(index) * 50}`,
        rotation: 360,
        duration: 10 + Math.random() * 10,
        repeat: -1,
        ease: 'none',
        delay: Math.random() * 5
      });

      gsap.to(particle, {
        opacity: Math.random() * 0.8 + 0.2,
        scale: Math.random() * 1.5 + 0.5,
        duration: 2 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 2
      });
    });

    return () => {
      particles.forEach(particle => {
        particle.remove();
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
    >
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
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
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -60, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-3/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {children}
    </div>
  );
};

export default AnimatedBackground;