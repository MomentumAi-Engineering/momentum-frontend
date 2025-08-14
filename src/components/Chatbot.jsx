import { useState, useEffect, useMemo, useRef } from "react";
import { ArrowUpCircle, X, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot({ showBot, setShowBot }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      sender: "bot",
      text:
        "Hi! I’m MomntumAI Assistant 🤖✨\nAsk me about MomntumAI, our founders (Joel Girones & Rishav Kumar), or anything else! 💬",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const normalize = (s) =>
    s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();

  const containsAny = (s, keys) => keys.some((k) => s.includes(k));

  const responses = useMemo(
    () => ({
      founder:
        "Joel Girones — Founder & CEO 🌟\n\nJoel is a scientist, strategist, and communicator with a vision to humanize AI... 🚀",
      ceo:
        "Joel Girones is the Founder & CEO of MomntumAI. 😊\n\nHe leads the vision to humanize AI... 💡",
      cto:
        "Rishav Kumar — Co-Founder & CTO 🛠️\n\nDriving technology vision and execution at Momntum AI... 🔧",
      rishav:
        "Rishav Kumar — Co-Founder & CTO ✨\n\nHe leads platform engineering, cloud infrastructure... ☁️",
      joel:
        "Joel Girones — Founder & CEO 🌈\n\nA scientist, strategist, and communicator focused on human-centered AI... ❤️",
      company:
        "MomntumAI empowers people and organizations to harness AI in ways that are constructive... 🌟 Let's build the future together! 🤝",
      snapfix:
        "Snapfix is a separate smart maintenance platform. Here at MomntumAI... 🏗️ If you have questions about us, I'm all ears! 👂",
      fallback:
        "Great question! MomntumAI is always evolving... 😄 What else can I help with? ❓",
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
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotReply(userMsg);
      setChat((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 1200); // Increased delay for typing effect
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, showBot, isTyping]);

  const messageVariants = {
    hidden: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const typingVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: { repeat: Infinity, duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {showBot && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className="fixed bottom-20 right-6 w-[340px] sm:w-[380px] bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl rounded-3xl border border-purple-300/30 shadow-xl flex flex-col z-50 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-purple-300/20 bg-purple-500/10">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Bot className="w-6 h-6 text-purple-300" />
              </motion.div>
              MomntumAI Bot ✨
            </div>
            <button
              onClick={() => setShowBot(false)}
              className="text-gray-300 hover:text-red-400 transition-transform hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm max-h-[50vh]">
            <AnimatePresence>
              {chat.map((msg, i) => (
                <motion.div
                  key={i}
                  variants={messageVariants}
                  initial="hidden"
                  animate="animate"
                  exit="hidden"
                  className={`flex items-start gap-2 ${
                    msg.sender === "bot" ? "justify-start" : "justify-end"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <motion.div
                      className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Bot className="w-5 h-5 text-purple-300" />
                    </motion.div>
                  )}
                  <div
                    className={`p-3 rounded-2xl max-w-[80%] whitespace-pre-wrap leading-relaxed shadow-sm ${
                      msg.sender === "bot"
                        ? "bg-purple-500/20 text-purple-100"
                        : "bg-blue-500/30 text-blue-100"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === "user" && (
                    <motion.div
                      className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <User className="w-5 h-5 text-blue-300" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial="hidden"
                  animate="animate"
                  variants={messageVariants}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-purple-300" />
                  </div>
                  <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-100 flex items-center gap-1">
                    <motion.span variants={typingVariants} animate="animate" className="w-2 h-2 rounded-full bg-purple-300" />
                    <motion.span variants={typingVariants} animate="animate" className="w-2 h-2 rounded-full bg-purple-300" delay={0.2} />
                    <motion.span variants={typingVariants} animate="animate" className="w-2 h-2 rounded-full bg-purple-300" delay={0.4} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-purple-300/20 flex items-center gap-2 bg-purple-500/10">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-transparent text-white text-sm outline-none px-3 py-2 rounded-xl border border-purple-300/20 placeholder-gray-400 focus:border-purple-300/50 transition"
              placeholder="Ask about MomntumAI, Joel, Rishav… 💕"
            />
            <motion.button
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSend}
              className="p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition"
            >
              <ArrowUpCircle className="text-purple-300 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}