import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Logo from "@/components/Logo";
import { 
  Monitor, 
  Sparkles, 
  TrendingUp, 
  RefreshCw,
  Wrench,
  MapPin,
  Mail,
  Phone,
  Code,
  ShoppingCart,
  ArrowUpRight,
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
    { value: "180+", label: "Projets Livrés", sublabel: "Des sites vitrines, e-commerce et solutions digitales qui génèrent du business." },
    { value: "5", label: "Années d'Expérience", sublabel: "Une expertise forgée sur le terrain, au service de votre croissance." },
    { value: "8", label: "Profils Experts", sublabel: "Développeurs, designers, stratèges marketing : une équipe complète pour vous accompagner." },
    { value: "9/10", label: "Nos clients reviennent. Encore et encore.", sublabel: "La confiance, ça ne se décrète pas, ça se prouve." },
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
          <div className="flex items-center justify-between h-36">
            <div className="flex-shrink-0">
              <a href="/" className="block" data-testid="logo-link">
                <Logo className="h-32 w-auto" />
              </a>
            </div>

            <div className="flex items-center">
              <a
                href="https://cal.com/nextlevelagency"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-all font-medium text-sm inline-flex items-center gap-2 shadow-lg shadow-primary/25 group"
                data-testid="link-rdv-nav"
              >
                Prendre RDV
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
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
              Ici, pas de blabla marketing. Juste une obsession : <strong className="text-foreground font-semibold">faire grimper vos ventes</strong>.
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
                href="https://cal.com/nextlevelagency"
                target="_blank"
                rel="noopener noreferrer"
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
              L'agence web Next Level
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Depuis près de 5 ans, Next Level accompagne les entreprises dans leur croissance digitale en créant des solutions sur-mesure, performantes et pensées pour générer des résultats concrets.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Notre réactivité et notre approche orientée business nous ont permis de bâtir des partenariats solides et durables avec nos clients, bien au-delà d'une simple relation prestataire.
            </p>
            <a
              href="#realisations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline group"
            >
              Découvrir l'agence 
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Expertises Section */}
      <section id="expertises" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Découvrez nos expertises
            </h2>
            <p className="text-xl sm:text-2xl text-foreground font-semibold mb-4">
              Votre objectif : attirer plus de clients, vendre plus, et prendre une longueur d'avance.
            </p>
            <p className="text-xl sm:text-2xl text-muted-foreground">
              Notre mission : transformer vos idées en solutions digitales performantes, concrètes et durables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow fade-in" data-testid="card-service-0">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Création de site internet</h3>
              <p className="text-muted-foreground">Des sites modernes, rapides et pensés pour convertir vos visiteurs en clients.</p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow fade-in" data-testid="card-service-1">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">SEO & Référencement</h3>
              <p className="text-muted-foreground">Des stratégies SEO taillées pour vous faire remonter dans Google et capter un trafic qualifié.</p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow fade-in" data-testid="card-service-2">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">GSO – Recherche IA</h3>
              <p className="text-muted-foreground">Soyez visibles là où vos prospects posent déjà leurs questions : ChatGPT, Claude, Perplexity, Gemini.</p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow fade-in" data-testid="card-service-3">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Google Ads</h3>
              <p className="text-muted-foreground">Des campagnes ciblées, optimisées et rentables pour booster vos ventes rapidement.</p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow fade-in" data-testid="card-service-4">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-bold mb-3">Refonte de site internet</h3>
              <p className="text-muted-foreground">On ne se contente pas d'un « lifting » : on repense votre site pour en faire un véritable levier de performance.</p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow fade-in" data-testid="card-service-5">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-3">Maintenance de site internet</h3>
              <p className="text-muted-foreground">Sécurité, mises à jour, support : votre site reste toujours en pleine forme, sans mauvaise surprise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 fade-in">
            Nos chiffres parlent pour nous
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-foreground mb-3">
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
              <span className="accent-text">SEO, GSO et Acquisition Digitale</span> <br />
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
            <h3 className="text-2xl font-bold mb-3 text-foreground">Problème/Solution</h3>
            <p className="text-xl text-muted-foreground mb-6">
              Google c'est hier. Les IA, c'est maintenant. On vous y met.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {[
                { name: "ChatGPT", bg: "from-emerald-500/20 to-teal-500/20", icon: "bg-gradient-to-br from-emerald-500 to-teal-600" },
                { name: "Claude", bg: "from-amber-500/20 to-orange-500/20", icon: "bg-gradient-to-br from-amber-500 to-orange-600" },
                { name: "Perplexity", bg: "from-blue-500/20 to-cyan-500/20", icon: "bg-gradient-to-br from-blue-500 to-cyan-600" },
                { name: "Gemini", bg: "from-purple-500/20 to-pink-500/20", icon: "bg-gradient-to-br from-purple-500 to-pink-600" },
                { name: "DeepSeek", bg: "from-indigo-500/20 to-blue-500/20", icon: "bg-gradient-to-br from-indigo-500 to-blue-600" },
                { name: "Grok", bg: "from-slate-500/20 to-gray-500/20", icon: "bg-gradient-to-br from-slate-500 to-gray-600" },
              ].map((llm, index) => (
                <div
                  key={index}
                  className="group bg-card p-4 rounded-lg border border-border text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
                  data-testid={`llm-${index}`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${llm.bg} rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
                    <div className={`w-6 h-6 ${llm.icon} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <span className="font-semibold text-xs">{llm.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Un projet qui mérite le niveau supérieur ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Racontez-nous votre ambition. Nous vous proposons une stratégie sur-mesure pour transformer votre présence digitale en machine à résultats. Premier échange sous 24h.
          </p>
          <a
            href="https://cal.com/nextlevelagency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors"
            data-testid="button-cta-project"
          >
            Discutons de votre projet
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
                  Quelle est la différence entre SEO et GSO ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Le SEO (Search Engine Optimization) optimise votre visibilité sur les moteurs de recherche traditionnels comme Google. Le GSO (Generative Search Optimization) vous positionne dans les réponses des intelligences artificielles comme ChatGPT, Claude, Perplexity, Gemini et DeepSeek. Aujourd'hui, vos clients ne cherchent plus seulement sur Google : ils posent leurs questions directement aux IA. Next Level maîtrise les deux pour vous garantir une visibilité maximale.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-semibold" data-testid="faq-trigger-2">
                  Pourquoi devrais-je investir dans le GSO maintenant ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Parce que vos concurrents ne le font pas encore. Chaque jour, des millions de personnes obtiennent des recommandations d'entreprises via ChatGPT ou Claude. Si vous n'y êtes pas, vous perdez ces clients au profit de ceux qui ont anticipé. Nous sommes pionniers de cette technologie à Bordeaux et vous donnons 2-3 ans d'avance sur votre marché.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-semibold" data-testid="faq-trigger-3">
                  Combien coûte un site web avec Next Level ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Un site vitrine professionnel démarre à 1 000€. Les sites e-commerce commencent à 5 000€. Nos prestations SEO/GSO sont proposées en forfaits mensuels à partir de 800€. Chaque projet est unique : nous adaptons nos solutions à vos objectifs et votre budget pour maximiser votre retour sur investissement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-semibold" data-testid="faq-trigger-4">
                  Travaillez-vous uniquement avec des entreprises bordelaises ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Non. Bien que basés à Bordeaux, nous accompagnons des clients partout en France et à l'international. La proximité nous permet des rencontres physiques avec nos clients locaux, mais notre expertise digitale n'a pas de frontières. Nous combinons rendez-vous en présentiel et visioconférences selon vos besoins.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg font-semibold" data-testid="faq-trigger-5">
                  Quelle est votre approche pour garantir des résultats ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Approche data-driven : nous suivons des KPIs précis (trafic, conversions, ROI) et optimisons en continu. Chaque stratégie est construite sur mesure selon votre secteur et vos objectifs. Nous ne vendons pas de promesses : 9 clients sur 10 nous refont confiance pour un nouveau projet parce que les résultats sont au rendez-vous.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-lg font-semibold" data-testid="faq-trigger-6">
                  Puis-je avoir deux sites différents pour la même activité ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolument. Avoir deux sites avec des positionnements distincts peut multiplier votre visibilité. L'essentiel est de différencier les contenus, d'utiliser des numéros de téléphone différents et de créer des identités distinctes pour éviter les problèmes de duplication avec Google. Nous accompagnons plusieurs clients dans cette stratégie multisite.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left text-lg font-semibold" data-testid="faq-trigger-7">
                  Combien de temps avant de voir des résultats en SEO/GSO ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Le SEO traditionnel montre des résultats tangibles entre 3 et 6 mois. Le GSO peut être plus rapide selon votre secteur : certains clients apparaissent dans les IA en quelques semaines. Nous fournissons des rapports mensuels détaillés pour suivre précisément votre progression et ajuster la stratégie en temps réel.
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
              Transformons votre ambition en résultats concrets
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Parlez-nous de votre projet. Nous analysons votre situation actuelle, identifions les opportunités et vous proposons une stratégie digitale sur-mesure. Premier échange sous 24h, audit gratuit inclus.
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
                        <FormLabel>Email professionnel</FormLabel>
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
                        <FormLabel>Votre principal objectif</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger data-testid="select-service">
                              <SelectValue placeholder="Sélectionner un objectif" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="conversion">
                              Créer un site qui convertit
                            </SelectItem>
                            <SelectItem value="seo-gso">Exploser mon trafic (SEO/GSO)</SelectItem>
                            <SelectItem value="ia">Dominer sur les moteurs IA</SelectItem>
                            <SelectItem value="ads">Lancer des campagnes Google Ads rentables</SelectItem>
                            <SelectItem value="refonte">Refondre mon site existant</SelectItem>
                            <SelectItem value="maintenance">Sécuriser maintenance et hébergement</SelectItem>
                            <SelectItem value="strategy">Stratégie digitale globale</SelectItem>
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
                      <FormLabel>Parlez-nous de votre projet</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Quel est votre objectif principal ? Où en êtes-vous aujourd'hui ? Qu'est-ce qui vous empêche d'avancer ?"
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
                  Accélérer mon business
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  ✓ Réponse garantie sous 24h • ✓ Audit de votre situation actuelle offert • ✓ Stratégie personnalisée • ✓ Pas d'engagement
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
