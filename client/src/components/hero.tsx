import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Hero() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: visualRef, isVisible: visualVisible } = useScrollAnimation();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          ref={heroRef}
          className={`text-center fade-in ${heroVisible ? 'visible' : ''}`}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-muted rounded-full">
            <span className="text-sm font-medium text-muted-foreground">🚀 Agence Web Bordeaux</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Propulsez votre<br/>
            <span className="gradient-text">présence digitale</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Nous créons des expériences web modernes, optimisées pour le SEO classique et les moteurs de recherche IA de nouvelle génération.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
              data-testid="button-start-project"
            >
              Démarrer un projet
            </button>
            <button
              onClick={() => scrollToSection("#services")}
              className="w-full sm:w-auto border-2 border-border px-8 py-4 rounded-full text-lg font-semibold hover:border-primary transition-colors"
              data-testid="button-discover-services"
            >
              Découvrir nos services
            </button>
          </div>
        </div>
        
        {/* Hero Visual Element */}
        <div
          ref={visualRef}
          className={`mt-16 relative fade-in ${visualVisible ? 'visible' : ''}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
          <div className="relative bg-card rounded-3xl shadow-2xl p-8 border border-border">
            {/* Modern web interface mockup */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg"></div>
                <div className="h-24 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-lg"></div>
                <div className="h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
