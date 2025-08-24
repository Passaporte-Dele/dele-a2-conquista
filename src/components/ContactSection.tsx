import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Mail, Video, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá Stephanie! Gostaria de começar minha preparação para o DELE A2 e conquistar minha nacionalidade espanhola. Quando podemos conversar?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:stephanie@deleA2.com?subject=Preparação DELE A2&body=Olá Stephanie! Gostaria de saber mais sobre a preparação para o DELE A2.', '_blank');
  };

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Resposta rápida e atendimento personalizado",
      action: "Falar no WhatsApp",
      onClick: handleWhatsAppClick,
      highlight: true
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "stephanie@deleA2.com",
      action: "Enviar e-mail",
      onClick: handleEmailClick,
      highlight: false
    },
    {
      icon: Video,
      title: "Aulas Online",
      description: "Zoom, Google Meet ou Skype",
      action: "Saiba mais",
      onClick: handleWhatsAppClick,
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Contato</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 spanish-accent">
            📲 Entre em contato agora mesmo
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Estou aqui para ajudar você a conquistar sua nacionalidade espanhola. 
            Vamos conversar sobre seus objetivos e montar o plano ideal!
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {contactOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`p-6 text-center spanish-hover cursor-pointer ${
                option.highlight ? 'bg-gradient-hero text-white border-primary' : 'bg-card'
              }`}
              onClick={option.onClick}
            >
              <div className={`p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center ${
                option.highlight 
                  ? 'bg-white/20' 
                  : 'bg-primary/10'
              }`}>
                <option.icon className={`h-10 w-10 ${
                  option.highlight ? 'text-white' : 'text-primary'
                }`} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                option.highlight ? 'text-white' : 'text-foreground'
              }`}>
                {option.title}
              </h3>
              <p className={`mb-4 ${
                option.highlight ? 'text-white/90' : 'text-muted-foreground'
              }`}>
                {option.description}
              </p>
              <Button 
                variant={option.highlight ? "gold" : "outline"}
                size="sm"
                className={option.highlight ? "" : "hover:bg-primary hover:text-primary-foreground"}
              >
                {option.action}
              </Button>
            </Card>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center mb-16">
          <Card className="p-8 bg-gradient-subtle border-2 border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              🎯 Pronto para conquistar sua nacionalidade espanhola?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Não deixe o tempo passar! Quanto antes você começar sua preparação, 
              mais rápido estará com seu diploma DELE A2 em mãos.
            </p>
            <Button 
              variant="hero"
              size="xl"
              onClick={handleWhatsAppClick}
              className="group"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Fale comigo agora
              <Phone className="ml-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
            </Button>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 bg-card/80 backdrop-blur">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-secondary-dark" />
              <h4 className="font-semibold">Horários Flexíveis</h4>
            </div>
            <p className="text-muted-foreground text-sm">
              Atendimento adaptado ao seu fuso horário. Aulas de manhã, tarde ou noite, 
              conforme sua disponibilidade.
            </p>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <h4 className="font-semibold">Atendimento Global</h4>
            </div>
            <p className="text-muted-foreground text-sm">
              Seja onde você estiver no mundo, posso te ajudar. Experiência com 
              brasileiros em diversos países.
            </p>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            © 2024 Stephanie - Preparação DELE A2. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Especialista em preparação para o DELE A2 • 11 anos de experiência na Espanha • 
            Foco na nacionalidade espanhola para brasileiros
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;