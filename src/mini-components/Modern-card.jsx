import React from 'react';

const AtomixCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-8">
      <div className="relative w-96 h-64 bg-black rounded-3xl border border-white/20">
        <div className="flex items-center h-full p-8">
          {/* Logo/Icon */}
          <div className="flex-shrink-0 mr-8">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded transform rotate-45 flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-sm transform -rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h1 className="text-white text-4xl font-light mb-4">Momntum</h1>
            
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-1">Not any usual</p>
              <p className="text-white text-2xl font-light">AI</p>
            </div>
            
            <div>
              <p className="text-white text-lg mb-1">
                Raj <span className="text-gray-400">|</span> Dev
              </p>
              <p className="text-gray-400 text-base">Creator & Maintainer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtomixCard;