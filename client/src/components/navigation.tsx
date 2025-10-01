import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">Next Level</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("#services")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("#gso")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-gso"
            >
              GSO
            </button>
            <button
              onClick={() => scrollToSection("#avantages")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-avantages"
            >
              Avantages
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
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
          <div className="md:hidden py-4 border-t border-border" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("#services")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("#gso")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="mobile-nav-gso"
              >
                GSO
              </button>
              <button
                onClick={() => scrollToSection("#avantages")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="mobile-nav-avantages"
              >
                Avantages
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
