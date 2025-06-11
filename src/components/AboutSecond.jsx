import React from 'react';
import Companies from './Companies';
import './Home.css';
import './AboutSecond.css'; 
import picOne from '../assets/pic-one.jpg';
import picTwo from '../assets/pic-two.jpg';
import picThree from '../assets/pic-three.jpg';


const AboutSecond = () => {
  return (
    <div className="bg-black min-h-screen px-8 pt-24 text-white ">
      {/* Left aligned header */}
      <p className="text-sm text-gray-400 tracking-widest mb-4">[ PRODUCTS ]</p>
      <h1 className=" text-6xl font-medium mb-4 ">Snapfix for all humanity</h1>

      {/* Centered subheading */}
      <h2 className="about-second text-2xl font-light text-center text-gray-200 mb-12 mt-20">
        Powering the world’s best product teams.
        <br />
        From next-gen startups to established enterprises.
      </h2>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#1c1c1c] via-[#2a2a2a] to-[#0f0f0f] py-10 px-6 rounded-lg flex justify-around items-center text-center">
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

       <div className="home-small flex justify-center items-center space-x-8 ">
  <div className="bg-[#000000] h-120 w-90 mt-30 border-l border-r border-white border-l-[0.2px] border-r-[0.2px] hover:bg-[#141414] pointer-cursor">
    <h2 className="font-semibold text-1.5xl text-left pl-10 pt-7">Live Location Tracking</h2>
    <p className='p-5 text-gray-500'>Our Advanced AI Classifies issues as public or bussiness-related with high accuracy.
      This ensures faster response times, better resource allocation, and enhanced operational efficiency with high accuracy and reliability.
    </p>
    <img
      src={picOne} // Replace with your image URL
      alt="Issues Icon"
      className="mx-auto mb-3 w-60 h-60"
    />
  </div>

  <div className="bg-[#000000] h-120 w-90 mt-30 border-l border-r border-white border-l-[0.2px] border-r-[0.2px] hover:bg-[#141414] pointer-cursor">
    <h2 className="font-semibold text-1.5xl text-center text-left pl-10 pt-7">AI Powered Analysis</h2>
    <p className='p-5 text-gray-500'>Classifies your location instantly to ensure precise reporting.Utilizes intelligent algorithms to instantly classify your location, ensuring accurate and context-aware reporting for enhanced decision-making.</p>
    <img
      src={picTwo} // Replace with your image URL
      alt="Issues Icon"
      className="mx-auto mb-3 w-70 h-60"
    />
  </div>

  <div className="bg-[#000000] h-120 w-90 mt-30 border-l border-r border-white border-l-[0.2px] border-r-[0.2px] hover:bg-[#141414] pointer-cursor">
    <h2 className="font-semibold text-1.5xl text-center text-left pl-10 pt-7">Automated Reports</h2>
    <p className='p-5 text-gray-500 text-1xl'>Receive detailed human-like reports sent directly to the right authorities. Automatically generates detailed, human-like reports and delivers them directly to the appropriate authorities, ensuring quick and accurate communication.
    </p>
    <img
      src={picThree} // Replace with your image URL
      alt="Issues Icon"
      className="mx-auto mb-3 w-70 h-60"
    />
    </div>

       </div>


        <div className='mt-35'>
       <Companies />
       </div>


    </div>
  );
};

export default AboutSecond;
