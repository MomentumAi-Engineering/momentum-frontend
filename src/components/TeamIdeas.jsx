import React from 'react';
import Solu from '../assets/new_img.png';

const FormlessUI = () => {
  const sections = [
    { number: "01", title: "Faith & Meaning", description: "We believe our work has a higher purpose. We trust and rely in God as we create." },
    { number: "02", title: "Human-Centered", description: " We develop AI solutions that empower people, not replace them." },
    { number: "03", title: "Technical Integrity", description: "Rigorous, transparent, and always driven by real needs." },
    { number: "04", title: "Simplicity & Impact", description: "Elegant beats complex; clarity wins." },
    { number: "05", title: "Courageous Curiosity", description: "Very bold exploration in service of people." },
    { number: "06", title: "Ethical Responsibility", description: " We only build what we can proudly stand behind." },
    { number: "07", title: "Reveal the Unseen ", description: "Surface and solve needs others overlook." },
    { number: "08", title: "Scalable Vision", description: "Dream big and scale responsibly." },
    { number: "09", title: "Accessible AI", description: "Make advanced technology beneficial to everyone." },
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


      <div className="w-full bg-gray-900 text-white py-20 px-6 sm:px-16 text-center mt-20 rounded-3xl shadow-lg">
  <h2 className="text-5xl sm:text-6xl font-extralight mb-6 leading-tight">
    Ready to create <span className="text-blue-400">momntum?</span>
  </h2>
  
  <p className="text-lg sm:text-xl font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
    Whether you’re a partner, customer, or future teammate—let’s move what matters, together.
  </p>
  
  <p className="text-md sm:text-lg mb-4 max-w-xl mx-auto">
    We’re always looking for ethical innovators.
  </p>
  
  <a
    href="mailto:careers@momntumai.com"
    className="inline-block mt-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all duration-300"
  >
    Share your story at careers@momntumai.com
  </a>
</div>

    </div>
  );
};

export default FormlessUI;