import { Github, Linkedin, Instagram, X } from "lucide-react";

export default function Socials() {
  return (
    <div className="flex flex-col gap-y-4 text-left">
      {/* Logo */}
      <div className="flex items-center">
        <div className="relative">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-300 via-blue-500 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-80"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full opacity-80"></div>
          </div>
        </div>
        <span className="ml-2 text-xl font-semibold">MomntumAI</span>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 text-gray-300">
        <a href="#" className="hover:text-white transition">
          <X className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-white transition">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-white transition">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-white transition">
          <Github className="w-5 h-5" />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-sm font-light text-gray-400">
        © 2025 MomntumAI, All rights reserved
      </p>
    </div>
  );
}
