import React from 'react';
import { MessageCircle } from 'lucide-react';
import './AboutSecond.css';
import picOne from '../assets/pic-one.jpg';
import picTwo from '../assets/pic-two.jpg';
import picThree from '../assets/pic-three.jpg';

const AboutSecond = () => {
  const cardData = [
    {
      title: "Live Location Tracking",
      desc: "Our Advanced AI classifies issues as public or business-related with high accuracy. This ensures faster response times, better resource allocation, and enhanced operational efficiency.",
      img: picOne
    },
    {
      title: "AI Powered Analysis",
      desc: "Utilizes intelligent algorithms to instantly classify your location, ensuring accurate and context-aware reporting for enhanced decision-making.",
      img: picTwo
    },
    {
      title: "Automated Reports",
      desc: "Automatically generates detailed, human-like reports and delivers them directly to the appropriate authorities, ensuring quick and accurate communication.",
      img: picThree
    }
  ];

  return (
    <div id="services-section" className="bg-black min-h-screen px-6 sm:px-10 pt-24 text-white">
      {/* Header */}
      <p className="text-sm text-gray-400 tracking-widest mb-4">[ PRODUCTS ]</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-4">Snapfix for all humanity</h1>
      <h2 className="about-second text-lg sm:text-xl md:text-2xl font-light text-center text-gray-200 mb-12 mt-10 sm:mt-16">
        Powering the world’s best product teams.
        <br />
        From next-gen startups to established enterprises.
      </h2>

      {/* Stats */}
      <div className="bg-gradient-to-r from-[#1c1c1c] via-[#2a2a2a] to-[#0f0f0f] py-8 px-6 rounded-lg flex flex-col sm:flex-row justify-around items-center text-center mb-16 gap-8 sm:gap-0">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-1">10k+</h2>
          <span className="text-gray-400 text-sm">Issues Reported</span>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-1">95%</h2>
          <span className="text-gray-400 text-sm">Accuracy Rate</span>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-1">24h</h2>
          <span className="text-gray-400 text-sm">Average Response Time</span>
        </div>
      </div>

      {/* Cards */}
      <div className="flex justify-center items-stretch gap-6 flex-wrap">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[300px] md:w-[320px] min-h-[540px] rounded-xl bg-black border border-white/10 hover:bg-gradient-to-b hover:from-[#111] hover:to-[#000] transition duration-300 shadow-md p-6 flex flex-col justify-between group"
          >
            {/* Four corner dots */}
            <span className="absolute top-0 left-0 w-2 h-2 bg-white opacity-0 group-hover:opacity-100 transition duration-300" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-white opacity-0 group-hover:opacity-100 transition duration-300" />
            <span className="absolute bottom-0 left-0 w-2 h-2 bg-white opacity-0 group-hover:opacity-100 transition duration-300" />
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-white opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* Icon + Text */}
            <div>
              <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center mb-4">
                <MessageCircle className="text-white w-5 h-5" />
              </div>

              <h2 className="text-white text-lg sm:text-xl font-semibold mb-3">{card.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </div>

            {/* Image */}
            <img
              src={card.img}
              alt="feature"
              className="w-full max-w-[220px] h-[150px] object-cover rounded-md mx-auto mt-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSecond;
