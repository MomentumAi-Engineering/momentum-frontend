import React from "react";

const GrokGrid = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-6 p-4 border border-gray-700 relative">

        {/* Vertical divider (shown only on sm and above) */}
        <div className="hidden sm:block absolute inset-y-0 left-1/2 w-px bg-gray-700"></div>

        {/* Horizontal divider (shown only on sm and above) */}
        <div className="hidden sm:block absolute inset-x-0 top-1/2 h-px bg-gray-700"></div>

        {/* Top-left */}
       {/* Top-left (Main Product Pitch) */}
<div className="flex items-center justify-center p-6 text-white text-center sm:text-left">
  <div>
    <h2 className="text-2xl font-bold">SnapFix – Transform Visual Inputs into Smart Reports</h2>
    <p className="text-sm text-gray-400 mt-2">
      SnapFix by <span className="text-purple-400 font-semibold">MomntumAi</span> converts simple photos and brief descriptions into intelligent, structured reports on real-world infrastructure, safety, and environmental issues.
    </p>
    <p className="text-sm text-gray-400 mt-3">
      Designed to minimize user effort while maximizing clarity, SnapFix automatically routes each case to the right agency or contractor, ensuring timely, accurate resolutions. One snap. One line. Complete action.
    </p>
    <button className="mt-4 border border-white/30 px-4 py-2 rounded-full text-sm hover:bg-white/10 transition">
      EXPERIENCE SNAPFIX →
    </button>
  </div>
</div>

{/* Top-right (Fast Routing Feature) */}
<div className="flex items-center justify-center p-6 text-white">
  <div className="bg-[#1e1e1e] p-4 rounded-lg max-w-sm text-center sm:text-left">
    <p className="text-green-400 text-sm font-semibold mb-2">✔ Intelligent Routing</p>
    <p className="text-sm text-gray-300">
      SnapFix identifies the right authority or contractor for each issue — automating the handoff process and reducing delays to resolution.
    </p>
  </div>
</div>

{/* Bottom-left (Ease of Use) */}
<div className="flex items-center justify-center p-6 text-white text-center sm:text-left">
  <div>
    <h2 className="text-2xl font-bold">Zero Complexity, Maximum Clarity</h2>
    <p className="text-sm text-gray-400 mt-2">
      Submit a photo and a short note — SnapFix does the rest. No long forms, no guesswork. Just clean, actionable issue reports in seconds.
    </p>
    <button className="mt-4 border border-white/30 px-4 py-2 rounded-full text-sm hover:bg-white/10 transition">
      GET STARTED →
    </button>
  </div>
</div>

{/* Bottom-right (Impact Focus) */}
<div className="flex items-center justify-center p-6 text-white">
  <div className="bg-[#1e1e1e] p-4 rounded-lg max-w-sm text-center sm:text-left">
    <p className="text-green-400 text-sm font-semibold mb-2">✔ Real-World Impact</p>
    <p className="text-sm text-gray-300">
      From broken sidewalks to leaking pipes — SnapFix ensures community concerns are transformed into data-driven action plans with lasting effect.
    </p>
  </div>
</div>

        
      </div>
    </div>
  );
};

export default GrokGrid;
