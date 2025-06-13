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
    <div className="w-full flex flex-col justify-end items-center pb-10 pt-30 relative ">

    
    <div className='mt-20'>
       <div className="home-text mb-5">
         Ethics that scale. <br />Solutions that work. Impact that matters.
      </div>
      <div className="home-small mr-10 mb-10">
        	 
       We exist to provide meaningful, ethical solutions that serve both people and businesses.
      </div>
      </div>

     
      <div className="absolute bottom-10 left-10 mb-10">
        <ArrowDown className="text-white w-6 h-6" />
      </div>

     
      <div className="w-full max-w-3xl px-4 mb-5 mt-30 ">
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

     
      <div className="mt-2 flex justify-end gap-4 mb-10">
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
