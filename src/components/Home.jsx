import { useState } from "react";
import { ArrowUpCircle, ArrowDown } from "lucide-react";
import './Home.css';

export default function ChatInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-end items-center pb-10 relative">
    

       <div className="home-text">
          Hi sanket randi
       </div>
     
      <div className="absolute bottom-10 left-10 mb-35">
        <ArrowDown className="text-white w-6 h-6" />
      </div>

     
      <div className="w-full max-w-3xl px-4 mb-10">
        <div className="bg-black border border-white/20 text-white rounded-2xl p-4 flex items-center">
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

     
      <div className="mt-2 flex justify-end gap-4 mb-15">
        <button className="px-6 py-2 border border-white/20 rounded-full text-white text-sm tracking-widest font-mono hover:bg-white/10 transition">
          BUILD WITH MOMENTUM
        </button>
        <button className="px-6 py-2 border border-white/20 rounded-full text-white text-sm tracking-widest font-mono hover:bg-white/10 transition">
          LEARN MORE
        </button>
      </div>

    







    </div>
  );
}
