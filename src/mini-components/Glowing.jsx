import React from "react";

const GlowingText = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Left beam (angled inward) */}
      <div 
        className="absolute bottom-0 left-0 h-[50vh] w-32 origin-bottom -rotate-15 transform bg-gradient-to-t from-white/10 via-white/30 to-transparent opacity-70 blur-xl"
      ></div>
      
      {/* Right beam (angled inward) */}
      <div 
        className="absolute bottom-0 right-0 h-[50vh] w-32 origin-bottom rotate-15 transform bg-gradient-to-t from-white/10 via-white/30 to-transparent opacity-70 blur-xl"
      ></div>
      
      {/* Center convergence (stronger light) */}
      <div 
        className="absolute bottom-0 left-1/2 h-[60vh] w-16 -translate-x-1/2 transform bg-gradient-to-t from-white/20 via-white/50 to-transparent opacity-90 blur-lg"
      ></div>
    </div>
  );
};


export default GlowingText;