import React, { useState, useEffect } from 'react';

const FormlessUI = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      number: "01",
      title: "Participation",
      description: "Join tight-knit communities around your favorite creators, thoughtleaders, products, and experiences.",
      subtitle: "Access, distribute and co-own what matters to you, while generating passive income through revenue sharing."
    },
    {
      number: "02", 
      title: "Innovation",
      description: "Transform ideas into reality through collaborative development and shared ownership models.",
      subtitle: "Build the future together with creators and innovators who share your vision and values."
    },
    {
      number: "03",
      title: "Ownership",
      description: "Take control of your digital assets and intellectual property through decentralized ownership structures.",
      subtitle: "Secure your stake in the projects and communities that matter most to your success."
    },
    {
      number: "04",
      title: "Community",
      description: "Connect with like-minded individuals and build lasting relationships in purpose-driven ecosystems.",
      subtitle: "Experience the power of collective action and shared responsibility in digital spaces."
    },
    {
      number: "05",
      title: "Growth",
      description: "Scale your impact and influence through network effects and collaborative value creation.",
      subtitle: "Unlock exponential opportunities by leveraging community-driven growth strategies."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollPosition / (windowHeight * 0.8));
      setActiveSection(Math.min(sectionIndex, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative">
      <div className="flex flex-col md:flex-row">
        {/* Sticky Left Side */}
        <div className="w-full md:w-1/2 h-screen sticky top-0 flex items-center justify-center bg-black">
          <div className="w-80 h-80 bg-gray-900 rounded-lg flex items-center justify-center">
            {/* Placeholder for image */}
            <span className="text-gray-500">Image placeholder</span>
          </div>
        </div>

        {/* Scrolling Right Side */}
        <div className="w-full md:w-1/2">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="min-h-screen flex items-center px-6 md:px-12 py-20"
            >
              <div className="max-w-lg">
                <div className="text-8xl font-light mb-8 opacity-90">
                  {section.number}
                </div>
                <div className="space-y-8">
                  <h2 className="text-3xl font-light">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {section.description}
                  </p>
                  <p className="text-base text-gray-400 leading-relaxed">
                    {section.subtitle}
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

      {/* Scroll Progress Indicator - Right Side */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4">
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
