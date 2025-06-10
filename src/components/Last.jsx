// src/BitcoinUI.js
import React, { useState } from 'react';

const Last = () => {
  const [activeTab, setActiveTab] = useState('whyBitcoin'); // State to manage active tab

  const renderContent = () => {
    switch (activeTab) {
      case 'whyBitcoin':
        return (
          <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Left Section: Secure & Tamper proof, Global accessibility, etc. */}
            <div className="bg-gradient-to-br from-blue-900 via-gray-700 to-blue-500  p-6 rounded-lg shadow-lg flex-1 max-w-sm border border-gray-700">
              <h3 className="text-white text-xl font-semibold mb-4 ">Why Bitcoin?</h3>
              <ul className="text-gray-300 text-lg space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Secure & Tamper proof
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Global accessibility
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Inflation resistance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Decentralized
                </li>
              </ul>
              <div className="mt-8 flex justify-center">
                <img
                  src="https://via.placeholder.com/150/000000/FFFFFF?text=Bitcoin+Coin" // Placeholder for Bitcoin image
                  alt="Bitcoin Coin"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm mt-8 text-center leading-relaxed">
                The greatest digital transformation of the 21st century is the transformation of capital, and <span className="text-yellow-400 font-bold">Bitcoin is the digital capital.</span>
              </p>
            </div>

            {/* Middle Section: Superior store of value */}
            <div className="bg-gradient-to-br from-blue-900 via-gray-700 to-blue-500 p-6 rounded-lg shadow-lg flex-1 max-w-sm border border-gray-700">
              <h3 className="text-white text-xl font-semibold mb-4 text-center">Superior store of value in digital age</h3>
              <div className="flex justify-center mt-8 mb-8">
                <img
                  src="https://via.placeholder.com/180/000000/FFFFFF?text=Bitcoin+Center" // Placeholder for central Bitcoin image
                  alt="Bitcoin Center"
                  className="w-48 h-48 object-contain"
                />
              </div>
              <div className="bg-gray-700 p-4 rounded-md mt-4 text-center text-white text-sm">
                Bitcoin Crosses $100K for the First Time
              </div>
              <div className="bg-gray-700 p-4 rounded-md mt-4 text-center text-white text-sm">
                Bitcoin ETFs Surpass Gold ETFs in AUM
              </div>
              <div className="flex justify-center space-x-4 mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                  Bitcoin Card
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md">
                  Order
                </button>
              </div>
            </div>

            {/* Right Section: Largest growing asset class, 7th largest market cap */}
            <div className="bg-gradient-to-br from-blue-900 via-gray-700 to-blue-500 p-6 rounded-lg shadow-lg flex-1 max-w-sm border border-gray-700">
              <h3 className="text-white text-xl font-semibold mb-4 text-center">Largest growing asset class</h3>
              <div className="flex justify-center mb-4">
                <img
                  src="https://via.placeholder.com/100/000000/FFFFFF?text=Asset+Class+Icons" // Placeholder for asset class icons
                  alt="Asset Class Icons"
                  className="w-24 h-24 object-contain"
                />
              </div>
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
                  <span>Bitcoin</span>
                  <span className="text-yellow-400 font-bold">$1.935 T</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4 text-center">
                <span className="text-yellow-400 font-bold">7th largest market cap</span>
              </p>
            </div>
          </div>
        );
      case 'whyGiftBitcoin':
        return (
          <div className="text-white p-8 bg-gradient-to-br from-blue-900 via-gray-700 to-blue-500 rounded-lg shadow-lg border border-gray-700 min-h-[400px] flex items-center justify-center">
            <p className="text-2xl">Content for "Why Gift Bitcoin?" tab goes here.</p>
          </div>
        );
      case 'whyUseBitcoinCard':
        return (
          <div className="text-white p-8 bg-gradient-to-br from-blue-900 via-gray-700 to-blue-500 rounded-lg shadow-lg border border-gray-700 min-h-[400px] flex items-center justify-center">
            <p className="text-2xl">Content for "Why Use Bitcoin Card?" tab goes here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const tabClass = (tabName) =>
    `py-3 px-6 cursor-pointer transition-all duration-300 ease-in-out whitespace-nowrap ${
      activeTab === tabName
        ? 'text-white text-4xl font-bold' // Larger text, bold, white for active
        : 'text-gray-500 text-xl' // Smaller text, gray for inactive
    }`;

  return (
    <div className="min-h-screen bg-black p-8 font-sans"> {/* Changed bg to black */}
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center items-center mb-12 space-x-4"> {/* Added space-x for spacing */}
          <div className={tabClass('whyBitcoin')} onClick={() => setActiveTab('whyBitcoin')}>
            Why Bitcoin?
          </div>

          {/* Separator Line */}
          <span className="h-0.5 w-16 bg-gray-700"></span> {/* Thin gray line */}

          <div className={tabClass('whyGiftBitcoin')} onClick={() => setActiveTab('whyGiftBitcoin')}>
            Why Gift Bitcoin?
          </div>

          {/* Separator Line */}
          <span className="h-0.5 w-16 bg-gray-700"></span> {/* Thin gray line */}

          <div className={tabClass('whyUseBitcoinCard')} onClick={() => setActiveTab('whyUseBitcoinCard')}>
            Why Use Bitcoin Card?
          </div>
        </div>

        {/* Tab Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Last;