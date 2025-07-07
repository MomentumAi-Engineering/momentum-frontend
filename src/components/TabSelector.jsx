import React, { useState } from "react";

const tabs = [
  "AI workflows",
  "Perfect prompts",
  "AI agents",
  "Chatbots that convert",
];

const TabSelector = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="bg-black w-full">
      <div className="flex flex-wrap gap-4 p-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 ${
              activeTab === tab
                ? "bg-white text-black"
                : "bg-neutral-100 text-black hover:bg-neutral-900 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabSelector;
