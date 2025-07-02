import React from 'react';

export default function BeautifulUIHero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">


      {/* Main content */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4 leading-tight tracking-tight">
          Build Beautiful UI.
        </h1>
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-16 leading-tight tracking-tight">
          Start Today.
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group relative px-6 py-3 text-white border border-gray-600 rounded-lg hover:border-gray-400 transition-all duration-300 flex items-center gap-2 bg-black/30 backdrop-blur-sm">
            <span>Connect with Us</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <button  onClick={() => (window.location.href = "/signup")} className="group relative px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium flex items-center gap-2 overflow-hidden">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>Start Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Access a fully-featured UI toolkit with multiple pre-built components and customizable themes. Start building beautiful interfaces in minutes.
        </p>
      </div>

      {/* Bottom white glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-96">
        {/* Main white glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-64">
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-white/10 to-transparent blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-white/5 to-transparent blur-2xl"></div>
        </div>
        
        {/* Secondary white glow layers */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-48">
          <div className="absolute inset-0 bg-gradient-to-t from-white/25 via-transparent to-transparent blur-xl"></div>
        </div>
        
        {/* Inner intense white glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-32">
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent blur-lg"></div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        /* No additional animations needed */
      `}</style>
    </div>
  );
}