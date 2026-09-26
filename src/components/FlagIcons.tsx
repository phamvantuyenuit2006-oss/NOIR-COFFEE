import React from 'react';

export const VietnamFlag: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 rounded-full shadow-sm ring-1 ring-black/10 overflow-hidden ${className}`}
    >
      {/* Red Circular Field */}
      <circle cx="256" cy="256" r="256" fill="#DA251D" />
      {/* Centered Yellow Star */}
      <polygon
        points="256,96 295,216 422,216 320,290 359,410 256,336 153,410 192,290 90,216 217,216"
        fill="#FFFF00"
      />
    </svg>
  );
};

export const UKFlag: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 rounded-full shadow-sm ring-1 ring-black/10 overflow-hidden ${className}`}
    >
      <mask id="uk-circle-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
        <circle cx="256" cy="256" r="256" fill="#FFFFFF" />
      </mask>
      <g mask="url(#uk-circle-mask)">
        {/* Navy Blue Background */}
        <rect width="512" height="512" fill="#012169" />
        
        {/* White Diagonals (St Andrew & St Patrick) */}
        <path d="M0,0 L512,512 M512,0 L0,512" stroke="#FFFFFF" strokeWidth="68" />
        
        {/* Red Diagonals (St Patrick) */}
        <path d="M0,0 L256,256 M512,512 L256,256" stroke="#C8102E" strokeWidth="24" transform="translate(12, -12)" />
        <path d="M512,0 L256,256 M0,512 L256,256" stroke="#C8102E" strokeWidth="24" transform="translate(-12, -12)" />
        <path d="M0,0 L512,512 M512,0 L0,512" stroke="#C8102E" strokeWidth="24" />

        {/* White Cross (St George) */}
        <path d="M256,0 V512 M0,256 H512" stroke="#FFFFFF" strokeWidth="110" />
        
        {/* Red Cross (St George) */}
        <path d="M256,0 V512 M0,256 H512" stroke="#C8102E" strokeWidth="66" />
      </g>
    </svg>
  );
};
