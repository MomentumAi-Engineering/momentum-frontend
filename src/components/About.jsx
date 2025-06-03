import React from "react";

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
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#fff",
            fontFamily: "sans-serif",
            lineHeight: 1.2,
          }}
        >
          Superhuman saves teams over
          <br />
          <GradientText>15 million hours</GradientText> every single year.
        </span>
      </div>
    </div>
  );
}
