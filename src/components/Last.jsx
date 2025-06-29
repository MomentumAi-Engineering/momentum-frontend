import React, { useState } from 'react';

const Last = () => {
  const [activeTab, setActiveTab] = useState('whyBitcoin');

  const renderThreePanels = () => {
    switch (activeTab) {
      case 'whyBitcoin':
        return (
          <div className="flex flex-wrap justify-center gap-10">
            <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 p-6 rounded-lg shadow-lg max-w-md border border-gray-700">
              <h3 className="text-white text-xl font-semibold mb-4">Why Snapfix?</h3>
              <ul className="text-gray-300 text-lg space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>One Photo, Easy Report
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>AI-Powered Detection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Anonymous Reporting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Decentralized
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-8 text-center">
                The greatest digital transformation of the 21st century is <br />
                <span className="text-yellow-400 font-bold">digital capital</span>.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 p-6 rounded-lg shadow-lg max-w-md border border-gray-700 flex justify-center items-center">
              <h3 className="text-white text-3xl font-bold">RAJ</h3>
            </div>
          </div>
        );

      case 'whyGiftBitcoin':
        return (
          <div className="flex flex-wrap justify-center gap-10">
            <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 p-6 rounded-lg shadow-lg max-w-md border border-gray-700">
              <h3 className="text-white text-xl font-semibold mb-4 text-center">
                Superior store of value in digital age
              </h3>
              <ul className="text-gray-300 text-lg space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>One Photo, Easy Report
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>AI-Powered Detection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Anonymous Reporting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Decentralized
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 p-6 rounded-lg shadow-lg max-w-md border border-gray-700 flex justify-center items-center">
              <h3 className="text-white text-3xl font-bold">RISAV</h3>
            </div>
          </div>
        );

      case 'whyUseBitcoinCard':
        return (
          <div className="flex flex-wrap justify-center gap-10">
            <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 p-6 rounded-lg shadow-lg max-w-md border border-gray-700">
              <h3 className="text-white text-xl font-semibold mb-4 text-center">Largest growing AI Company</h3>
              <div className="bg-gray-700 p-3 rounded-md text-sm text-gray-300">
                <p className="text-white font-semibold mb-2">Market Cap</p>
                <div className="flex justify-between py-1"><span>Gold</span><span>$1.935 T</span></div>
                <div className="flex justify-between py-1"><span>Microsoft</span><span>$1.935 T</span></div>
                <div className="flex justify-between py-1"><span>Amazon</span><span>$1.935 T</span></div>
                <div className="flex justify-between py-1"><span>Alphabet</span><span>$1.935 T</span></div>
                <div className="flex justify-between py-1"><span>Snapfix</span><span className="text-yellow-400 font-bold">$1.93 T</span></div>
              </div>
              <p className="text-gray-400 text-sm mt-4 text-center">
                <span className="text-yellow-400 font-bold">7th largest market cap</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 p-6 rounded-lg shadow-lg max-w-md border border-gray-700 flex justify-center items-center">
              <h3 className="text-white text-3xl font-bold">JOEL</h3>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const tabClass = (tabName) =>
    `py-3 px-6 cursor-pointer transition-all duration-300 ease-in-out whitespace-nowrap ${
      activeTab === tabName ? 'text-white text-4xl font-bold' : 'text-gray-500 text-xl'
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
        {renderThreePanels()}
      </div>
    </div>
  );
};

export default Last;
