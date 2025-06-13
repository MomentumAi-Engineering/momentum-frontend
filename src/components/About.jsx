import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./Home.css";
import "./About.css";

const GradientText = ({ children }) => (
  <span
    style={{
      background: "linear-gradient(90deg, #aeb8bb 0%, #2F80ED 100%)",
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
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "100px", // adjust if needed
        paddingBottom: "40px",
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

      {/* Top-right button */}
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 40,
          display: "flex",
          alignItems: "center",
          zIndex: 3,
        }}
      >
        <FaArrowUpRightFromSquare className="text-gray-400 hover:text-white w-4 h-4 mr-2 transition" />
        <button className="px-6 py-2 border border-white/20 rounded-full text-white text-sm tracking-widest font-mono hover:bg-white/10 transition">
          TRY NOW
        </button>
      </div>

      {/* Centered paragraph */}
      <div
        style={{
          textAlign: "center",
          maxWidth: 700,
          zIndex: 2,
        }}
      >
        <span
          className="home-text"
          style={{
            fontSize: "2rem",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.4,
          }}
        >
          Report your local issues, business damages, garbages etc with ease using{" "}
          <GradientText>AI powered Analysis</GradientText>
        </span>
      </div>

      {/* Bottom text */}
    <div className="my-font text-4xl text-center z-2 text-white">
  SnapFix empowers citizens to transform overlooked issues into visible actions that matter.
</div>


    </div>
  );
}
