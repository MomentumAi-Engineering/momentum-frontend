import React from "react";
import Socials from "../mini-components/Socials";
import { motion } from "framer-motion";


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
     <section className="max-w-6xl mx-auto px-6 md:px-12 mb-32">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    How it works
  </h2>
  <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 border border-purple-600/40 rounded-2xl shadow-xl p-10 text-center hover:scale-[1.01] transition-transform">
    <p className="text-gray-300 text-lg leading-relaxed mb-6">
      <span className="font-semibold text-white">Snap a photo</span> → AI
      detects the issue & auto-geolocates (95%+ accuracy) →{" "}
      <span className="font-semibold text-white">Review & Submit</span> → Smart
      routing to city crew or vetted pro → Real-time updates to{" "}
      <span className="font-semibold text-green-400">“Fixed”</span>, with private
      chat if needed.
    </p>

    {/* Animated Demo Line */}
    <motion.p
      className="text-blue-400 italic font-medium text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      Demo:&nbsp;
      {["Snap", "Detect", "Confirm", "Route", "Track"].map((step, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + i * 0.6 }}
          className="inline-block"
        >
          {step}
          {i < 4 && " → "}
        </motion.span>
      ))}
    </motion.p>
  </div>
</section>
      {/* Who it’s for */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Who it’s for
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Residents",
              desc: "One-tap reporting, live status, always free.",
              icon: "🏠",
            },
            {
              title: "Cities",
              desc: "Fewer 311 calls, auto-routing, dashboards, SLA timers, GIS heatmaps.",
              icon: "🏙️",
            },
            {
              title: "Local Trades",
              desc: "Instant nearby job alerts; quote and message in-app to win work faster.",
              icon: "🛠️",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-purple-700/20 to-blue-700/20 border border-purple-500/30 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/40 transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results at a glance */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Results at a glance</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-[#120026]/70 rounded-2xl p-6 border border-purple-600/30 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Residents</h3>
            <p className="text-gray-300">
              Save 7–13 minutes per report compared to typical phone-based 311—and get
              real-time updates instead of voicemail.
            </p>
          </div>
          <div className="bg-[#120026]/70 rounded-2xl p-6 border border-purple-600/30 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Cities</h3>
            <p className="text-gray-300">
              Projections commonly deliver 3×–12× ROI by diverting calls and cutting
              handling time.
            </p>
          </div>
          <div className="bg-[#120026]/70 rounded-2xl p-6 border border-purple-600/30 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Local Trades</h3>
            <p className="text-gray-300">
              One $150 job covers Pro membership; median modeled payoff around 23×.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-400 italic">
          See calculators and methods on Easier Ai.
        </p>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Pricing at a glance
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-700/20 to-green-900/20 border border-green-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Residents</h3>
            <p className="text-gray-300">Free</p>
          </div>
          <div className="bg-gradient-to-br from-blue-700/20 to-blue-900/20 border border-blue-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Cities</h3>
            <p className="text-gray-300">
              Community (≤50k): $2,000/yr • Metro (&gt;50k): $0.05 × population/yr (min
              $5,000) <br />
              <span className="text-blue-400">[Start a 2-week pilot]</span>
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-700/20 to-purple-900/20 border border-purple-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Local Trades</h3>
            <p className="text-gray-300">
              Starter Free (5 matched leads/mo) • Pro $79/mo (unlimited + dashboard). <br />
              <span className="text-purple-400">[Start for Free]</span>
            </p>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mb-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Security & privacy</h2>
        <p className="text-gray-300 leading-relaxed bg-[#120026]/70 border border-purple-600/30 rounded-2xl shadow-md p-8">
          Private by default. Photos, location, and chat are encrypted in transit and
          at rest. Role-based access and audit logs protect sensitive actions. We
          collect only what’s needed to route and resolve issues.
        </p>
      </section>

      {/* Choose your path */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Choose your path</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="#"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition"
          >
            Get the App
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition"
          >
            Start a 2-week pilot
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition"
          >
            Start Free
          </a>
        </div>
        <div className="text-gray-400 text-sm space-x-4">
          <a href="#" className="hover:text-white">How it works</a> •
          <a href="#" className="hover:text-white">Pricing</a> •
          <a href="#" className="hover:text-white">FAQ</a> →
          <a href="#" className="text-blue-400"> Easier Ai</a>
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
