import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-spain.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a preparação para o DELE A2 e como conquistar minha nacionalidade espanhola.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Conquiste sua <span className="text-secondary">Nacionalidade Espanhola</span> com o DELE A2
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 font-light opacity-90 max-w-3xl mx-auto">
            Preparação online personalizada para brasileiros que vivem no exterior
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero"
              size="xl"
              onClick={handleWhatsAppClick}
              className="group"
            >
              <Phone className="mr-2 h-5 w-5" />
              Fale comigo e garanta sua preparação
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-secondary mb-2">11</div>
              <div className="text-sm opacity-80">Anos vivendo na Espanha</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-secondary mb-2">A2</div>
              <div className="text-sm opacity-80">Nível necessário para nacionalidade</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm opacity-80">Aulas online personalizadas</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;