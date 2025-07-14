import React from 'react';

const Chart = () => {
  return (
    <div className="bg-black rounded-lg p-8 w-full max-w-2xl mx-auto">
      <h2 className="text-white text-xl font-medium mb-8">
        Scaling Potential into Performance
      </h2>
      
      <div className="relative h-64 w-full">
        {/* Grid lines */}
        <div className="absolute inset-0">
          {/* Horizontal grid lines */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full border-t border-gray-700"
              style={{ top: `${i * 25}%` }}
            />
          ))}
          
          {/* Vertical grid lines */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full border-l border-gray-700"
              style={{ left: `${i * 25}%` }}
            />
          ))}
        </div>
        
        {/* Chart curve */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" viewBox="0 0 400 200" className="overflow-visible">
            <path
              d="M 20 160 Q 100 140 200 100 T 380 40"
              stroke="white"
              strokeWidth="2"
              fill="none"
              className="drop-shadow-sm"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Chart;