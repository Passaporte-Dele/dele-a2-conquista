import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Target, CheckCircle, ArrowRight, Clock, Zap, Star, Crown } from "lucide-react";

const PlansSection = () => {
  const handleWhatsAppClick = (planType: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o plano ${planType} de preparação para o DELE A2.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const plans = [
    {
      name: "Básico",
      price: "€169",
      icon: CheckCircle,
      features: [
        "12 aulas ao vivo (50 min)",
        "Materiais exclusivos",
        "Sem feedback ou mentoria"
      ],
      highlight: false,
      badge: ""
    },
    {
      name: "Intermediário",
      price: "€249", 
      icon: Star,
      features: [
        "12 aulas ao vivo",
        "Feedback de tarefas (até 2/semana)",
        "Dúvidas assíncronas",
        "Mentoria 50 min opcional (€49)"
      ],
      highlight: false,
      badge: ""
    },
    {
      name: "Premium",
      price: "€329",
      icon: Crown,
      features: [
        "12 aulas ao vivo",
        "Feedback de tarefas",
        "Mentoria 50 min incluída",
        "Simulado DELE completo"
      ],
      highlight: true,
      badge: "Mais Completo"
    },
    {
      name: "Express",
      price: "€399",
      icon: Zap,
      features: [
        "12 aulas ao vivo em 4 semanas",
        "Horário restrito e exclusivo",
        "Feedback de tarefas ilimitado",
        "Mentoria 50 min incluída",
        "Simulado DELE completo",
        "Ideal para quem tem a prova próxima 🚀"
      ],
      highlight: false,
      badge: "Intensivo"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <Target className="h-5 w-5 text-secondary-dark" />
            <span className="text-secondary-dark font-medium">Planos de Preparação</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 spanish-accent">
            📌 Planos de Preparação DELE A2
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Escolha o plano ideal para sua preparação. Todos incluem 12 aulas ao vivo e materiais exclusivos.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-6 text-center relative overflow-hidden spanish-hover cursor-pointer transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-gradient-hero text-white border-2 border-primary scale-105' 
                  : 'bg-card hover:shadow-lg'
              }`}
              onClick={() => handleWhatsAppClick(plan.name)}
            >
              {plan.badge && (
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  plan.highlight 
                    ? 'bg-white/20 text-white' 
                    : 'bg-secondary text-secondary-foreground'
                }`}>
                  {plan.badge}
                </div>
              )}
              
              <div className={`p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center ${
                plan.highlight 
                  ? 'bg-white/20' 
                  : 'bg-primary/10'
              }`}>
                <plan.icon className={`h-8 w-8 ${
                  plan.highlight ? 'text-white' : 'text-primary'
                }`} />
              </div>
              
              <h3 className={`text-xl font-bold mb-2 ${
                plan.highlight ? 'text-white' : 'text-foreground'
              }`}>
                {plan.name}
              </h3>
              
              <div className={`text-3xl font-bold mb-6 ${
                plan.highlight ? 'text-white' : 'text-primary'
              }`}>
                {plan.price}
              </div>

              <div className="space-y-3 mb-6 text-left">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                      plan.highlight ? 'text-white/80' : 'text-secondary-dark'
                    }`} />
                    <span className={`text-sm ${
                      plan.highlight ? 'text-white/90' : 'text-muted-foreground'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.highlight ? "gold" : "outline"}
                size="sm"
                className={`w-full ${
                  !plan.highlight ? "hover:bg-primary hover:text-primary-foreground" : ""
                }`}
              >
                Escolher Plano
              </Button>
            </Card>
          ))}
        </div>

        {/* How it Works Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          <Card className="p-8 bg-card/80 backdrop-blur">
            <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
              <MessageCircle className="h-6 w-6" />
              Feedback de Tarefas
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Disponível nos planos Intermediário, Premium e Express
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Correção detalhada de escrita e leitura/escuta</li>
              <li>• Marcações, exemplos de reescrita e nota-resumo</li>
              <li>• Dúvidas assíncronas sobre a tarefa corrigida</li>
              <li>• Até 2 tarefas/semana (Escrita: 250 palavras; Leitura/escuta: 1 ficha A2)</li>
              <li>• Retorno em até 48h úteis</li>
            </ul>
          </Card>

          <Card className="p-8 bg-card/80 backdrop-blur">
            <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
              <Clock className="h-6 w-6" />
              Mentoria de Dúvidas – 50 min
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Sessão individual ao vivo para tirar dúvidas, revisar pontos fracos e montar plano de estudo
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Incluída 1 sessão no Premium e Express</li>
              <li>• Adicional €49 por sessão</li>
              <li>• Pacote de 3 sessões €129</li>
            </ul>
          </Card>
        </div>

        {/* Payment Info */}
        <div className="text-center">
          <Card className="p-6 bg-primary/5 border border-primary/20 max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-primary">
              💳 Pagamento
            </h4>
            <p className="text-muted-foreground">
              Pagamento antecipado, 100% seguro via cartão de crédito.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;