import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone, Send, User } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá Stephanie! Gostaria de começar minha preparação para o DELE A2 e conquistar minha nacionalidade espanhola. Quando podemos conversar?");
    window.open(`https://wa.me/5562999211504?text=${message}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(`Olá Stephanie! Meu nome é ${formData.name}. Email: ${formData.email}. Mensagem: ${formData.message}`);
    window.open(`https://wa.me/5562999211504?text=${message}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Contato</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 spanish-accent">
            Entre em contato agora mesmo
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Estou aqui para ajudar você a conquistar sua nacionalidade espanhola. 
            Vamos conversar sobre seus objetivos e montar o plano ideal!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card/80 backdrop-blur">
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
              <Send className="h-6 w-6" />
              Envie uma mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Nome completo
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  E-mail
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Mensagem
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-me sobre seus objetivos com o DELE A2, seu nível atual de espanhol e quando pretende fazer a prova..."
                  rows={4}
                  required
                  className="w-full resize-none"
                />
              </div>

              <Button 
                type="submit"
                variant="spanish"
                size="lg"
                className="w-full group"
              >
                <Send className="mr-2 h-5 w-5" />
                  Entrar em contato
               </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-hero text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full bg-white/20">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">WhatsApp</h3>
                  <p className="text-white/90">Resposta rápida e personalizada</p>
                </div>
              </div>
              
              <p className="text-white/90 mb-6">
                Prefere falar diretamente? Clique no botão abaixo e vamos 
                conversar sobre seus objetivos via WhatsApp.
              </p>
              
              <Button 
                variant="gold"
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full group"
              >
                <MessageCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                +55 62 99921-1504
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            © {new Date().getFullYear()} Passaporte DELE - Preparação DELE A2. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Especialista em preparação para o DELE A2 • Mais de 10 anos de experiência lecionando • 
            Foco na nacionalidade espanhola para brasileiros
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;