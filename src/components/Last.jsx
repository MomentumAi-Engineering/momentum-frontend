// src/BitcoinUI.js
import React, { useState } from 'react';

const Last = () => {
  const [activeTab, setActiveTab] = useState('whyBitcoin');

  const renderThreePanels = (titlePrefix) => (
    <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
      
      {/* Left Section */}
      <div className="bg-gradient-to-br from-blue-900 via-gray-700 to-blue-500 p-6 rounded-lg shadow-lg flex-1 max-w-sm border border-gray-700">
        <h3 className="text-white text-xl font-semibold mb-4 ">{titlePrefix}</h3>
        <ul className="text-gray-300 text-lg space-y-3">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>One Photo, Easy Report: Just click a photo to report an issue—no forms or calls.
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> AI-Powered Detection: Auto-identifies problem type & exact location.
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Anonymous Reporting: Keeps user identity private.


          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Decentralized
          </li>
        </ul>
        <div className="mt-8 flex justify-center">
          {/* <img
            src="https://via.placeholder.com/150/000000/FFFFFF?text=Bitcoin+Coin"
            alt="Coin"
            className="w-32 h-32 object-contain"
          /> */}
        </div>
        <p className="text-gray-400 text-sm mt-8 text-center leading-relaxed">
          The greatest digital transformation of the 21st century is the transformation of capital, and <span className="text-yellow-400 font-bold">digital capital</span> is here.
        </p>
      </div>

      {/* Middle Section */}
      <div className="bg-gradient-to-br from-blue-900 via-gray-700 to-blue-500 p-6 rounded-lg shadow-lg flex-1 max-w-sm border border-gray-700">
        <h3 className="text-white text-xl font-semibold mb-4 text-center">Superior store of value in digital age</h3>
        <ul className="text-gray-300 text-lg space-y-3">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>One Photo, Easy Report: Just click a photo to report an issue—no forms or calls.
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> AI-Powered Detection: Auto-identifies problem type & exact location.
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Anonymous Reporting: Keeps user identity private.


          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Decentralized
          </li>
        </ul>
        {/* <div className="flex justify-center mt-8 mb-8">
          <img
            src="https://via.placeholder.com/180/000000/FFFFFF?text=Bitcoin+Center"
            alt="Center"
            className="w-48 h-48 object-contain"
          />
        </div> */}
        {/* <div className="bg-gray-700 p-4 rounded-md mt-4 text-center text-white text-sm">
          Bitcoin Crosses $100K for the First Time
        </div> */}
        {/* <div className="bg-gray-700 p-4 rounded-md mt-4 text-center text-white text-sm">
          Bitcoin ETFs Surpass Gold ETFs in AUM
        </div> */}
        <div className="flex justify-center space-x-4 mt-8">
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Bitcoin Card
          </button> */}
          {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md">
            Order
          </button> */}
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-gradient-to-br from-blue-900 via-gray-700 to-blue-500 p-6 rounded-lg shadow-lg flex-1 max-w-sm border border-gray-700">
        <h3 className="text-white text-xl font-semibold mb-4 text-center">Largest growing AI  Compnay</h3>
        {/* <div className="flex justify-center mb-4">
          <img
            src="https://via.placeholder.com/100/000000/FFFFFF?text=Asset+Class+Icons"
            alt="Assets"
            className="w-24 h-24 object-contain"
          />
        </div> */}
        <div className="bg-gray-700 p-3 rounded-md text-sm text-gray-300">
          <p className="text-white font-semibold mb-2">Market Cap</p>
          <div className="flex justify-between items-center py-1">
            <span>Gold</span>
            <span>$1.935 T</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span>Microsoft</span>
            <span>$1.935 T</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span>Amazon</span>
            <span>$1.935 T</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span>Alphabet</span>
            <span>$1.935 T</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span>Snapfix</span>
            <span className="text-yellow-400 font-bold">$1.93 T</span>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-4 text-center">
          <span className="text-yellow-400 font-bold">7th largest market cap</span>
        </p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'whyBitcoin':
        return renderThreePanels('Why Snapfix?');
      case 'whyGiftBitcoin':
        return renderThreePanels('Why Purchase Snapfix?');
      case 'whyUseBitcoinCard':
        return renderThreePanels('Why Use Snapfix?');
      default:
        return null;
    }
  };

  const tabClass = (tabName) =>
    `py-3 px-6 cursor-pointer transition-all duration-300 ease-in-out whitespace-nowrap ${
      activeTab === tabName
        ? 'text-white text-4xl font-bold'
        : 'text-gray-500 text-xl'
    }`;

  return (
    <div className="min-h-screen bg-black p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center items-center mb-12 mt-20 space-x-4">
          
          <div className={tabClass('whyBitcoin')} onClick={() => setActiveTab('whyBitcoin')}>
            Why Snapfix?
          </div>
          <span className="h-0.5 w-16 bg-gray-700"></span>
          <div className={tabClass('whyGiftBitcoin')} onClick={() => setActiveTab('whyGiftBitcoin')}>
            Why Purchase Snapfix?
          </div>
          <span className="h-0.5 w-16 bg-gray-700"></span>
          <div className={tabClass('whyUseBitcoinCard')} onClick={() => setActiveTab('whyUseBitcoinCard')}>
            Why Use Snapfix?
          </div>
        </div>

        {/* Tab Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Last;
