import React from "react";
import Socials from "../mini-components/Socials";
import { motion } from "framer-motion";
import Path from "../components/Path";

const Product = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#120026] to-[#1a0033] text-white min-h-screen font-inter scroll-smooth">
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

      {/* Why EAiSER (FAQ target) */}
      <section
        id="faq"
        className="max-w-6xl mx-auto px-6 md:px-12 mb-24 text-center"
      >
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
      <section
  id="how-it-works"
  className="max-w-6xl mx-auto px-6 md:px-12 mb-32"
>
  {/* Animated Heading */}
  <motion.h2
    className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text"
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    How it works
  </motion.h2>

  {/* Animated Container */}
  <motion.div
    className="bg-gradient-to-r from-purple-800/40 to-blue-800/40 border border-purple-500/40 rounded-2xl shadow-2xl p-10 text-center backdrop-blur-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(147,51,234,0.5)]"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    whileHover={{ scale: 1.03 }}
  >
    {/* Description */}
    <motion.p
      className="text-gray-200 text-xl md:text-2xl leading-relaxed mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <span className="font-semibold text-white">Snap a photo</span> →
      AI detects the issue & auto-geolocates (95%+ accuracy) →
      <span className="font-semibold text-white"> Review & Submit </span>→
      Smart routing to city crew or vetted pro →
      Real-time updates to{" "}
      <span className="font-semibold text-green-400 animate-pulse">“Fixed”</span>,
      with private chat if needed.
    </motion.p>

    {/* Animated Demo Line */}
    <motion.p
      className="text-blue-400 italic font-semibold text-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      Demo:&nbsp;
      {["Snap", "Detect", "Confirm", "Route", "Track"].map((step, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.4, duration: 0.5 }}
          className="inline-block text-lg md:text-xl text-blue-300"
        >
          {step}
          {i < 4 && (
            <motion.span
              className="text-gray-400 mx-1"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.3 }}
            >
              →
            </motion.span>
          )}
        </motion.span>
      ))}
    </motion.p>
  </motion.div>
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
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Results at a glance
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-[#120026]/70 rounded-2xl p-6 border border-purple-600/30 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Residents
            </h3>
            <p className="text-gray-300">
              Save 7–13 minutes per report compared to typical phone-based
              311—and get real-time updates instead of voicemail.
            </p>
          </div>
          <div className="bg-[#120026]/70 rounded-2xl p-6 border border-purple-600/30 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Cities</h3>
            <p className="text-gray-300">
              Projections commonly deliver 3×–12× ROI by diverting calls and
              cutting handling time.
            </p>
          </div>
          <div className="bg-[#120026]/70 rounded-2xl p-6 border border-purple-600/30 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Local Trades
            </h3>
            <p className="text-gray-300">
              One $150 job covers Pro membership; median modeled payoff around
              23×.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-400 italic">
          See calculators and methods on Easier Ai.
        </p>
      </section>
      
      
      
      {/* Pricing */}
<section
  id="pricing"
  className="max-w-6xl mx-auto px-6 md:px-12 mb-32 text-center"
>
  <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
    Pricing at a glance
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    {/* Residents */}
    <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/40 border border-blue-500/40 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-[1.03]">
      <h3 className="text-2xl font-semibold text-blue-300 mb-3">
        Residents
      </h3>
      <p className="text-gray-100 text-lg mb-4 font-bold">Always Free!</p>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Report and track city issues anytime — with zero cost, complete privacy,
        and instant updates.
      </p>
      <a
        href="https://www.eaiser.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-all"
      >
        Get EAiSER
      </a>
    </div>

    {/* Cities */}
    <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/40 border border-blue-500/40 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-[1.03]">
      <h3 className="text-2xl font-semibold text-blue-300 mb-3">
        Cities
      </h3>
      <p className="text-gray-100 text-lg mb-4 font-semibold">
        It’s affordable! 💼
      </p>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Reach out to our sales team to get you started — tailored pricing for
        every community size.
      </p>
      <a
        href="https://momntumai.com/contact"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-all"
      >
        Contact the Team
      </a>
    </div>

    {/* Local Trades */}
    <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/40 border border-blue-500/40 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-[1.03]">
      <h3 className="text-2xl font-semibold text-blue-300 mb-3">
        Local Trades
      </h3>
      <p className="text-gray-100 text-lg font-medium mb-2">
        <span className="font-bold text-white">Starter Free</span> – 5 Matched Leads
      </p>
      <p className="text-gray-100 text-lg font-medium mb-6">
        <span className="font-bold text-white">Pro $79/mo</span> – Unlimited leads/mo and Dashboard
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <button
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-all"
        >
          Starter Free
        </button>
        <button
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-all"
        >
          Get Pro
        </button>
      </div>
    </div>
  </div>
</section>



      {/* Security */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mb-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Security & privacy
        </h2>
        <p className="text-gray-300 leading-relaxed bg-[#120026]/70 border border-purple-600/30 rounded-2xl shadow-md p-8">
          Private by default. Photos, location, and chat are encrypted in
          transit and at rest. Role-based access and audit logs protect
          sensitive actions. We collect only what’s needed to route and resolve
          issues.
        </p>
      </section>

      {/* Choose your path */}
      <div>
        <Path />
      </div>

      {/* Socials */}
      <section className="flex justify-center items-center py-16">
        <Socials />
      </section>
    </div>
  );
};

export default Product;
