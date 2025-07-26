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
   <div className="relative w-full min-h-screen flex flex-col items-center pt-28 sm:pt-36 overflow-hidden bg-black">


      {/* 🔵 Enhanced Top-Left Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/30 rounded-full blur-[140px] z-0" />

      {/* 🔵 Enhanced Bottom-Right Glow */}
      <div className="absolute bottom-0 right-0 w-[15rem] h-[20rem] bg-purple-500/30 rounded-full blur-[110px] z-0" />


      
{/* Intro Text Section */}
<div className="mt-4 sm:mt-12 sm:mr-20 px-4 sm:px-0 ml-0 sm:ml-20 text-center sm:text-left relative z-10">
  <div className="home-text mb-4 font-bold text-xl sm:text-2xl">
    <div>Innovation with a Human Purpose.</div>
  </div>
  <div className="home-small font-semibold text-3xl sm:text-5xl md:text-7xl leading-snug sm:leading-tight">
    <ShinyText text="We empower people and organizations to harness AI in ways that are wholly constructive, ethical, and life-enhancing." />
  </div>
</div>



      
      <div className="w-full max-w-3xl px-4 mb-6 mt-20 sm:mt-32 relative z-10">
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
      <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 mb-10 relative z-10">
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
            <button
              onClick={() => setShowCard(false)}
              className="absolute top-4 right-4 text-white hover:text-red-400 transition"
            >
              <X className="w-6 h-6" />
            </button>
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
