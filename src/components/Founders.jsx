import React from "react";

const teamMembers = [
  { name: "Karri Saarinen", role: "Co-founder, CEO", img: "https://via.placeholder.com/80" },
  { name: "Jori Lallo", role: "Co-founder", img: "https://via.placeholder.com/80" },
  { name: "Tuomas Artman", role: "Co-founder, CTO", img: "https://via.placeholder.com/80" },
  { name: "Tom Moor", role: "Head of Engineering", img: "https://via.placeholder.com/80" },
  { name: "Member 5", role: "Role 5", img: "https://via.placeholder.com/80" },
  { name: "Member 6", role: "Role 6", img: "https://via.placeholder.com/80" },
  { name: "Member 7", role: "Role 7", img: "https://via.placeholder.com/80" }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">We care deeply about the quality of our work</h1>
      <p className="text-gray-400 max-w-2xl mb-6">
        Linear has always been a fully remote company. Today, our small but mighty team is distributed across North America and Europe.
        What unites us is relentless focus, fast execution, and our passion for software craftsmanship. We are all makers at heart and care
        deeply about the quality of our work, down to the smallest detail.
      </p>
      <button className="bg-gray-800 px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-gray-700 transition">
        We're hiring <span className="text-lg">→</span>
      </button>

      <div className="grid grid-cols-4 gap-8 mt-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={member.img} alt={member.name} className="rounded-md w-20 h-20 object-cover mb-2" />
            <p className="font-semibold text-center">{member.name}</p>
            <p className="text-gray-400 text-sm text-center">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
