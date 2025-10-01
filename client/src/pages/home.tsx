import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Monitor, 
  Sparkles, 
  TrendingUp, 
  RefreshCw,
  Wrench,
  MapPin,
  Mail,
  Phone,
  Menu,
  X,
  Code,
  ShoppingCart,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Search,
  Megaphone,
  Bot,
  Zap,
  FileText
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    console.log("Form data:", data);
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans un délai de 24h.",
    });
    
    form.reset();
  };

  const expertises = [
    {
      icon: Code,
      title: "Création de site internet",
      description: "Notre agence de création de site web est spécialisée dans le développement de sites modernes et performants.",
    },
    {
      icon: ShoppingCart,
      title: "SEO & Référencement",
      description: "Stratégies SEO efficaces pour renforcer votre présence en ligne et attirer vos clients.",
    },
    {
      icon: Sparkles,
      title: "GSO - Recherche IA",
      description: "Optimisation pour les moteurs de recherche IA : ChatGPT, Claude, Perplexity et Gemini.",
    },
    {
      icon: TrendingUp,
      title: "Google Ads",
      description: "Campagnes publicitaires ciblées et optimisées pour maximiser votre retour sur investissement.",
    },
    {
      icon: RefreshCw,
      title: "Refonte de site internet",
      description: "Donnez un nouveau souffle à votre site internet pour de meilleures performances.",
    },
    {
      icon: Wrench,
      title: "Maintenance de site internet",
      description: "Assistance professionnelle pour surveiller, mettre à jour et maintenir votre site web.",
    },
  ];

  const stats = [
    { value: "50+", label: "projets réalisés", sublabel: "Sites vitrines et e-commerce" },
    { value: "5", label: "années d'expérience", sublabel: "Des profils experts à chaque pôle" },
    { value: "8", label: "profils experts", sublabel: "Pour vous accompagner à chaque étape" },
    { value: "4,9/5", label: "note sur Google", sublabel: "Reflétant la satisfaction de nos clients" },
  ];

  const technologies = [
    { name: "WordPress", icon: Code },
    { name: "Shopify", icon: ShoppingCart },
    { name: "React", icon: Code },
    { name: "Next.js", icon: Code },
  ];

  const projects = [
    {
      category: "Site vitrine",
      title: "Restaurant Le Grand Marché",
      description: "Site vitrine moderne pour restaurant gastronomique bordelais avec système de réservation.",
      tag: "Site vitrine",
    },
    {
      category: "E-commerce",
      title: "Cave à Vins Prestige",
      description: "Boutique e-commerce pour cave à vins premium avec plus de 500 références.",
      tag: "E-commerce",
    },
    {
      category: "Site vitrine",
      title: "Cabinet d'Avocats Associés",
      description: "Site professionnel pour cabinet d'avocats avec blog juridique et prise de rendez-vous.",
      tag: "Site vitrine",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary" style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                Next Level
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-all font-medium text-sm inline-flex items-center gap-2 shadow-lg shadow-primary/25"
                data-testid="link-rdv-nav"
              >
                Prendre RDV
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg hover:bg-primary/10 transition-colors"
                data-testid="button-menu"
              >
                <Menu className="w-6 h-6 text-foreground" />
              </button>
            </div>

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

          {mobileMenuOpen && (
            <div className="absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-xl shadow-2xl border-t border-border">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-2">
                <a
                  href="#expertises"
                  className="block py-3 px-4 rounded-lg text-foreground hover:bg-primary/10 transition-all font-medium text-lg group"
                  data-testid="link-services-mobile"
                >
                  <span className="flex items-center justify-between">
                    Expertises
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </span>
                </a>
                <a
                  href="#gso"
                  className="block py-3 px-4 rounded-lg text-foreground hover:bg-primary/10 transition-all font-medium text-lg group"
                  data-testid="link-gso-mobile"
                >
                  <span className="flex items-center justify-between">
                    GSO
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </span>
                </a>
                <a
                  href="#agence"
                  className="block py-3 px-4 rounded-lg text-foreground hover:bg-primary/10 transition-all font-medium text-lg group"
                  data-testid="link-advantages-mobile"
                >
                  <span className="flex items-center justify-between">
                    L'agence
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </span>
                </a>
                <a
                  href="#realisations"
                  className="block py-3 px-4 rounded-lg text-foreground hover:bg-primary/10 transition-all font-medium text-lg group"
                  data-testid="link-projects-mobile"
                >
                  <span className="flex items-center justify-between">
                    Réalisations
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </span>
                </a>
                <a
                  href="#contact"
                  className="block py-3 px-4 rounded-lg text-foreground hover:bg-primary/10 transition-all font-medium text-lg group"
                  data-testid="link-contact-mobile"
                >
                  <span className="flex items-center justify-between">
                    Contact
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </span>
                </a>
                <div className="pt-4 mt-4 border-t border-border">
                  <a
                    href="#contact"
                    className="block bg-primary text-primary-foreground px-6 py-3.5 rounded-lg hover:bg-primary/90 transition-all font-semibold text-center shadow-lg shadow-primary/25"
                    data-testid="link-rdv-mobile"
                  >
                    Prendre RDV 📅
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              Agence web à Bordeaux
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Située au cœur de Bordeaux, Next Level est une agence digitale spécialisée dans la <strong className="text-foreground font-semibold">création de site internet</strong> sur-mesure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-md text-base font-semibold hover:bg-primary/90 transition-colors"
                data-testid="button-hero-start-project"
              >
                Nous contacter
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto border border-border px-8 py-3 rounded-md text-base font-semibold hover:border-primary hover:text-primary transition-colors"
                data-testid="button-hero-discover-services"
              >
                Prendre RDV 📅
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              L'agence web <span className="accent-text">Next Level</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Avec près de 5 ans d'expérience, Next Level est reconnue pour son <strong>expertise en développement</strong> de solutions digitales sur-mesure.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Grâce à notre expertise et notre réactivité, nous avons établi une relation de confiance durable avec l'ensemble de nos clients.
            </p>
            <a
              href="#realisations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Découvrir l'agence <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Expertises Section */}
      <section id="expertises" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Découvrez l'ensemble de nos <span className="accent-text">expertises</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Que votre objectif soit de créer un site innovant, de lancer une boutique en ligne, d'améliorer votre marketing digital ou votre SEO, nous sommes à vos côtés. Nous vous proposons des solutions efficaces et pérennes qui répondent à vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {expertises.map((expertise, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow fade-in"
                data-testid={`card-service-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <expertise.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{expertise.title}</h3>
                <p className="text-muted-foreground">{expertise.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center fade-in">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Nos expertises <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Section with Image Placeholder */}
      <section id="agence" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Next Level, votre <span className="accent-text">agence web</span> à Bordeaux
              </h2>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Découvrez l'ensemble de nos expertises digitales
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Que votre objectif soit de créer un site innovant, de lancer une boutique en ligne, d'améliorer votre marketing digital ou votre référencement, nous sommes à vos côtés. Nous vous proposons des solutions efficaces et pérennes qui répondent à vos besoins.
              </p>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                SEO & GSO : Dominez les moteurs de recherche traditionnels et IA
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Au-delà du référencement Google classique, nous optimisons votre présence sur les moteurs de recherche nouvelle génération. Grâce à notre expertise en <strong>GSO (Generative Search Optimization)</strong>, votre entreprise apparaît dans les réponses de ChatGPT, Claude, Perplexity, Gemini et DeepSeek. Cette visibilité sur les intelligences artificielles est devenue aussi cruciale que le SEO traditionnel pour capter vos futurs clients.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                De plus, nous gérons vos projets de refonte, nous nous chargeons de la maintenance et de l'hébergement de vos sites, élaborons des stratégies SEO et GSO complètes, et optimisons vos campagnes Google Ads pour maximiser votre retour sur investissement et renforcer durablement votre présence en ligne.
              </p>
              <a
                href="#realisations"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                Nos réalisations <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="fade-in">
              <div className="bg-muted rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <Monitor className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Photo de l'équipe Next Level</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Notre expertise en <span className="accent-text">développement web</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-in">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <tech.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO, GSO et Acquisition Digitale Section */}
      <section id="gso" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              <span className="accent-text">SEO, GSO et Acquisition Digitale</span> : <br />
              Propulsez votre visibilité en ligne
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
              Le référencement est le pilier de votre succès digital. Next Level déploie une stratégie d'acquisition complète qui combine les techniques éprouvées du SEO traditionnel et les innovations du GSO (Generative Search Optimization). Notre objectif : vous positionner là où vos clients vous cherchent, que ce soit sur Google, ChatGPT, Claude ou Perplexity.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Nous mettons en place des stratégies data-driven et des techniques de growth hacking pour maximiser votre ROI. Selon votre secteur et vos objectifs, nous activons les leviers les plus performants : SEA, marketing automation, optimisation technique ou création de contenu optimisé pour les moteurs IA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 fade-in">
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Search className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">SEO - Référencement naturel Google</h3>
              <p className="text-muted-foreground">Positionnement durable sur les requêtes stratégiques</p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Bot className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">GSO - Optimisation pour moteurs IA</h3>
              <p className="text-muted-foreground">Visibilité sur ChatGPT, Claude, Perplexity, Gemini, DeepSeek, Grok</p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Optimisation technique & hébergement</h3>
              <p className="text-muted-foreground">Performance, sécurité et vitesse de chargement</p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Rédaction de contenu SEO/GSO</h3>
              <p className="text-muted-foreground">Contenus optimisés pour humains et intelligences artificielles</p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Megaphone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">SEA - Campagnes Google Ads</h3>
              <p className="text-muted-foreground">Acquisition payante ciblée et rentable</p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <RefreshCw className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Marketing automation</h3>
              <p className="text-muted-foreground">Nurturing et conversion automatisés</p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all group lg:col-span-3 md:col-span-2">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Growth hacking</h3>
              <p className="text-muted-foreground">Stratégies innovantes pour une croissance accélérée</p>
            </div>
          </div>

          <div className="text-center fade-in">
            <p className="text-xl font-semibold text-foreground mb-6">
              Nous transformons votre présence en ligne en machine d'acquisition performante et mesurable.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {["ChatGPT", "Claude", "Perplexity", "Gemini", "DeepSeek", "Grok"].map((llm, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border text-center hover:shadow-lg transition-shadow"
                  data-testid={`llm-${index}`}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-xs">{llm}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="realisations" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nos <span className="accent-text">projets</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow fade-in"
              >
                <div className="bg-muted aspect-video flex items-center justify-center">
                  <Monitor className="w-12 h-12 text-muted-foreground" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Voir le projet <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Vous avez un projet <span className="accent-text">web</span> ? 🚀
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contactez-nous via notre formulaire de contact, nous reviendrons vers vous dans <strong>un délai de 24h.</strong>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Demander un devis
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Questions <span className="accent-text">fréquentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tout ce que vous devez savoir sur notre agence web à Bordeaux
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border fade-in">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-semibold" data-testid="faq-trigger-1">
                  Qu'est-ce qu'une agence web à Bordeaux ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Une agence web à Bordeaux est une entreprise spécialisée dans la création et l'optimisation de la présence digitale des entreprises. Next Level accompagne les professionnels bordelais dans leur transformation numérique en proposant des solutions sur mesure : sites internet performants, référencement SEO et GSO, et publicité digitale.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-semibold" data-testid="faq-trigger-2">
                  Quels services propose une agence web à Bordeaux ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Création de sites internet modernes et responsive</li>
                    <li>Référencement naturel SEO pour Google</li>
                    <li>GSO (Generative Search Optimization) pour les moteurs IA (ChatGPT, Claude, Perplexity, Gemini, DeepSeek)</li>
                    <li>Publicité Google Ads et campagnes digitales</li>
                    <li>Maintenance et hébergement de sites web</li>
                    <li>Refonte de sites existants</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-semibold" data-testid="faq-trigger-3">
                  Pourquoi faire appel à une agence web basée à Bordeaux ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Proximité géographique facilitant les échanges et réunions en présentiel</li>
                    <li>Connaissance approfondie du tissu économique bordelais et de ses spécificités</li>
                    <li>Disponibilité et réactivité accrues grâce au même fuseau horaire</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-semibold" data-testid="faq-trigger-4">
                  Combien coûte une agence web à Bordeaux ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Site vitrine professionnel : à partir de 1 000€</li>
                    <li>Site e-commerce : à partir de 5 000€</li>
                    <li>Prestations SEO/GSO : forfaits mensuels à partir de 800€/mois</li>
                  </ul>
                  <p className="mt-3">Les tarifs varient selon la complexité du projet, les fonctionnalités souhaitées et l'accompagnement requis.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg font-semibold" data-testid="faq-trigger-5">
                  Quelles entreprises peuvent bénéficier des services d'une agence web à Bordeaux ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>TPE et PME souhaitant développer leur présence en ligne</li>
                    <li>Commerces et artisans bordelais cherchant à digitaliser leur activité</li>
                    <li>Startups nécessitant un site performant et évolutif</li>
                    <li>Grandes entreprises recherchant une expertise locale pour des projets spécifiques</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-lg font-semibold" data-testid="faq-trigger-6">
                  Une agence web à Bordeaux peut-elle gérer un projet à distance ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolument. Bien que basée à Bordeaux, Next Level accompagne des clients partout en France et à l'international. Nous combinons rencontres physiques pour les clients bordelais et visioconférences efficaces pour les projets à distance, garantissant le même niveau de qualité et de suivi quel que soit votre emplacement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left text-lg font-semibold" data-testid="faq-trigger-7">
                  Pourquoi Next Level est-elle une des meilleures agences web à Bordeaux ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Next Level se distingue par son expertise de pointe en GSO, une technologie d'avenir que peu d'agences maîtrisent encore. Nous ne nous contentons pas de vous positionner sur Google : nous assurons votre visibilité sur les intelligences artificielles qui transforment la recherche d'information. Notre approche combine performance technique, design moderne 2025 et stratégies d'optimisation avancées pour garantir des résultats mesurables et durables. À Bordeaux, nous sommes pionniers du référencement nouvelle génération.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Parlons de votre projet
            </h2>
            <p className="text-lg text-muted-foreground">
              Contactez-nous pour un audit gratuit et un devis personnalisé
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 lg:p-12 border border-border fade-in">
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
                            <SelectItem value="refonte">Refonte de site</SelectItem>
                            <SelectItem value="maintenance">Maintenance</SelectItem>
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
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors"
                  data-testid="button-submit-contact"
                >
                  Envoyer ma demande
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Réponse sous 24h • Audit gratuit • Devis personnalisé
                </p>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Next Level</h3>
              <p className="text-secondary-foreground/80 mb-6">
                Agence web moderne basée à Bordeaux, spécialisée dans la création de sites performants et l'optimisation pour les moteurs de recherche classiques et IA.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#expertises"
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                    data-testid="link-footer-services"
                  >
                    Expertises
                  </a>
                </li>
                <li>
                  <a
                    href="#gso"
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                    data-testid="link-footer-gso"
                  >
                    GSO
                  </a>
                </li>
                <li>
                  <a
                    href="#realisations"
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                    data-testid="link-footer-advantages"
                  >
                    Réalisations
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                    data-testid="link-footer-contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-secondary-foreground/80">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Bordeaux, France</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:contact@nextlevel-web.fr"
                    className="hover:text-secondary-foreground transition-colors"
                    data-testid="link-footer-email"
                  >
                    contact@nextlevel-web.fr
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+33612345678"
                    className="hover:text-secondary-foreground transition-colors"
                    data-testid="link-footer-phone"
                  >
                    +33 6 12 34 56 78
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-secondary-foreground/20 text-center text-secondary-foreground/70 text-sm">
            <p>
              © 2025 Next Level. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
