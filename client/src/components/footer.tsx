import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Next Level</h3>
            <p className="text-background/70 mb-6">
              Agence web moderne basée à Bordeaux, spécialisée dans la création de sites performants et l'optimisation pour les moteurs de recherche classiques et IA.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="text-background/70 hover:text-background transition-colors text-left"
                  data-testid="footer-link-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#gso")}
                  className="text-background/70 hover:text-background transition-colors text-left"
                  data-testid="footer-link-gso"
                >
                  GSO
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#avantages")}
                  className="text-background/70 hover:text-background transition-colors text-left"
                  data-testid="footer-link-avantages"
                >
                  Avantages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-background/70 hover:text-background transition-colors text-left"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
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
                  data-testid="link-email"
                >
                  contact@nextlevel-web.fr
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+33612345678"
                  className="hover:text-background transition-colors"
                  data-testid="link-phone"
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
  );
}
