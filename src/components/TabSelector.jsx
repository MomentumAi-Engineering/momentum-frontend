import React, { useState } from "react";

const tabs = [
  "AI workflows",
  "Perfect prompts",
  "AI agents",
  "Chatbots that convert",
];

const TabSelector = () => {
  const [activeTab, setActiveTab] = useState("AI workflows");

  return (
    <div className="bg-black">
      <div className="flex gap-4 p-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer
              ${
                activeTab === tab
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-black"
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
