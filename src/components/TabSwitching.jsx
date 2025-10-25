import React from 'react';
import imgOne from "../assets/report.png";
import imgTwo from "../assets/report-11.png";
import imgThree from "../assets/build.png";
const TabSwitching = () => {
  const steps = [
    {
      id: 1,
      title: 'Snap a Photo',
      image: imgOne,
      description: (
        <>
          See a problem — a pothole, sidewalk crack, or safety hazard? <br />
          <span className="text-yellow-400 font-semibold">Open EAiSER</span>,
          take a quick photo, and the app captures your location automatically.
        </>
      ),
    },
    {
      id: 2,
      title: 'AI Detects & Fills The Report',
      image: imgTwo,
      description: (
        <>
          <span className="text-yellow-400 font-semibold">EAiSER’s AI</span>{' '}
          identifies the issue type with <span className="font-semibold">95%+</span> accuracy,
          classifies it, and pre-fills your report. <br />
          You simply review and confirm. <br />
          <span className="text-gray-400 italic">(Accurate, complete, and ready to send.)</span>
        </>
      ),
    },
    {
      id: 3,
      title: 'We Route It',
      image: imgThree,
      description: (
        <>
          <span className="text-yellow-400 font-semibold">EAiSER</span> delivers your report to the
          right city department or verified business. <br />
          You’ll get confirmation and updates as it’s resolved. <br />
          <span className="text-gray-400 italic">(Fast, direct, and hassle-free.)</span>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-12 font-sans flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 sm:mb-10">
        How it works? – <span className="text-yellow-400">EAiSER</span> in 3 Steps
      </h2>

      {/* Divider */}
      <div className="w-24 sm:w-32 h-[2px] bg-gray-600 mb-10"></div>

      {/* Steps */}
      <div className="flex flex-col space-y-16 w-full max-w-6xl">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col sm:flex-row items-center gap-10 ${
              index % 2 === 1 ? 'sm:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className="flex-shrink-0 w-full sm:w-1/2 flex justify-center">
              <img
                src={step.image}
                alt={step.title}
                className="w-80 sm:w-[420px] rounded-lg shadow-[0_0_12px_#ffffff40] object-contain"
              />
            </div>

            {/* Text */}
            <div className="sm:w-1/2 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-yellow-400">
                {step.title}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{step.description}</p>

              {/* Divider under each step */}
              {index < steps.length - 1 && (
                <div className="w-16 sm:w-24 h-[1px] bg-gray-700 mt-6 mx-auto sm:mx-0"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 flex flex-col sm:flex-row gap-6">
        <a
          href="https://easier.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-all duration-300"
        >
          Get EAiSER
        </a>
        <a
          href="/product"
          className="border border-yellow-400 text-yellow-400 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default TabSwitching;
