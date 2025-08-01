import React, { useState, useEffect, useRef } from 'react';
import Solu from '../assets/solutions-card.webp';

const FormlessUI = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);

  const sections = [
    { number: "01", title: "Faith & Meaning", description: "We believe our work has a higher purpose. We trust and rely in God as we create." },
    { number: "02", title: "Human-Centered", description: "We develop AI solutions that empower people, not replace them." },
    { number: "03", title: "Technical Integrity", description: "Rigorous, transparent, and always driven by real needs." },
    { number: "04", title: "Simplicity & Impact", description: "Elegant beats complex; clarity wins." },
    { number: "05", title: "Courageous Curiosity", description: "Very bold exploration in service of people." },
    { number: "06", title: "Ethical Responsibility", description: "We only build what we can proudly stand behind." },
    { number: "07", title: "Reveal the Unseen", description: "Surface and solve needs others overlook." },
    { number: "08", title: "Scalable Vision", description: "Dream big and scale responsibly" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const sectionElements = containerRef.current.querySelectorAll('.scroll-section');
      let newActive = 0;

      sectionElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5) {
          newActive = index;
        }
      });

      setActiveSection(newActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl md:text-6xl font-medium text-center py-12 text-white">
        Our Core Values
      </h1>

      <div className="flex flex-col md:flex-row">
        {/* Sticky Left Side */}
        {/* Sticky Left Side */}
<div className="w-full md:w-1/2 hidden md:block">
  <div className="h-screen sticky top-0 flex items-center justify-center bg-black">
    <div className="w-80 h-80 bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
      <img 
  src={Solu} 
  alt="Team visual" 
  className="object-cover w-full h-full rounded-lg"
/>

    </div>
  </div>
</div>


        {/* Scrolling Right Side */}
        <div className="w-full md:w-1/2">
          {sections.map((section, index) => (
            <div
              key={index}
              className="scroll-section min-h-[80vh] flex items-center px-6 md:px-12 py-20"
            >
              <div className="max-w-lg">
                <div className="text-6xl font-light mb-8 opacity-90">
                  {section.number}
                </div>
                <div className="space-y-8">
                  <h2 className="text-3xl font-light">{section.title}</h2>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Tab Indicator */}
                <div className="flex space-x-2 mt-12">
                  {sections.map((_, tabIndex) => (
                    <div
                      key={tabIndex}
                      className={`h-1 transition-all duration-300 ${
                        tabIndex === activeSection
                          ? 'w-12 bg-white'
                          : 'w-6 bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Progress Indicator (Right Center) */}
      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 space-y-4">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              index === activeSection
                ? 'w-12 h-0.5 bg-white'
                : 'w-6 h-px bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FormlessUI;
