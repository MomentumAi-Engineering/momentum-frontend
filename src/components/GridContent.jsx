import React from "react";

const GrokGrid = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl aspect-square grid grid-cols-2 grid-rows-2 border border-gray-700 relative">

        {/* Vertical divider */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-gray-700"></div>

        {/* Horizontal divider */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gray-700"></div>

        {/* Top-left */}
        <div className="flex items-center justify-center p-6 text-white">
          <div>
            <h2 className="text-2xl font-bold">Find meaning with Grok Think</h2>
            <p className="text-sm text-gray-400 mt-2">
              Discover profound insights with Grok Think, connecting dots and revealing truths in complex ideas.
            </p>
            <button className="mt-4 border border-white/30 px-4 py-2 rounded-full text-sm hover:bg-white/10 transition">
              FIND ANSWERS →
            </button>
          </div>
        </div>

        {/* Top-right */}
        <div className="flex items-center justify-center p-6 text-white">
          <div className="bg-[#1e1e1e] p-4 rounded-lg max-w-sm">
            <p className="text-green-400 text-sm font-semibold mb-2">✔ Thought for 5 seconds</p>
            <p className="text-sm text-gray-300">
              The question "What is the meaning of life?" is deeply personal and varies depending on who’s asking and what they value.
            </p>
          </div>
        </div>

        {/* Bottom-left */}
        <div className="flex items-center justify-center p-6 text-white">
          <div>
            <h2 className="text-2xl font-bold">Talk with Grok Chat</h2>
            <p className="text-sm text-gray-400 mt-2">
              Engage in smart conversations with Grok Chat and get real-time intelligent responses tailored for you.
            </p>
            <button className="mt-4 border border-white/30 px-4 py-2 rounded-full text-sm hover:bg-white/10 transition">
              START CHATTING →
            </button>
          </div>
        </div>

        {/* Bottom-right */}
        <div className="flex items-center justify-center p-6 text-white">
          <div className="bg-[#1e1e1e] p-4 rounded-lg max-w-sm">
            <p className="text-green-400 text-sm font-semibold mb-2">✔ Instant Response</p>
            <p className="text-sm text-gray-300">
              Grok Chat delivers quick, helpful replies to help you solve problems and explore ideas in real time.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GrokGrid;
