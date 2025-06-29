import React from 'react';

const GeometricWaves = () => {
  const gradientColors = [
    'rgba(0, 153, 255, 0.8)',  // Light Blue
    'rgba(0, 102, 204, 0.8)'   // Deep Blue
  ];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Animated Layers */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full opacity-20"
            style={{
              height: '200px',
              top: `${i * 20}%`,
              background: `linear-gradient(45deg, 
                transparent, 
                ${gradientColors[0]}, 
                ${gradientColors[1]}, 
                transparent)`,
              animation: `wave-${i} ${6 + i}s infinite ease-in-out`,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}
      </div>

      {/* Inject keyframes for each wave */}
      <style jsx>{`
        ${[...Array(5)].map((_, i) => `
          @keyframes wave-${i} {
            0%, 100% {
              transform: rotate(${i * 15}deg) translateY(0px);
            }
            50% {
              transform: rotate(${i * 15 + 10}deg) translateY(-50px);
            }
          }
        `).join('')}
      `}</style>
    </div>
  );
};

export default GeometricWaves;
