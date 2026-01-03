import React from "react";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 260 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="KlickTrading Logo"
      role="img"
    >
      {/* Bars */}
      <rect x="6" y="22" width="6" height="14" rx="2" fill="#34D399" />
      <rect x="18" y="18" width="6" height="18" rx="2" fill="#22C55E" />
      <rect x="30" y="12" width="6" height="24" rx="2" fill="#3B82F6" />
      <rect x="42" y="6" width="6" height="30" rx="2" fill="#2563EB" />

      {/* Arrow */}
      <path
        d="M4 36 C20 40, 40 38, 56 18 L50 18 L62 4 L74 18 L66 18 C48 44, 24 48, 4 42 Z"
        fill="#60A5FA"
      />

      {/* Text */}
      <text
        x="90"
        y="32"
        fontSize="24"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="600"
        fill="currentColor"
      >
        KlickTrading
      </text>
    </svg>
  );
};

export default Logo;
