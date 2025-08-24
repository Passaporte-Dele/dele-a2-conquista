import logoImage from "@/assets/logo.png";
import CtaButton from "@/components/CtaButton";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Início", href: "#hero", id: "hero" },
    { label: "Sobre", href: "#about", id: "about" },
    { label: "Exame DELE", href: "#exam", id: "exam" },
    { label: "Metodologia", href: "#method", id: "method" },
    { label: "Planos", href: "#plans", id: "plans" },
    { label: "Depoimentos", href: "#testimonials", id: "testimonials" },
    { label: "Contato", href: "#contact", id: "contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-lg border-b transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="flex items-center">
              <img 
                src={logoImage}
                alt="DELE A2 Conquista Logo"
                className="h-10 w-auto lg:h-12"
              />
            </div>
            {/* <div className="font-bold text-xl lg:text-2xl spanish-accent">
              DELE A2
              <span className="block text-sm font-normal text-muted-foreground leading-none">
                Conquista
              </span>
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <CtaButton>
              Quero começar! 🇪🇸
            </CtaButton>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur-md">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-accent transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4">
                <CtaButton>
                  Quero começar! 🇪🇸
                </CtaButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
