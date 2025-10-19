import React from "react";

const Path = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center text-white">
      <h2 className="text-6xl md:text-7xl font-bold mb-16">Choose Your Path</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
        {/* Residents Section */}
        <div className="flex flex-col items-center">
          <span className="text-5xl mb-4">🏡</span>
          <h3 className="text-3xl font-semibold mb-3">Residents</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Report issues instantly — it's free.
          </p>
          <div className="flex flex-col gap-3 w-60">
            <a
              href="#"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition text-sm"
            >
              Get the App
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition text-sm"
            >
              Report from the Website
            </a>
          </div>
        </div>

        {/* Cities & Departments Section */}
        <div className="flex flex-col items-center">
          <span className="text-5xl mb-4">🏛️</span>
          <h3 className="text-3xl font-semibold mb-3">
            Cities & Departments
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            Automate citizen reports. Improve response time.
          </p>
          <div className="flex flex-col gap-3 w-60">
            <a
              href="#"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition text-sm"
            >
              Start a 2-week Pilot
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition text-sm"
            >
              Contact the Team
            </a>
          </div>
        </div>

        {/* Businesses Section */}
        <div className="flex flex-col items-center">
          <span className="text-5xl mb-4">🧰</span>
          <h3 className="text-3xl font-semibold mb-3">Businesses</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Receive verified leads from your community.
          </p>
          <div className="flex flex-col gap-3 w-60">
            <a
              href="#"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition text-sm"
            >
              Get Pro
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition text-sm"
            >
              Start Free
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-16 text-sm text-gray-400 flex flex-wrap justify-center gap-4">
        <a href="#" className="hover:text-white transition">
          How it works
        </a>
        <span>•</span>
        <a href="#" className="hover:text-white transition">
          Pricing
        </a>
        <span>•</span>
        <a href="#" className="hover:text-white transition">
          FAQ
        </a>
        <span>•</span>
        <a
          href="#"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          → Easier Ai
        </a>
      </div>
    </section>
  );
};

export default Path;
