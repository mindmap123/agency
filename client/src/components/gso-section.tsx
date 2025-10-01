import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { LLMLogos } from "./llm-logos";

export default function GSOSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

  return (
    <section id="gso" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
            <span className="text-sm font-semibold gradient-text">NOUVELLE GÉNÉRATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">GSO - Recherche IA</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Optimisez votre présence sur les moteurs de recherche d'intelligence artificielle. Soyez trouvé par ChatGPT, Claude, Perplexity et les autres LLM.
          </p>
        </div>
        
        <div
          ref={cardRef}
          className={`bg-card rounded-3xl p-8 lg:p-12 border border-border fade-in ${cardVisible ? 'visible' : ''}`}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Présence sur les principaux LLM</h3>
          
          <LLMLogos />
          
          <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="text-center p-4">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <p className="text-muted-foreground text-sm">Couverture LLM</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold gradient-text mb-2">5x</div>
              <p className="text-muted-foreground text-sm">Plus de visibilité</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-muted-foreground text-sm">Présence active</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
