import React from 'react';
import './AboutSecond.css';
import './Moreabout.css';
import TabSelector from './TabSelector';
import GridContent from '../components/GridContent';

const Moreabout = () => {
  return (
    <div className="bg-black min-h-screen px-4 sm:px-10 lg:px-20 py-10 lg:py-20">
      <hr className="border-t border-gray-700 mb-6 -mx-4 sm:-mx-10 lg:-mx-20" />

      {/* Section Label */}
      <p className="text-xs sm:text-sm text-gray-400 tracking-widest mt-10 sm:mt-20 mb-4">
        [ ASK ANYTHING ]
      </p>

      {/* Main Heading */}
      <h1 className="my-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-4 text-white">
        Eaiser is the easiest place <br className="hidden sm:block" /> to automate work with AI
      </h1>

      {/* Tab Selector */}
      <div className="mt-12 sm:mt-20">
        <TabSelector />
      </div>

      {/* Supporting Text */}
      <div className="my-text text-xl sm:text-2xl lg:text-3xl font-light mt-16 sm:mt-20 text-white space-y-4">
        <p>Classifies issues as public or business-related with high accuracy</p>
        <p>
          Instantly analyzes your location with smart algorithms to give accurate, relevant
          reports you can trust.
        </p>
      </div>

      {/* Grid Content */}
      <div className="mt-16 sm:mt-20">
        <GridContent />
      </div>
    </div>
  );
};

export default Moreabout;
