import React from 'react';

const GraphSection = () => {
  return (
    <div className="bg-black min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="flex-1 text-white max-w-2xl">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
            The <span className="text-white">Snapfix</span> revolutionizes business automation.
          </h1>

          <div className="mt-8 space-y-6 text-gray-300 text-lg">
            <p>
              We don't just build AI. <span className="text-purple-500 font-semibold">We create an ecosystem</span> — where intelligent
              systems work together, replacing inefficiency with automation.
            </p>
            <p>
              It's more than just AI—it's a powerhouse of automation, decision-making, and optimization designed to help
              businesses scale effortlessly.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-purple-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </span>
                <h3 className="text-purple-500 font-semibold text-xl">Autonomous</h3>
              </div>
              <p className="text-gray-400 text-sm">
                AI that thinks and acts so your business runs on autopilot.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-purple-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </span>
                <h3 className="text-purple-500 font-semibold text-xl">Scalable</h3>
              </div>
              <p className="text-gray-400 text-sm">
                From startups to enterprises, our AI adapts & grows with you.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Chart */}
        <div className="flex-shrink-0">
          <div className="bg-[#0f172a] p-8 rounded-2xl border border-[#1e293b] w-[340px] sm:w-[400px] shadow-lg">
            <h2 className="text-white text-lg font-medium mb-6">
              Scaling Potential into Performance
            </h2>

            <div className="relative h-48 w-full">
              {/* Grid lines */}
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute w-full border-t border-gray-700"
                    style={{ top: `${i * 25}%` }}
                  />
                ))}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={`v-${i}`}
                    className="absolute h-full border-l border-gray-700"
                    style={{ left: `${i * 25}%` }}
                  />
                ))}
              </div>

              {/* Curve */}
              <div className="absolute inset-0">
                <svg width="100%" height="100%" viewBox="0 0 350 192">
                  <path
                    d="M 25 160 Q 90 145 160 120 Q 230 95 280 70 Q 320 55 325 45"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    className="drop-shadow"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphSection;
