import React from 'react';

const AboutSecond = () => {
  return (
    <div className="bg-black min-h-screen px-8 pt-24 text-white">
      {/* Left aligned header */}
      <p className="text-sm text-gray-400 tracking-widest mb-4">[ PRODUCTS ]</p>
      <h1 className="text-5xl font-light mb-4">Snapfix for all humanity</h1>

      {/* Centered subheading */}
      <h2 className="text-2xl font-light text-center text-gray-200 mb-12 mt-20">
        Powering the world’s best product teams.
        <br />
        From next-gen startups to established enterprises.
      </h2>

      {/* Stats Section */}
      <div className="bg-[#111111] py-10 px-6 rounded-lg flex justify-around items-center text-center">
        <div>
          <h2 className="text-4xl font-semibold text-white mb-1">10k+</h2>
          <span className="text-gray-400 text-sm">Issues Reported</span>
        </div>
        <div>
          <h2 className="text-4xl font-semibold text-white mb-1">95%</h2>
          <span className="text-gray-400 text-sm">Accuracy Rate</span>
        </div>
        <div>
          <h2 className="text-4xl font-semibold text-white mb-1">24h</h2>
          <span className="text-gray-400 text-sm">Average Response Time</span>
        </div>
      </div>

      {/* Cards */}
      <div className='bg-gray-700 h-20 w-20 rounded-2xl'>

      </div>

    </div>
  );
};

export default AboutSecond;
