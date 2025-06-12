import React from "react";
import Rishabh from "../assets/Rishabh.jpg";


const teamMembers = [
  {
    name: "Joel Girones",
    role: "Founder & CEO",
    img: "https://via.placeholder.com/80",
    description: "Joel is a scientist, strategist, and communicator with a vision to humanize AI. At MomentumAi he guides the creation of intuitive, ethical tools that solve real-world problems at scale. Grounded in nuclear-physics research and refined by rigorous business training, Joel balances technical precision with user empathy and market clarity—building AI that is not just intelligent, but trusted."
  },
  {
    name: "Rishav Kumar",
    role: "CTO",
    img: Rishabh,
    description: "Leading the technology strategy and execution at Momentum AI. Oversee end-to-end development of AI-driven platforms, manage cross-functional engineering teams, and drive innovation across product architecture, cloud infrastructure, and machine learning integration. Ensure scalable, secure, and high-performance systems aligned with business goals."
  },
  {
    name: "Raj Biadyanath",
    role: "Software Developer",
    img: "https://via.placeholder.com/80",
    description: "I’m a software developer and computer scientist contributing to both the front end and back end of MomentumAi’s platform. As one of the early developers, I’ve been involved in shaping the design, architecture, and overall user experience of our core web presence.Currently working as an intern and part-time contractor with MomentumAi, I strive to be a reliable and collaborative team member."
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">We care deeply about the quality of our work</h1>
      <p className="text-gray-400 max-w-2xl mb-6">
        Momentum has always been a fully remote company. Today, our small but mighty team is distributed across North America.
        What unites us is relentless focus, fast execution, and our passion for software craftsmanship. We are all makers at heart and care
        deeply about the quality of our work, down to the smallest detail.
      </p>

      <button className="bg-gray-800 px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-gray-700 transition">
        We're hiring <span className="text-lg">→</span>
      </button>

      <div className="grid grid-cols-4 gap-8 mt-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group flex flex-col items-center">
            <img
              src={member.img}
              alt={member.name}
              className="rounded-md w-20 h-20 object-cover mb-2 cursor-pointer"
            />
            <p className="font-semibold text-center cursor-pointer">{member.name}</p>
            <p className="text-gray-400 text-sm text-center">{member.role}</p>

            {/* Hover Card */}
            <div className="absolute top-full mt-3 w-64 p-4 rounded-xl bg-gray-800/80 backdrop-blur-md text-white text-sm 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-xl border border-gray-600">
              <p className="font-medium mb-1">{member.name}</p>
              <p className="text-gray-300">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
