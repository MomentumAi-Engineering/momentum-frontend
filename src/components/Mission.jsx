import React from "react";

const missionData = [
  {
    title: "Why Do We Exist? — Our Purpose",
    content:
      "To empower people and organizations to harness artificial intelligence in ways that are wholly constructive, ethical, and life-enhancing."
  },
  {
    title: "How Do We Behave?",
    items: [
      { label: "Courageous Honesty", text: "Speak candidly, surface issues early." },
      { label: "Loving Forgiveness", text: "Hear and forgive, learn from mistakes." },
      { label: "Accountability", text: "Own outcomes, honor commitments." }
    ]
  },
  {
    title: "What Do We Do? — Our Mission",
    content:
      "We design, build, and deliver AI products that solve real problems using curiosity and innovation."
  },
  {
    title: "What are our Core Values",
    items: [
      "Human-Centered Innovation",
      "Simplicity with Impact",
      "Ethical Responsibility"
    ]
  },
  {
    title: "How Will We Succeed?",
    items: [
      "Scalable Solutions",
      "Customer Listening",
      "Ship only what delivers value"
    ]
  },
  {
    title: "What Is Most Important Now?",
    items: [
      "Build SnapFix MVP",
      "Launch website",
      "Plan go-to-market"
    ]
  }
];

const Mission = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex">
      {/* LEFT HALF – Content */}
      <div className="w-full lg:w-1/2 p-6 lg:p-12 space-y-10 z-10">
        {missionData.map((section, index) => {
          const isTwoCardRow = index % 3 === 1;

          if (isTwoCardRow && index + 1 < missionData.length) {
            const left = section;
            const right = missionData[index + 1];

            return (
              <div key={index} className="flex flex-col lg:flex-row gap-6">
                {/* Left Card */}
                <div className="lg:w-[60%] bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-md">
                  <h2 className="text-xl font-bold mb-2">{left.title}</h2>
                  {left.content && <p className="text-gray-300">{left.content}</p>}
                  {left.items && (
                    <ul className="list-disc list-inside mt-2 text-gray-300">
                      {left.items.slice(0, 2).map((item, idx) =>
                        typeof item === "string" ? (
                          <li key={idx}>{item}</li>
                        ) : (
                          <li key={idx}>
                            <span className="font-semibold text-white">{item.label}:</span> {item.text}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>

                {/* Right Card */}
                <div className="lg:w-[40%] bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-md">
                  <h2 className="text-xl font-bold mb-2">{right.title}</h2>
                  {right.content && <p className="text-gray-300">{right.content}</p>}
                  {right.items && (
                    <ul className="list-disc list-inside mt-2 text-gray-300">
                      {right.items.slice(0, 2).map((item, idx) =>
                        typeof item === "string" ? (
                          <li key={idx}>{item}</li>
                        ) : (
                          <li key={idx}>
                            <span className="font-semibold text-white">{item.label}:</span> {item.text}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </div>
            );
          }

          // Full-width Card
          if (index % 3 === 0) {
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-md"
              >
                <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                {section.content && <p className="text-gray-300">{section.content}</p>}
                {section.items && (
                  <ul className="list-disc list-inside mt-2 text-gray-300">
                    {section.items.slice(0, 3).map((item, idx) =>
                      typeof item === "string" ? (
                        <li key={idx}>{item}</li>
                      ) : (
                        <li key={idx}>
                          <span className="font-semibold text-white">{item.label}:</span> {item.text}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            );
          }

          return null; // already paired above
        })}
      </div>

      {/* RIGHT HALF – Background Image */}
      <div className="hidden lg:block lg:w-1/2 fixed right-0 top-0 h-screen">
        <img
          src="https://images.unsplash.com/photo-1682687982258-983d7983bdc7"
          alt="AI Visual"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
    </div>
  );
};

export default Mission;
