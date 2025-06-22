import React from 'react';
import './AboutSecond.css';
import './Moreabout.css';
import TabSelector from './TabSelector';
// import stock from '../assets/stock.mp4'; 
import GridContent from '../components/GridContent';

const Moreabout = () => {
  return (
    <div className="bg-black min-h-screen px-20 py-20">
      <hr className="border-t border-gray-700 mb-6 -mx-20" />
      <p className="text-sm text-gray-400 tracking-widest mt-20 mb-4">[ ASK ANYTHING ]</p>

      <h1 className="my-text text-7xl font-medium mb-4 text-white">
        Snapfix is the easiest place <br /> to automate work with AI
      </h1>

      <div className="mt-20">
        <TabSelector />
      </div>

      <div className="my-text text-3xl font-light mt-20  text-white ">
        <p>Classifies issues as public or business-related with high accuracy</p>
        <p>Instantly analyzes your location with smart algorithms to give accurate, relevant reports you can trust.</p>
      </div>

     


        <div>
          <GridContent />
        </div>

    </div>
  );
};

export default Moreabout;
