import React from 'react';

const Ending = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 py-20">
      <div
        className="w-full max-w-3xl px-6 py-16 rounded-[2.5rem] border border-[#1E1E1E] shadow-[0_0_60px_rgba(255,255,255,0.05)] text-center"
        style={{
          background: 'linear-gradient(145deg, rgba(12,12,12,0.95), rgba(18,18,18,0.95))',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <h2 className="text-white text-4xl font-bold mb-10">
          Chains We Support
        </h2>

        <button className="mt-4 px-6 py-3 rounded-full bg-[rgba(20,20,20,0.9)] border border-[#2a2a2a] text-white text-base font-medium shadow-[inset_0_0_12px_rgba(255,255,255,0.05)] hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition duration-300">
          Get Started &rarr;
        </button>
      </div>
    </div>
  );
};

export default Ending;
