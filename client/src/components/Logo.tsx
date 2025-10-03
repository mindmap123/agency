import logoImage from "@assets/next-level-logo.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8" }: LogoProps) {
  return (
    <img 
      src={logoImage} 
      alt="Next Level - Agence web Bordeaux" 
      className={className}
    />
  );
}
