interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#2E7EE8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#5E9BFF', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Text "Next Level" */}
      <text
        x="10"
        y="35"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill="url(#logoGradient)"
        letterSpacing="-0.5"
      >
        Next Level
      </text>
      
      {/* Growth Arrow */}
      <g transform="translate(155, 10)">
        {/* Arrow shaft */}
        <path
          d="M 2 28 L 28 2"
          stroke="url(#logoGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Arrow head */}
        <path
          d="M 28 2 L 28 14 M 28 2 L 16 2"
          stroke="url(#logoGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Small accent dots for modern look */}
        <circle cx="8" cy="22" r="2" fill="#2E7EE8" opacity="0.6" />
        <circle cx="15" cy="15" r="2" fill="#5E9BFF" opacity="0.6" />
      </g>
    </svg>
  );
}
