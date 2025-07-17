import React from 'react';

const Ending= () => {
 return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 py-20">
      <div className="relative bg-[#0a0a0a] rounded-[2rem] border border-[#1a1a1a] max-w-4xl w-full px-6 py-20 text-center overflow-hidden">

        

        {/* Main Content */}
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Start Resolving Issues</h2>
        <p className="text-gray-400 text-lg mb-8">
          The best patform u can get
        </p>

        <button    onClick={() => (window.location.href = "/signup")} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 flex items-center justify-center gap-2 mx-auto">
          
          Get Started
          <span className="text-white text-xl">↗</span>
        </button>
      </div>
    </div>
  );
};


export default Ending;
