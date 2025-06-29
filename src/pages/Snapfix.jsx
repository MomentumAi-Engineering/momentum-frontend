import React, { useState, useEffect } from 'react';

const Snapfix = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const tiltStyle = {
    transform: `rotateX(${(mousePosition.y - 50) / 10}deg) rotateY(${(mousePosition.x - 50) / 10}deg)`,
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden relative">
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Logo/Title */}
          <div className="mb-12">
            <h1 className="text-6xl lg:text-8xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              SNAPFIX
            </h1>
            <div className="w-32 h-1 bg-white mx-auto rounded-full" />
          </div>

          {/* Premium Card with Tilt Effect */}
          <div className="relative group" style={tiltStyle}>
            {/* Spinning Conic Border */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-80 animate-spin"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, white, transparent)',
                  animationDuration: '3s',
                }}
              />
              <div className="absolute inset-1 bg-black rounded-3xl" />
            </div>

            {/* Main Card */}
            <div className="relative bg-black backdrop-blur-xl border border-gray-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center px-6 py-3 mb-8 bg-gray-900 border border-gray-700 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                  <span className="text-sm font-semibold text-white uppercase tracking-wider">
                    In Development
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  Product Under Launch
                  <br />
                  <span className="text-gray-400">Very Soon</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Something revolutionary is coming. Get ready to experience the future of digital solutions.
                </p>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Development Progress</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div className="bg-white h-2 rounded-full animate-pulse" style={{ width: '85%' }} />
                  </div>
                </div>

                {/* Email + CTA */}
                <div className="space-y-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    className="w-full px-4 py-3 rounded-2xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 outline-none"
                  />
                  <button
                    aria-label="Notify me when Snapfix launches"
                    className="group relative inline-flex items-center justify-center w-full px-8 py-4 bg-white text-black rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 hover:scale-105"
                  >
                    <span className="relative z-10">Notify Me When Ready</span>
                    <div className="absolute inset-0 bg-gray-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  <p className="text-sm text-gray-500">
                    Be the first to know when we launch.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Snapfix;
