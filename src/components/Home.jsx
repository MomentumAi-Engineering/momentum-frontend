import { useState } from "react";
import { ArrowUpCircle, ArrowDown, X } from "lucide-react";
import './Home.css';
import SplitText from "../mini-components/SplitText";
import ShinyText from "../mini-components/Shiny-text";

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
    <div className="w-full flex flex-col justify-end items-center pb-10 pt-35 relative">

      {/* Text Section */}
      <div className="mt-20 mr-50">
        <div className="home-text mb-5 font-bold">
          
          <SplitText text="Innovation with a Human Purpose." />
        </div>
        <div className="home-small mr-10 mb-10 font-medium text-7xl">
          
          <ShinyText text="We empower people and organizations to harness AI in ways that are wholly constructive, ethical, and life-enhancing." />
        </div>
      </div>

      {/* Arrow Down */}
      <div className="absolute bottom-10 left-10 mb-10">
        <ArrowDown className="text-white w-6 h-6 animate-bounce" />
      </div>

      {/* Chat Input */}
      <div className="w-full max-w-3xl px-4 mb-5 mt-30">
        <div className="bg-black border border-white/20 text-white rounded-2xl p-4 h-25 flex items-center">
          <input
            type="text"
            placeholder=" know more about Momentum..."
            className="bg-transparent text-white flex-1 outline-none placeholder-gray-400 px-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>
            <ArrowUpCircle className="text-gray-400 hover:text-white w-6 h-6 transition" />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-2 flex justify-end gap-4 mb-10">
        <button className="px-6 py-2 border border-white/20 rounded-full text-white text-sm tracking-widest font-mono hover:bg-white/10 transition">
          BUILD WITH MOMENTUM
        </button>
        <button
          onClick={() => setShowCard(true)}
          className="px-6 py-2 border border-white/20 rounded-full text-white text-sm tracking-widest font-mono hover:bg-white/10 transition"
        >
          LEARN MORE
        </button>
      </div>

      {/* Centered Glassy Card */}
      {showCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="h-[50vh] w-[50vw] bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-8 text-white relative transition-all duration-500">
            {/* Close Button */}
            <button
              onClick={() => setShowCard(false)}
              className="absolute top-4 right-4 text-white hover:text-red-400 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Card Content */}
            <h2 className="text-2xl font-bold mb-4 text-purple-400">About Momentum</h2>
            <p className="text-sm leading-relaxed text-gray-200">
              MomentumAI is built with a vision to revolutionize how ethical technology interacts
              with modern business. We blend innovation with responsibility, ensuring that every
              solution we offer drives impact not just in productivity, but in people’s lives too.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
