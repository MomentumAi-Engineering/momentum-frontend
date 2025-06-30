import { useState } from "react";
import { ArrowUpCircle, ArrowDown, X } from "lucide-react";
import './Home.css';
import SplitText from "../mini-components/SplitText";
import ShinyText from "../mini-components/Shiny-text";
import HomeAnimation from "./HomeAnimation";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
  };

  return (
    <div className="w-full flex flex-col justify-end items-center pt-28 sm:pt-36 relative overflow-hidden">

      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <HomeAnimation />
      </div>

      {/* Intro Text Section */}
      <div className="mt-10 sm:mt-20 sm:mr-20 px-4 sm:px-0 text-center sm:text-left">
        <div className="home-text mb-4 font-bold text-lg sm:text-2xl">
          <SplitText text="Innovation with a Human Purpose." />
        </div>
        <div className="home-small font-medium text-2xl sm:text-5xl md:text-7xl leading-tight">
          <ShinyText text="We empower people and organizations to harness AI in ways that are wholly constructive, ethical, and life-enhancing." />
        </div>
      </div>

      {/* Arrow Down Icon */}
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
        <ArrowDown className="text-white w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
      </div>

      {/* Chat Input Box */}
      <div className="w-full max-w-3xl px-4 mb-6 mt-20 sm:mt-32">
        <div className="bg-black border border-white/20 text-white rounded-2xl p-3 sm:p-4 flex items-center">
          <input
            type="text"
            placeholder="know more about Momntum..."
            className="bg-transparent text-white flex-1 outline-none placeholder-gray-400 px-2 text-sm sm:text-base"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>
            <ArrowUpCircle className="text-gray-400 hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition" />
          </button>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 mb-10">
        <button className="px-5 py-2 border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-widest font-mono hover:bg-white/10 transition">
          BUILD WITH MOMNTUM
        </button>
        <button
          onClick={() => setShowCard(true)}
          className="px-5 py-2 border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-widest font-mono hover:bg-white/10 transition"
        >
          LEARN MORE
        </button>
      </div>

      {/* Pop-up Card */}
      {showCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-xl h-[60vh] bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-6 sm:p-8 text-white relative transition-all duration-500">

            {/* Close Button */}
            <button
              onClick={() => setShowCard(false)}
              className="absolute top-4 right-4 text-white hover:text-red-400 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Card Content */}
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400">About Momntum</h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-200">
              MomntumAI is built with a vision to revolutionize how ethical technology interacts
              with modern business. We blend innovation with responsibility, ensuring that every
              solution we offer drives impact not just in productivity, but in people’s lives too.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
