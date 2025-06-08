import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import './Home.css';

const GradientText = ({ children }) => (
  <span
    style={{
      background: "linear-gradient(90deg, #FBCB8A 0%, #F38BA0 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: 700,
    }}
  >
    {children}
  </span>
);

export default function SnapfixHero() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "radial-gradient(circle at 20% 30%, #1E1E1E 0%, #000000 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large background text */}
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "22vw",
          fontWeight: 800,
          color: "rgba(255,255,255,0.04)",
          WebkitTextStroke: "1px rgba(255,255,255,0.08)",
          textShadow: "0 0 20px rgba(255, 255, 255, 0.05)",
          letterSpacing: "-0.05em",
          userSelect: "none",
          zIndex: 1,
          fontFamily: "sans-serif",
        }}
      >
        SnapFix
      </span>

      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: 700,
        }}
      >
        <span
  className="home-text"
  style={{
    fontSize: "2rem",
    fontWeight: 400,
    color: "#fff",
    lineHeight: 1.2,
  }}
>
  Report your local issues, business damages, garbages etc with ease using{" "}
  <GradientText>AI powered Analysis</GradientText>
</span>
      </div>

              <div className="flex items-center mt-120 ml-30">
  <FaArrowUpRightFromSquare className="text-gray-400 hover:text-white w-4 h-4 mr-2 transition" />
  <button className="px-6 py-2 border border-white/20 rounded-full text-white text-sm tracking-widest font-mono hover:bg-white/10 transition">
    TRY NOW
  </button>
</div>


    </div>
  );
}
