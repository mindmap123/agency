import { Zap, Shield, Smartphone, TrendingUp, Users, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const advantages = [
  {
    icon: Zap,
    title: "Performance Ultra-Rapide",
    description: "Sites web optimisés pour des temps de chargement éclair. Stack moderne React + Vite pour des performances maximales.",
  },
  {
    icon: Shield,
    title: "Expertise GSO Unique",
    description: "Pionniers du GSO en France. Optimisation avancée pour ChatGPT, Claude et tous les moteurs IA émergents.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Approche mobile-first pour une expérience parfaite sur tous les écrans. Design responsive et adaptatif.",
  },
  {
    icon: TrendingUp,
    title: "ROI Mesurable",
    description: "Suivi détaillé et reporting transparent. Analytics avancés pour mesurer votre retour sur investissement.",
  },
  {
    icon: Users,
    title: "Accompagnement Personnalisé",
    description: "Équipe locale à Bordeaux, disponible et réactive. Support dédié pour votre réussite digitale.",
  },
  {
    icon: Clock,
    title: "Délais Respectés",
    description: "Méthodologie agile et processus optimisés. Livraison dans les temps, sans compromis sur la qualité.",
  },
];

export default function Advantages() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="avantages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Pourquoi Next Level ?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une expertise unique qui fait la différence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {advantages.map((advantage, index) => {
            const { ref, isVisible } = useScrollAnimation();
            const Icon = advantage.icon;
            
            return (
              <div
                key={index}
                ref={ref}
                className={`flex gap-6 fade-in ${isVisible ? 'visible' : ''}`}
                data-testid={`advantage-${index}`}
              >
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${
                    index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'
                  } rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${
                      index % 2 === 0 ? 'text-primary' : 'text-secondary'
                    }`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
