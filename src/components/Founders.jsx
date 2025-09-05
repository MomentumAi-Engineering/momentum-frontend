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
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Joel Girones",
    role: "Founder & CEO",
    description:
      "Joel is a scientist, strategist, and communicator with a vision to humanize AI. At MomntumAi he guides the creation of intuitive, ethical tools that solve real-world problems at scale.",
    expertise: ["AI Strategy", "Nuclear Physics", "Product Vision"],
    social: { github: "#", linkedin: "#", email: "joel@momntumai.com" },
  },
  {
    name: "Rishav Kumar",
    role: "Co Founder & CTO",
    description:
      "Driving technology vision and execution at Momntum AI — delivering AI-powered platforms, scaling cloud infrastructure, and cultivating a high-impact culture of innovation.",
    expertise: ["Cloud Architecture", "ML Engineering", "Team Leadership"],
    social: { github: "#", linkedin: "https://www.linkedin.com/in/rishav-kumar-983a5b273/", email: "rishav@momntumai.com" },
  },
  {
    name: "Raj Baidyanath",
    role: "Lead Software Developer",
    description:
      "Full-stack developer shaping the UI/UX and backend architecture of MomntumAi. Google Code-in winner, open source contributor.",
    expertise: ["Full-Stack Development", "UI/UX Design", "System Architecture"],
    social: { github: "#", linkedin: "#", email: "raj@momntumai.com" },
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background floating blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-lg rounded-full px-6 py-3 border border-gray-700">
            <Sparkles className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Meet Our Visionaries</span>
            <Sparkles className="w-4 h-4 text-gray-400" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-4xl font-bold text-white leading-tight pt-10 text-center"
        >
          Ethical, human-centred AI that turns 
          <span className="block text-gray-300">real-world problems into elegant solutions.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg sm:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed text-center mt-6"
        >
          Momntum has always been a fully remote company. Today, our small but mighty team is distributed across North America. What unites us is relentless focus, fast execution, and our passion for software craftsmanship.
        </motion.p>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { icon: Users, label: "Building Real Solutions", value: "Focused on Impact" },
            { icon: MapPin, label: "MVP in Development", value: "First Release Soon" },
            { icon: Zap, label: "Collaboration", value: "Open for Partnerships" },
            
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="text-center group hover:scale-110 transition-transform duration-300 bg-black/40 border border-gray-700 rounded-2xl px-6 py-5"
            >
              <div className="w-16 h-16 bg-gray-800/60 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border border-gray-700">
                <stat.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="group bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full text-base font-semibold flex items-center gap-2 mx-auto mt-10 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-600"
        >
          <span>We're hiring amazing talent</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative bg-gray-900/50 rounded-2xl p-6 backdrop-blur-md hover:scale-[1.03] transition-all duration-300 border border-gray-700 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-20 h-20 bg-purple-500/10 blur-2xl rounded-full" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full" />

              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-sm text-gray-400 text-center">{member.role}</p>
              <p className="mt-4 text-sm text-gray-300 text-center">{member.description}</p>

              <div className="mt-4 text-xs text-gray-500 text-center">
                <span className="font-medium text-gray-300">Expertise:</span> {member.expertise.join(", ")}
              </div>

              <div className="flex justify-center gap-4 mt-4">
                <motion.a whileHover={{ scale: 1.2, color: "#0077B5" }} href={member.social.linkedin}>
                  <Linkedin className="w-4 h-4" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, color: "#D44638" }} href={`mailto:${member.social.email}`}>
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// updated