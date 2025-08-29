import React from 'react';

const Ending = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 py-20">
      <div
        className="w-full max-w-6xl px-6 py-16 rounded-[2.5rem] border border-[#1E1E1E] shadow-[0_0_60px_rgba(255,255,255,0.05)] text-center"
        style={{
          background: 'linear-gradient(145deg, rgba(12,12,12,0.95), rgba(18,18,18,0.95))',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <h2 className="text-white text-4xl font-bold mb-10">
          Chains We Support
        </h2>
<a
  href="https://www.eaiser.ai/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-block px-6 py-3 rounded-full bg-[rgba(20,20,20,0.9)] border border-[#2a2a2a] text-white text-base font-medium shadow-[inset_0_0_12px_rgba(255,255,255,0.05)] hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition duration-300"
>
  Get Started &rarr;
</a>


        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-[#2a2a2a] shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-[rgba(20,20,20,0.9)] text-white min-h-[150px] flex flex-col">
            <h3 className="text-lg font-extralight mb-2 ">How it Works</h3>
            <p className="text-base font-mono text-gray-400 pt-5">
              Snap a photo → AI detects the issue and auto-geolocates (with 95%+ accuracy) → You review and submit the prefilled report → Smart routing to the right city crew or vetted local pro → Real-time updates to “Fixed,” with private chat when needed.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#2a2a2a] shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-[rgba(20,20,20,0.9)] text-white min-h-[150px] flex flex-col">
            <h3 className="text-lg font-extralight mb-2">Results at a glance</h3>
            <p className="text-base font-mono text-gray-400 pt-5">
              Residents: Save 7–13 minutes per report compared to typical phone-based 311—and get real-time updates instead of voicemail.
            </p>
            <br/>
            <p className="text-base font-mono text-gray-400">
              Cities: Pilots commonly deliver 3×–12× ROI by diverting calls and cutting handling time.
            </p>
            <br />
            <p className="text-base font-mono text-gray-400">
              Local trades: One $150 job covers Pro, median, modeled payoff around 23×.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#2a2a2a] shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-[rgba(20,20,20,0.9)] text-white min-h-[150px] flex flex-col">
            <h3 className="text-lg font-extralight mb-2">Pricing at a glance</h3>
             <p className="text-base font-mono text-gray-400 pt-5">
              Residents: Free
            </p>
            <br/>
            <p className="text-base font-mono text-gray-400">
              Cities: Community (≤50k): $2,000/yr • Metro (50k): $0.05 × population/yr (min $5,000)
            </p>
            <br />
            <p className="text-base font-mono text-gray-400">
              Local trades: Starter Free (5 matched leads/mo) • Pro $79/mo (unlimited + dashboard)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ending;
