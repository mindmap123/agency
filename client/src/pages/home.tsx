import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Monitor, 
  Search, 
  Zap, 
  TrendingUp, 
  Shield, 
  Smartphone, 
  BarChart3, 
  Users, 
  Clock,
  MapPin,
  Mail,
  Phone,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        const element = document.getElementById(id || "");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  const onSubmit = async (data: ContactFormValues) => {
    // Form submission logic would go here
    console.log("Form data:", data);
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons sous 24h ouvrées.",
    });
    
    form.reset();
  };

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

  const advantages = [
    {
      icon: Zap,
      title: "Performance Ultra-Rapide",
      description: "Sites web optimisés pour des temps de chargement éclair. Stack moderne React + Vite pour des performances maximales.",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Expertise GSO Unique",
      description: "Pionniers du GSO en France. Optimisation avancée pour ChatGPT, Claude et tous les moteurs IA émergents.",
      color: "secondary",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Approche mobile-first pour une expérience parfaite sur tous les écrans. Design responsive et adaptatif.",
      color: "primary",
    },
    {
      icon: BarChart3,
      title: "ROI Mesurable",
      description: "Suivi détaillé et reporting transparent. Analytics avancés pour mesurer votre retour sur investissement.",
      color: "secondary",
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description: "Équipe locale à Bordeaux, disponible et réactive. Support dédié pour votre réussite digitale.",
      color: "primary",
    },
    {
      icon: Clock,
      title: "Délais Respectés",
      description: "Méthodologie agile et processus optimisés. Livraison dans les temps, sans compromis sur la qualité.",
      color: "secondary",
    },
  ];

  const llms = [
    { name: "ChatGPT", gradient: "from-green-400 to-green-600" },
    { name: "Claude", gradient: "from-orange-400 to-red-600" },
    { name: "Perplexity", gradient: "from-blue-400 to-cyan-600" },
    { name: "Gemini", gradient: "from-purple-400 to-pink-600" },
    { name: "DeepSeek", gradient: "from-indigo-400 to-blue-600" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">Next Level</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-services"
              >
                Services
              </a>
              <a
                href="#gso"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-gso"
              >
                GSO
              </a>
              <a
                href="#avantages"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-advantages"
              >
                Avantages
              </a>
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium"
                data-testid="link-contact-nav"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a
                href="#services"
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-services-mobile"
              >
                Services
              </a>
              <a
                href="#gso"
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-gso-mobile"
              >
                GSO
              </a>
              <a
                href="#avantages"
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-advantages-mobile"
              >
                Avantages
              </a>
              <a
                href="#contact"
                className="block bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium text-center"
                data-testid="link-contact-mobile"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-muted rounded-full">
              <span className="text-sm font-medium text-muted-foreground">
                🚀 Agence Web Bordeaux
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Propulsez votre
              <br />
              <span className="gradient-text">présence digitale</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Nous créons des expériences web modernes, optimisées pour le SEO
              classique et les moteurs de recherche IA de nouvelle génération.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
                data-testid="button-hero-start-project"
              >
                Démarrer un projet
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto border-2 border-border px-8 py-4 rounded-full text-lg font-semibold hover:border-primary transition-colors"
                data-testid="button-hero-discover-services"
              >
                Découvrir nos services
              </a>
            </div>
          </div>

          {/* Hero Visual Element */}
          <div className="mt-16 relative fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
            <div className="relative bg-card rounded-3xl shadow-2xl p-8 border border-border">
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

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Nos Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes pour votre succès digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border card-hover fade-in"
                data-testid={`card-service-${index}`}
              >
                <div
                  className={`w-14 h-14 ${
                    service.color === "gradient"
                      ? "bg-gradient-to-br from-primary/20 to-secondary/20"
                      : service.color === "secondary"
                      ? "bg-secondary/10"
                      : "bg-primary/10"
                  } rounded-xl flex items-center justify-center mb-6`}
                >
                  <service.icon
                    className={`w-7 h-7 ${
                      service.color === "secondary"
                        ? "text-secondary"
                        : "text-primary"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GSO Section */}
      <section id="gso" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
              <span className="text-sm font-semibold gradient-text">
                NOUVELLE GÉNÉRATION
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              GSO - Recherche IA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Optimisez votre présence sur les moteurs de recherche
              d'intelligence artificielle. Soyez trouvé par ChatGPT, Claude,
              Perplexity et les autres LLM.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border fade-in">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Présence sur les principaux LLM
            </h3>

            {/* LLM Logos Grid */}
            <div className="logo-grid mb-12">
              {llms.map((llm, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                  data-testid={`llm-${index}`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${llm.gradient} rounded-2xl flex items-center justify-center`}
                  >
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <span className="font-medium text-sm">{llm.name}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center p-4">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <p className="text-muted-foreground text-sm">Couverture LLM</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold gradient-text mb-2">5x</div>
                <p className="text-muted-foreground text-sm">
                  Plus de visibilité
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <p className="text-muted-foreground text-sm">Présence active</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="avantages" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Pourquoi Next Level ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une expertise unique qui fait la différence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex gap-6 fade-in"
                data-testid={`advantage-${index}`}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 ${
                      advantage.color === "secondary"
                        ? "bg-secondary/10"
                        : "bg-primary/10"
                    } rounded-xl flex items-center justify-center`}
                  >
                    <advantage.icon
                      className={`w-6 h-6 ${
                        advantage.color === "secondary"
                          ? "text-secondary"
                          : "text-primary"
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Parlons de votre projet
            </h2>
            <p className="text-xl text-muted-foreground">
              Contactez-nous pour un audit gratuit et un devis personnalisé
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border fade-in">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                data-testid="form-contact"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom complet</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jean Dupont"
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="jean@entreprise.fr"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+33 6 12 34 56 78"
                            {...field}
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service souhaité</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger data-testid="select-service">
                              <SelectValue placeholder="Sélectionner un service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="website">
                              Création de site
                            </SelectItem>
                            <SelectItem value="seo">Référencement SEO</SelectItem>
                            <SelectItem value="gso">GSO - Recherche IA</SelectItem>
                            <SelectItem value="ads">Google Ads</SelectItem>
                            <SelectItem value="all">
                              Tout l'écosystème
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Décrivez votre projet..."
                          rows={5}
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity"
                  data-testid="button-submit-contact"
                >
                  Envoyer ma demande
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Réponse sous 24h ouvrées • Audit gratuit • Devis personnalisé
                </p>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                Next Level
              </h3>
              <p className="text-background/70 mb-6">
                Agence web moderne basée à Bordeaux, spécialisée dans la
                création de sites performants et l'optimisation pour les moteurs
                de recherche classiques et IA.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-background/70 hover:text-background transition-colors"
                    data-testid="link-footer-services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#gso"
                    className="text-background/70 hover:text-background transition-colors"
                    data-testid="link-footer-gso"
                  >
                    GSO
                  </a>
                </li>
                <li>
                  <a
                    href="#avantages"
                    className="text-background/70 hover:text-background transition-colors"
                    data-testid="link-footer-advantages"
                  >
                    Avantages
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-background/70 hover:text-background transition-colors"
                    data-testid="link-footer-contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-background/70">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Bordeaux, France</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:contact@nextlevel-web.fr"
                    className="hover:text-background transition-colors"
                    data-testid="link-footer-email"
                  >
                    contact@nextlevel-web.fr
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+33612345678"
                    className="hover:text-background transition-colors"
                    data-testid="link-footer-phone"
                  >
                    +33 6 12 34 56 78
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-background/20 text-center text-background/60 text-sm">
            <p>
              &copy; 2025 Next Level. Tous droits réservés. |{" "}
              <a href="#" className="hover:text-background transition-colors">
                Mentions légales
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-background transition-colors">
                Confidentialité
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
