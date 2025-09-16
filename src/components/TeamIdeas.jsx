import React from 'react';
import Solu from '../assets/new_img.png';

const FormlessUI = () => {
  const sections = [
    { number: "01", title: "Faith & Meaning", description: "Guided by higher purpose, we trust in God as we create." },
    { number: "02", title: "Human-Centered", description: "We put people first. AI should complement and amplify humanpotential." },
    { number: "03", title: "Technical Integrity", description: "Grounded in transparency, rigor, and measurable results." },
    { number: "04", title: "Simplicity & Impact", description: "Complex problems deserve clear, elegant solutions." },
    { number: "05", title: "Courageous Curiosity", description: "We ask the bold questions others avoid, always in service ofpeople." },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
      {/* Heading */}
      <h1 className="text-3xl md:text-6xl font-medium text-center py-12 text-white">
        Our Core Values
      </h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <div className="w-full max-w-[28rem] h-[20rem] lg:h-[28rem] bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              src={Solu} 
              alt="Team visual" 
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>

        {/* Scrollable Cards Section */}
        <div className="w-full lg:w-1/2 overflow-y-auto max-h-[80vh] p-4 custom-scrollbar">
          <div className="flex flex-col space-y-8 pb-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="p-8 border border-gray-800 rounded-lg bg-gray-900 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl font-light text-gray-400 mb-4">
                  {section.number}
                </div>
                <h2 className="text-2xl font-light mb-2">{section.title}</h2>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormlessUI;