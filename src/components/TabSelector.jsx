import React from "react";

const tabs = [
  "AI workflows",
  "Perfect prompts",
  "AI agents",
  "Chatbots that convert",
];

const TabSelector = () => {
  return (
    <div className="bg-black">
      <div className="flex gap-4 p-4">
        {tabs.map((tab) => (
          <div
            key={tab}
            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer bg-neutral-100 text-black hover:bg-neutral-900 hover:text-white"
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSelector;
