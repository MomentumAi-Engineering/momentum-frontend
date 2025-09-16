import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./Home.css";
import "./About.css";
import TrueFocus from "../mini-components/TrueFocus";

export default function SnapfixHero() {
  return (
    <div
      className="min-h-screen w-full bg-black relative overflow-hidden flex flex-col justify-between items-center pt-24 pb-10 px-4 sm:px-6 md:px-12"
    >
      {/* Big Background Text */}
<span
  className="absolute text-[15vw] font-extrabold text-white/5 left-1/2 top-1/2 -translate-x-1/2 pt-13 -translate-y-1/2 z-0 select-none pointer-events-none whitespace-nowrap"
  style={{
    WebkitTextStroke: "1px rgba(255,255,255,0.08)",
    textShadow: "0 0 20px rgba(255, 255, 255, 0.05)",
    fontFamily: "sans-serif",
    letterSpacing: "-0.05em",
  }}
>
  Eaiser AI
</span>

      {/* Try Now Button */}
      {/* <div className="absolute top-6 right-6 sm:top-8 sm:right-10 z-10">
        <button
          onClick={() => (window.location.href = "/snapfix")}
          className="px-5 py-2 border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-widest font-mono hover:bg-amber-50 hover:text-black transition"
        >
          TRY NOW
        </button>
      </div> */}

      {/* Center Content */}
      <div className="z-10 text-center max-w-lg sm:max-w-2xl">
        <p className="text-white text-xl sm:text-2xl md:text-3xl font-light leading-relaxed">
          Report community issues effortlessly with <br />
          <TrueFocus
            sentence="AI powered Analysis"
            manualMode={false}
            blurAmount={5}
            borderColor="blue"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </p>
      </div>
    </div>
  );
}
