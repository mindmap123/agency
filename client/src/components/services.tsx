import { Monitor, Search, Zap, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: Monitor,
    title: "Création de sites",
    description: "Sites web modernes, rapides et performants avec React, Vite et les dernières technologies.",
    color: "primary",
  },
  {
    icon: Search,
    title: "Référencement SEO",
    description: "Optimisation Google pour être visible et attirer vos clients idéaux organiquement.",
    color: "secondary",
  },
  {
    icon: Zap,
    title: "GSO - IA Search",
    description: "Optimisation pour ChatGPT, Claude, Perplexity et autres moteurs de recherche IA.",
    color: "gradient",
  },
  {
    icon: TrendingUp,
    title: "Google Ads",
    description: "Campagnes publicitaires ciblées pour des résultats rapides et mesurables.",
    color: "primary",
  },
];

export default function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Nos Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions complètes pour votre succès digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const { ref, isVisible } = useScrollAnimation();
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                ref={ref}
                className={`bg-card p-8 rounded-2xl border border-border card-hover fade-in ${isVisible ? 'visible' : ''}`}
                data-testid={`service-card-${index}`}
              >
                <div className={`w-14 h-14 ${
                  service.color === 'primary' ? 'bg-primary/10' :
                  service.color === 'secondary' ? 'bg-secondary/10' :
                  'bg-gradient-to-br from-primary/20 to-secondary/20'
                } rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${
                    service.color === 'primary' ? 'text-primary' :
                    service.color === 'secondary' ? 'text-secondary' :
                    'text-primary'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
