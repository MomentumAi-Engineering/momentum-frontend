import React, { useState } from 'react';
import Chart from '../mini-components/Graph';

const TabSwitching = () => {
  const [activeTab, setActiveTab] = useState('whyBitcoin');

  const cardClasses =
    'w-[320px] h-[400px] bg-black bg-opacity-80 border border-gray-700 rounded-xl p-6 shadow-[0_0_20px_#a855f766] hover:shadow-[0_0_30px_#a855f7aa] transition-shadow duration-500 flex flex-col justify-between';

  const renderThreePanels = () => {
    switch (activeTab) {
      case 'whyBitcoin':
        return (
          <div className="flex flex-wrap justify-center gap-10">
            <div className={cardClasses}>
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
              <p className="text-gray-400 text-sm mt-4 text-center">
                A great contribution in the 21st century <br />
                
              </p>
            </div>
          </div>
        );

      case 'whyGiftBitcoin':
        return (
          <div className="flex flex-wrap justify-center gap-10">
            <div className={cardClasses}>
              <h3 className="text-white text-xl font-semibold mb-4 text-center">
                Great value of products in  digital age.
              </h3>
              <ul className="text-gray-300 text-lg space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>AI Decision Making
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Advance Analytics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Powerful Insights
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Enterprise Security
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 text-center">
                Safe, anonymous, and smart. That’s <span className="text-yellow-400 font-bold">Snapfix</span>.
              </p>
            </div>
          </div>
        );

      case 'whyUseBitcoinCard':
        return (
          <div className="flex flex-wrap justify-center gap-10">
            <div className={cardClasses}>
              <h3 className="text-white text-xl font-semibold mb-4 text-center">Largest growing AI Company</h3>
              <div className="bg-gray-700 bg-opacity-40 p-3 rounded-md text-sm text-gray-300">
                <p className="text-white font-semibold mb-2">Market Cap</p>
                <div className="flex justify-between py-1"><span>Google</span><span>$1.935 T</span></div>
                <div className="flex justify-between py-1"><span>Microsoft</span><span>$1.935 T</span></div>
                <div className="flex justify-between py-1"><span>Amazon</span><span>$1.935 T</span></div>
                <div className="flex justify-between py-1"><span>Alphabet</span><span>$1.935 T</span></div>
                <div className="flex justify-between py-1"><span>Snapfix</span><span className="text-yellow-400 font-bold">$1.93 T</span></div>
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
            WHY SNAPFIX?
          </div>
          <span className="h-0.5 w-16 bg-gray-700"></span>
          <div className={tabClass('whyGiftBitcoin')} onClick={() => setActiveTab('whyGiftBitcoin')}>
            OUR FEATURES
          </div>
          <span className="h-0.5 w-16 bg-gray-700"></span>
          <div className={tabClass('whyUseBitcoinCard')} onClick={() => setActiveTab('whyUseBitcoinCard')}>
            WHY USE SNAPFIX?
          </div>
        </div>

        {/* Tab Content */}
        {renderThreePanels()}
      </div>

          
    </div>
  );
};

export default TabSwitching;
