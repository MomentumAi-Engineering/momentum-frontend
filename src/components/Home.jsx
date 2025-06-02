import { useState } from "react";
import { ArrowUpCircle } from "lucide-react";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-120">
      <div className="bg-black text-white p-2 rounded-xl flex items-center border border-gray-600">
        <input
          type="text"
          placeholder="Know more about MomentumAI.."
          className="bg-transparent text-white flex-1 p-3 outline-none placeholder-gray-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>
          <ArrowUpCircle className="text-gray-400 hover:text-white transition w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
