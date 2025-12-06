interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8" }: LogoProps) {
  return (
    <img 
      src="/logos/logo.png" 
      alt="Next Level - Agence web Bordeaux" 
      className={className}
    />
  );
}
