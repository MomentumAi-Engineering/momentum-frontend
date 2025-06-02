import React from 'react';

const Logo = () => {
  return (
    <svg 
      viewBox="0 0 350 100" 
      width={200} 
      height={57}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: '#9f7aea', stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: '#7c3aed', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#6b21a8', stopOpacity: 1}} />
        </linearGradient>
        
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: '#5b21b6', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#c4b5fd', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      {/* Wave arrow icon */}
      <g transform="translate(0, 30)">  {/* shifted left */}
        {/* Main wave path */}
        <path 
          d="M0 20 Q12 5 24 20 Q36 35 48 20 Q60 5 72 20 Q84 35 96 20 L91 25 Q79 40 67 25 Q55 10 43 25 Q31 40 19 25 Q7 10 5 25 Z" 
          fill="url(#waveGradient)" 
          opacity="0.9"
        />
        
        {/* Arrow tip */}
        <path 
          d="M91 15 L105 20 L91 25 L97 20 Z" 
          fill="url(#waveGradient)"
        />
        
        {/* Subtle wave echo for depth */}
        <path 
          d="M0 25 Q12 10 24 25 Q36 40 48 25 Q60 10 72 25 Q84 40 96 25" 
          stroke="url(#waveGradient)" 
          strokeWidth="1.5" 
          fill="none" 
          opacity="0.4"
        />
      </g>
      
      {/* Company name */}
      <text 
        x="140" 
        y="45" 
        fontFamily="Arial, sans-serif" 
        fontSize="32" 
        fontWeight="600" 
        fill="#5b21b6"
      >
        MomentumAI
      </text>
      
      
      
      {/* Subtle accent dot */}
      <circle 
        cx="200" 
        cy="65" 
        r="2" 
        fill="url(#waveGradient)" 
        opacity="0.6"
      />
    </svg>
  );
};

export default Logo;
