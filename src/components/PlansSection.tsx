import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Clock, Target, CheckCircle, ArrowRight } from "lucide-react";

const PlansSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de receber informações sobre os planos personalizados de preparação para o DELE A2.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const benefits = [
    "Avaliação completa do seu nível atual",
    "Plano de estudos personalizado",
    "Material didático exclusivo",
    "Aulas individuais ou em grupo",
    "Simulados completos do exame",
    "Acompanhamento até o dia da prova"
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <Target className="h-5 w-5 text-secondary-dark" />
            <span className="text-secondary-dark font-medium">Planos Personalizados</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 spanish-accent">
            📌 Planos personalizados para cada objetivo
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Cada aluno tem um ritmo e uma necessidade diferentes. Por isso, monto planos de 
            preparação sob medida, de acordo com o tempo disponível e o seu nível atual.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Benefits */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              O que está incluído em todos os planos:
            </h3>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary-dark mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-6 w-6 text-primary" />
                <h4 className="font-semibold text-primary">Flexibilidade Total</h4>
              </div>
              <p className="text-muted-foreground">
                Seja você um iniciante ou alguém que já tem conhecimento básico, 
                adaptamos o conteúdo e o ritmo às suas necessidades específicas.
              </p>
            </div>
          </div>

          {/* Right Side - CTA Card */}
          <div className="fade-in">
            <Card className="p-8 bg-gradient-subtle border-2 border-primary/20 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Personalizado
              </div>
              
              <MessageCircle className="h-12 w-12 text-primary mb-6" />
              
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Vamos conversar?
              </h3>
              
              <p className="text-muted-foreground mb-6">
                O primeiro passo é uma conversa para entender seus objetivos, 
                avaliar seu nível atual e montar o plano ideal para você.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Consulta inicial gratuita</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-secondary-dark rounded-full"></div>
                  <span>Cronograma personalizado</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>  
                  <span>Investimento adequado ao seu perfil</span>
                </div>
              </div>

              <Button 
                variant="spanish"
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full group"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Quero meu plano personalizado
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="p-6 bg-card/80 backdrop-blur max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-primary">
              🎯 Foco no que realmente importa
            </h4>
            <p className="text-muted-foreground">
              Diferente dos cursos genéricos, minha preparação é 100% focada no DELE A2 
              e na nacionalidade espanhola. Você economiza tempo e tem resultados mais rápidos.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;