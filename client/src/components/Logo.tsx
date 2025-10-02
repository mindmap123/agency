interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 280 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#7B3FF2', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#6B5AED', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#5B9BFF', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Text "NEXT LEVEL" with modern bold style */}
      <text
        x="10"
        y="42"
        fontFamily="Arial Black, Impact, sans-serif"
        fontSize="36"
        fontWeight="900"
        fill="url(#logoGradient)"
        letterSpacing="2"
      >
        NEXT LEVEL
      </text>
      
      {/* Diagonal slash accent */}
      <path
        d="M 110 20 L 95 52"
        stroke="url(#logoGradient)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
