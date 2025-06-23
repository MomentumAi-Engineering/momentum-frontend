const GeometricWaves = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
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
                rgba(138, 43, 226, 0.8), 
                rgba(75, 0, 130, 0.8), 
                transparent)`,
              animation: `wave-${i} ${6 + i}s infinite ease-in-out`,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        ${[...Array(5)].map((_, i) => `
          @keyframes wave-${i} {
            0%, 100% { transform: rotate(${i * 15}deg) translateY(0px); }
            50% { transform: rotate(${i * 15 + 10}deg) translateY(-50px); }
          }
        `).join('')}
      `}</style>
    </div>
  );
};

export default GeometricWaves;