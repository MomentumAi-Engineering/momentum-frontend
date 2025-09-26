import React from "react";
import Socials from '../mini-components/Socials'

const Product = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#120026] to-[#1a0033] text-white min-h-screen font-inter">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          EAiSER
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Fix city problems with one photo — A product by{" "}
          <span className="text-blue-400 font-semibold">MomntumAI</span>
        </h2>
      </section>

      {/* Tagline */}
      <section className="max-w-5xl mx-auto text-center px-6 md:px-12 mb-24">
        <div className="bg-[#120026]/70 border border-purple-600/30 rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See it. Snap it. Send it.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Take a picture. EAiSER identifies the issue, pins the location, and
            sends it to the right crew—so you can watch it move to done.{" "}
            <span className="text-white font-semibold">
              Fast. Private. Measurable.
            </span>
          </p>
        </div>
      </section>

      {/* Why EAiSER */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why EAiSER?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {[
            {
              icon: "⚡",
              title: "Speed",
              desc: "Less than 30 seconds from snapping a photo to submitting a report.",
            },
            {
              icon: "🎯",
              title: "Accuracy",
              desc: "Over 95% accuracy in AI tagging and auto-routing issues.",
            },
            {
              icon: "💰",
              title: "Cost-Free",
              desc: "Free for citizens to report and track issues.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-purple-700/20 to-blue-700/20 border border-purple-500/30 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Get EAiSER Button */}
        <a
          href="https://www.eaiser.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg text-white font-semibold text-lg hover:scale-105 hover:shadow-purple-500/40 transition-all"
        >
          Get EAiSER
        </a>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How it works
        </h2>
        <div className="bg-[#120026]/70 border border-purple-600/30 rounded-2xl shadow-xl p-10 text-center">
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Snap a photo → AI detects the issue and auto-geolocates (95%+ accuracy) → 
            You review & submit → Smart routing to city crew or vetted pro → 
            Real-time updates to “Fixed,” with private chat if needed.
          </p>
          <p className="text-blue-400 italic font-medium">
            Demo: Snap → Detect → Confirm → Route → Track
          </p>
        </div>
      </section>

      {/* Socials */}
      <section className="flex justify-center items-center py-16">
        <Socials />
      </section>
    </div>
  );
};

export default Product;
