import React, { useState, useEffect } from "react";
import { Star, Sparkles, ArrowRight, Github, Linkedin, Mail, MapPin, Users, Zap, Award } from "lucide-react";
import Risav from "../assets/Rishabh.jpg";

const teamMembers = [
  {
    name: "Joel Girones",
    role: "Founder & CEO",
    img: Risav,
    description: "Joel is a scientist, strategist, and communicator with a vision to humanize AI. At MomentumAi he guides the creation of intuitive, ethical tools that solve real-world problems at scale. Grounded in nuclear-physics research and refined by rigorous business training, Joel balances technical precision with user empathy and market clarity—building AI that is not just intelligent, but trusted.",
    location: "San Francisco, CA",
    expertise: ["AI Strategy", "Nuclear Physics", "Product Vision"],
    achievements: "PhD in Nuclear Physics, 15+ years in AI research",
    social: { github: "#", linkedin: "#", email: "joel@momentum.ai" }
  },
  {
    name: "Rishav Kumar", 
    role: "Chief Technology Officer",
    img: Risav,
    description: "Leading the technology strategy and execution at Momentum AI. Oversee end-to-end development of AI-driven platforms, manage cross-functional engineering teams, and drive innovation across product architecture, cloud infrastructure, and machine learning integration. Ensure scalable, secure, and high-performance systems aligned with business goals.",
    location: "Toronto, ON",
    expertise: ["Cloud Architecture", "ML Engineering", "Team Leadership"],
    achievements: "Built 3 unicorn startups, 50+ patents filed",
    social: { github: "#", linkedin: "#", email: "rishav@momentum.ai" }
  },
  {
    name: "Raj Biadyanath",
    role: "Senior Software Engineer",
    img: "https://via.placeholder.com/200x200/06b6d4/ffffff?text=RB",
    description: "I'm a software developer and computer scientist contributing to both the front end and back end of MomentumAi's platform. As one of the early developers, I've been involved in shaping the design, architecture, and overall user experience of our core web presence. Currently working as an intern and part-time contractor with MomentumAi, I strive to be a reliable and collaborative team member.",
    location: "New York, NY",
    expertise: ["Full-Stack Development", "UI/UX Design", "System Architecture"],
    achievements: "Google Code-in winner, Open source contributor",
    social: { github: "#", linkedin: "#", email: "raj@momentum.ai" }
  }
];

const FloatingParticle = ({ delay = 0 }) => (
  <div 
    className="absolute w-1 h-1 bg-gray-500 rounded-full opacity-40 animate-pulse"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    }}
  />
);

export default function TeamPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(64,64,64,0.3),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(64,64,64,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(64,64,64,0.2),transparent_70%)]" />
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}
      </div>

      {/* Subtle mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-gray-800/10 to-gray-900/10" />

      <div className="relative z-10 container mx-auto px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-8">
          <div className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-lg rounded-full px-6 py-3 border border-gray-700">
            <Sparkles className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Meet Our Visionaries</span>
            <Sparkles className="w-4 h-4 text-gray-400" />
          </div>

          <h1 className="text-7xl font-bold text-white leading-tight pt-10">
            We care deeply about the
            <span className="block text-gray-300">
              quality of our work
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed pt-30">
            Momentum has always been a fully remote company. Today, our <span className="text-gray-200 font-semibold">small but mighty team</span> is distributed across North America. What unites us is <span className="text-gray-200 font-semibold">relentless focus</span>, fast execution, and our passion for software craftsmanship. We are all makers at heart and care deeply about the quality of our work, down to the smallest detail.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-12">
            {[
              { icon: Users, label: "Team Members", value: "12+" },
              { icon: MapPin, label: "Countries", value: "5" },
              { icon: Zap, label: "Projects Delivered", value: "150+" },
              { icon: Award, label: "Awards Won", value: "8" }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-gray-800/50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-700/50 transition-all backdrop-blur-sm border border-gray-700">
                  <stat.icon className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <button className="group bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 mx-auto transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/50 border border-gray-600 hover:border-gray-500">
            <span>We're hiring amazing talent</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group h-[400px] perspective-1000"
            >
              {/* Card Container */}
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of Card */}
                <div className="absolute w-full h-full bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 transition-all duration-500 overflow-hidden backface-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating stars */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Star className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Profile Image */}
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gray-600 rounded-2xl opacity-50" />
                      <img
                        src={member.img}
                        alt={member.name}
                        className="relative w-full h-full object-cover rounded-2xl border-2 border-gray-600 group-hover:border-gray-500 transition-all duration-300"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="text-center space-y-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-gray-300 font-medium text-lg">{member.role}</p>
                      
                      {/* Location */}
                      <div className="flex items-center justify-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{member.location}</span>
                      </div>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-700/50 rounded-full text-xs font-medium text-gray-300 border border-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={member.social.github} className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href={member.social.linkedin} className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute w-full h-full bg-black/95 backdrop-blur-xl rounded-3xl p-8 overflow-hidden backface-hidden rotate-y-180">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{member.name}</h4>
                      <p className="text-gray-300 text-sm mb-4">{member.role}</p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.description}</p>
                      
                      <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700">
                        <p className="text-xs text-gray-300 font-medium">Key Achievement</p>
                        <p className="text-sm text-gray-400 mt-1">{member.achievements}</p>
                      </div>
                    </div>
                    
                    <div className="text-center text-sm text-gray-400 mt-4">
                      Hover to flip back
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 space-y-6 pt-30">
          <div className="inline-flex items-center gap-2 text-lg font-medium text-gray-300">
            <Sparkles className="w-5 h-5" />
            <span>Want to join our mission?</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our vision of creating ethical, powerful AI solutions that make a real difference.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-gray-600">
              View Open Positions
            </button>
            <button className="border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gray-800/50">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </div>

      {/* Add these styles for the 3D flip effect */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}