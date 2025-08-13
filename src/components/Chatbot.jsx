// src/components/Chatbot.jsx
import { useState, useEffect, useMemo, useRef } from "react";
import { ArrowUpCircle, X, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot({ showBot, setShowBot }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      sender: "bot",
      text:
        "Hi! I’m MomntumAI Assistant 🤖\nAsk me about MomntumAI, our founders (Joel Girones & Rishav Kumar), or anything else!",
    },
  ]);
  const messagesEndRef = useRef(null);

  const normalize = (s) =>
    s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();

  const containsAny = (s, keys) => keys.some((k) => s.includes(k));

  const responses = useMemo(
    () => ({
      founder:
        "Joel Girones — Founder & CEO\n\nJoel is a scientist, strategist, and communicator with a vision to humanize AI...",
      ceo:
        "Joel Girones is the Founder & CEO of MomntumAI.\n\nHe leads the vision to humanize AI...",
      cto:
        "Rishav Kumar — Co-Founder & CTO\n\nDriving technology vision and execution at Momntum AI...",
      rishav:
        "Rishav Kumar — Co-Founder & CTO\n\nHe leads platform engineering, cloud infrastructure...",
      joel:
        "Joel Girones — Founder & CEO\n\nA scientist, strategist, and communicator focused on human-centered AI...",
      company:
        "MomntumAI empowers people and organizations to harness AI in ways that are constructive...",
      snapfix:
        "Snapfix is a separate smart maintenance platform. Here at MomntumAI...",
      fallback:
        "Great question! MomntumAI is always evolving...",
    }),
    []
  );

  const getBotReply = (raw) => {
    const msg = normalize(raw);

    const founderKeys = ["founder", "co founder", "cofounder", "who started", "who created"];
    const ceoKeys = ["ceo", "chief executive", "head"];
    const ctoKeys = ["cto", "tech lead", "chief technology"];
    const joelKeys = ["joel", "girones", "gironés", "joe l", "jole"];
    const rishavKeys = ["rishav", "rishab", "rishav kumar", "kumar cto"];
    const companyKeys = ["momntum", "momentum", "momntumai", "about company", "what is momntum"];
    const snapfixKeys = ["snapfix"];

    if (containsAny(msg, joelKeys) || containsAny(msg, founderKeys)) return responses.founder;
    if (containsAny(msg, ceoKeys)) return responses.ceo;
    if (containsAny(msg, rishavKeys) || containsAny(msg, ctoKeys)) return responses.cto;
    if (containsAny(msg, companyKeys)) return responses.company;
    if (containsAny(msg, snapfixKeys)) return responses.snapfix;

    return responses.fallback;
  };

  const handleSend = () => {
    if (!message.trim()) return;

    const userMsg = message;
    setChat((prev) => [...prev, { sender: "user", text: userMsg }]);
    setMessage("");

    setTimeout(() => {
      const reply = getBotReply(userMsg);
      setChat((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 450);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, showBot]);

  return (
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
            >
              <ArrowUpCircle className="text-gray-300 hover:text-white w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
