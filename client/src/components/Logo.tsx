interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 500 250" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#2E7EE8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#5E9BFF', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Next */}
      <text 
        x="20" 
        y="160" 
        fontSize="140" 
        fontWeight="800" 
        fill="url(#logoGradient)"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
      >
        Next
      </text>
      
      {/* Level */}
      <text 
        x="20" 
        y="220" 
        fontSize="80" 
        fontWeight="600" 
        fill="url(#logoGradient)"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
      >
        Level
      </text>
      
      {/* Arrow */}
      <path 
        d="M 440 80 L 480 40 L 480 120 Z" 
        fill="url(#logoGradient)"
      />
    </svg>
  );
}
