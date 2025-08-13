import { useState, useEffect, useRef } from "react";
import { ArrowUpCircle, X, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import "./Home.css";
import ShinyText from "../mini-components/Shiny-text";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [showBot, setShowBot] = useState(false);
  const [chat, setChat] = useState([
    {
      sender: "bot",
      text:
        "Hi! I’m MomntumAI Assistant 🤖\nAsk me about MomntumAI, our founders (Joel Girones & Rishav Kumar), or anything else!",
    },
  ]);
  const messagesEndRef = useRef(null);

  // Typing placeholder effect
  const fullPlaceholder = "know more about Momntum...";
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setPlaceholder(fullPlaceholder.slice(0, i));
      i++;
      if (i > fullPlaceholder.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, showBot]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = message;
    setChat((prev) => [...prev, { sender: "user", text: userMsg }]);
    setMessage("");

    try {
      // Call backend API
      const res = await axios.post("http://localhost:5000/api/chatbot", { message: userMsg });
      const botReply = res.data.reply || "Sorry, I couldn't generate a response.";

      setChat((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (err) {
      console.error(err);
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: "Oops! Something went wrong. Please try again." },
      ]);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center pt-28 sm:pt-36 overflow-hidden bg-black">
      {/* Glowing blobs */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-80 h-80 bg-purple-500/30 rounded-full blur-[140px] z-0"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[15rem] h-[20rem] bg-purple-500/30 rounded-full blur-[110px] z-0"
      />

      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-4 sm:mt-12 sm:mr-20 px-4 sm:px-0 ml-0 sm:ml-20 text-center sm:text-left relative z-10"
      >
        <div className="home-text mb-4 font-bold text-xl sm:text-2xl">
          Innovation with a Human Purpose.
        </div>
        <div className="home-small font-semibold text-3xl sm:text-5xl md:text-7xl leading-snug sm:leading-tight">
          <ShinyText text="We empower people and organizations to harness AI in ways that are wholly constructive, ethical, and life-enhancing." />
        </div>
      </motion.div>

      {/* Input Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-3xl px-4 mb-6 mt-20 sm:mt-32 relative z-10"
      >
        <div
          className="bg-black border border-white/20 text-white rounded-2xl p-3 sm:p-4 flex items-center"
          onClick={() => setShowBot(true)}
          role="button"
        >
          <input
            type="text"
            placeholder={placeholder}
            className="bg-transparent text-white flex-1 outline-none placeholder-gray-400 px-2 text-sm sm:text-base"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setShowBot(true)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              handleSend();
            }}
          >
            <ArrowUpCircle className="text-gray-400 hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition" />
          </motion.button>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 mb-10 relative z-10">
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          className="px-5 py-2 border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-widest font-mono transition"
        >
          BUILD WITH MOMNTUM
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          onClick={() => setShowBot(true)}
          className="px-5 py-2 border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-widest font-mono transition"
        >
          LEARN MORE
        </motion.button>
      </div>

      {/* Floating Chatbot */}
      <AnimatePresence>
        {showBot && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-6 w-[320px] sm:w-[360px] bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl flex flex-col z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-white/15">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Bot className="w-5 h-5 text-purple-300" />
                MomntumAI Bot
              </div>
              <button
                onClick={() => setShowBot(false)}
                className="text-gray-300 hover:text-red-400 transition"
                aria-label="Close chatbot"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm max-h-[52vh]">
              {chat.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-xl max-w-[85%] whitespace-pre-wrap leading-relaxed ${
                    msg.sender === "bot"
                      ? "bg-purple-500/15 text-purple-100"
                      : "bg-blue-500/20 text-blue-100 self-end ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-2 border-t border-white/15 flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 bg-transparent text-white text-sm outline-none px-2 placeholder-gray-400"
                placeholder="Ask about MomntumAI, Joel, Rishav…"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleSend}
                className="p-1"
                aria-label="Send"
              >
                <ArrowUpCircle className="text-gray-300 hover:text-white w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// updated