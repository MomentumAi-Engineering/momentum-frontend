// src/BitcoinUI.js
import React, { useState } from 'react';

const Last = () => {
  const [activeTab, setActiveTab] = useState('whyBitcoin');

  const renderThreePanels = () => {
  switch (activeTab) {
    case 'whyBitcoin':
      return (
        <div className="flex justify-center">
          {/* Left Card */}
          <div className="bg-gradient-to-br from-blue-900 via-gray-700 to-blue-500 p-6 rounded-lg shadow-lg max-w-md border border-gray-700">
            <h3 className="text-white text-xl font-semibold mb-4">Why Snapfix?</h3>
            <ul className="text-gray-300 text-lg space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>One Photo, Easy Report: Just click a photo to report an issue—no forms or calls.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>AI-Powered Detection: Auto-identifies problem type & exact location.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Anonymous Reporting: Keeps user identity private.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Decentralized
              </li>
            </ul>
            <p className="text-gray-400 text-sm mt-8 text-center leading-relaxed">
              The greatest digital transformation of the 21st century is the transformation of capital, and <span className="text-yellow-400 font-bold">digital capital</span> is here.
            </p>
          </div>
        </div>
      );

    case 'whyGiftBitcoin':
      return (
        <div className="flex justify-center">
          {/* Middle Card */}
          <div className="bg-gradient-to-br from-blue-900 via-gray-700 to-blue-500 p-6 rounded-lg shadow-lg max-w-md border border-gray-700">
            <h3 className="text-white text-xl font-semibold mb-4 text-center">Superior store of value in digital age</h3>
            <ul className="text-gray-300 text-lg space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>One Photo, Easy Report: Just click a photo to report an issue—no forms or calls.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>AI-Powered Detection: Auto-identifies problem type & exact location.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Anonymous Reporting: Keeps user identity private.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Decentralized
              </li>
            </ul>
          </div>
        </div>
      );

    case 'whyUseBitcoinCard':
      return (
        <div className="flex justify-center">
          {/* Right Card */}
          <div className="bg-gradient-to-br from-blue-900 via-gray-700 to-blue-500 p-6 rounded-lg shadow-lg max-w-md border border-gray-700">
            <h3 className="text-white text-xl font-semibold mb-4 text-center">Largest growing AI Company</h3>
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

    default:
      return null;
  }
};


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
