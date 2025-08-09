import React, { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Users,
  Zap,
  Award,
} from "lucide-react";

const teamMembers = [
  {
    name: "Joel Girones",
    role: "Founder & CEO",
    description:
      "Joel is a scientist, strategist, and communicator with a vision to humanize AI. At MomntumAi he guides the creation of intuitive, ethical tools that solve real-world problems at scale.",
    // location: "San Francisco, CA",
    expertise: ["AI Strategy", "Nuclear Physics", "Product Vision"],
    // achievements: "PhD in Nuclear Physics, 15+ years in AI research",
    social: { github: "#", linkedin: "#", email: "joel@momntumai.com" },
  },
  {
    name: "Rishav Kumar",
    role: "Co Founder & CTO",
    description:
      "Driving technology vision and execution at Momntum AI — delivering AI-powered platforms, scaling cloud infrastructure, and cultivating a high-impact culture of innovation.",
    // location: "Toronto, ON",
    expertise: ["Cloud Architecture", "ML Engineering", "Team Leadership"],
    // achievements: "Built 3 unicorn startups, 50+ patents filed",
    social: { github: "#", linkedin: "https://www.linkedin.com/in/rishav-kumar-983a5b273/", email: "rishav@momntumai.com" },
  },
  {
    name: "Raj Baidyanath",
    role: " Software Developer",
    description:
      "Full-stack developer shaping the UI/UX and backend architecture of MomntumAi. Google Code-in winner, open source contributor.",
    // location: "New York, NY",
    expertise: ["Full-Stack Development", "UI/UX Design", "System Architecture"],
    // achievements: "Google Code-in winner, Open source contributor",
    social: { github: "#", linkedin: "#", email: "raj@momntumai.com" },
  },
];

export default function TeamPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Centered Sparkles */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-lg rounded-full px-6 py-3 border border-gray-700">
            <Sparkles className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Meet Our Visionaries</span>
            <Sparkles className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Heading + Paragraph */}
        <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold text-white leading-tight pt-10 text-center">
          Ethical, human-centred AI that turns 
          <span className="block text-gray-300">real-world problems into elegant solutions.</span>
        </h1>

        <p className="text-lg sm:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed text-center mt-6">
          Momntum has always been a fully remote company. Today, our small but mighty team is distributed across North America. What unites us is relentless focus, fast execution, and our passion for software craftsmanship.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { icon: Users, label: "Team Members", value: "12+" },
            { icon: MapPin, label: "Countries", value: "5" },
            { icon: Zap, label: "Projects Delivered", value: "150+" },
            { icon: Award, label: "Awards Won", value: "8" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-110 transition-transform duration-300 bg-black/40 border border-gray-700 rounded-2xl px-6 py-5"
            >
              <div className="w-16 h-16 bg-gray-800/60 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border border-gray-700">
                <stat.icon className="w-6 h-6 text-gray-300" />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button with Gap */}
        <button className="group bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full text-base font-semibold flex items-center gap-2 mx-auto mt-10 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-600">
          <span>We're hiring amazing talent</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Big Gap */}
        <div className="h-24" />

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-gray-900/50 rounded-2xl p-6 backdrop-blur-md hover:scale-[1.02] transition-all duration-300 border border-gray-700 overflow-hidden"
            >
              {/* ✨ Glows only on cards */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-purple-500/10 blur-2xl rounded-full pointer-events-none z-0" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full pointer-events-none z-0" />

              <h3 className="text-xl font-semibold text-center z-10 relative">{member.name}</h3>
              <p className="text-sm text-gray-400 text-center z-10 relative">{member.role}</p>
              <p className="mt-4 text-sm text-gray-300 text-center z-10 relative">{member.description}</p>
              <div className="flex justify-center gap-4 mt-4 text-gray-400 text-sm z-10 relative">
                <span>{member.location}</span>
              </div>
              <div className="mt-4 text-xs text-gray-500 text-center z-10 relative">
                <span className="font-medium text-gray-300">Expertise:</span>{" "}
                {member.expertise.join(", ")}
              </div>
              {/* <div className="mt-2 text-xs text-gray-500 text-center z-10 relative">
                <span className="font-medium text-gray-300">Achievements:</span>{" "}
                {member.achievements}
              </div> */}
              <div className="flex justify-center gap-4 mt-4 z-10 relative">
                <a href={member.social.linkedin}><Linkedin className="w-4 h-4 hover:text-white" /></a>
                <a href={`mailto:${member.social.email}`}><Mail className="w-4 h-4 hover:text-white" /></a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-20 space-y-6">
          <div className="inline-flex items-center gap-2 text-lg font-medium text-gray-300">
            <Sparkles className="w-5 h-5" />
            <span>Want to join our mission?</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our vision of creating ethical, powerful AI solutions that make a real difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            
          </div>
        </div>

      </div>
    </div>
  );
}
