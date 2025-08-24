import { Card } from "@/components/ui/card";
import { Monitor, BookText, Mic, Clock, Users, Target, CheckCircle, Star } from "lucide-react";

const MethodSection = () => {
  const methodFeatures = [
    {
      icon: Monitor,
      title: "100% Online",
      description: "Estude de onde estiver no mundo",
      highlight: "Flexibilidade total"
    },
    {
      icon: BookText,
      title: "Material Exclusivo",
      description: "Adaptado especificamente ao nível A2",
      highlight: "Conteúdo direcionado"
    },
    {
      icon: Mic,
      title: "Treinos e Simulações",
      description: "Prática intensiva da prova oral e escrita",
      highlight: "Preparação real"
    },
    {
      icon: Clock,
      title: "Horários Flexíveis",
      description: "De acordo com sua rotina e fuso horário",
      highlight: "Sua agenda"
    }
  ];

  const benefits = [
    "Metodologia comprovada com resultados reais",
    "Professora com experiência de 11 anos na Espanha", 
    "Material didático atualizado com o formato atual do exame",
    "Acompanhamento individual durante todo o processo",
    "Simulados completos para medir seu progresso",
    "Dicas exclusivas para cada parte do exame"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <Target className="h-5 w-5 text-secondary-dark" />
            <span className="text-secondary-dark font-medium">Metodologia</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 spanish-accent">
            🎯 Preparação prática, sem enrolação
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Minha metodologia é focada em resultados. Você aprende exatamente o que precisa 
            para ser aprovado no DELE A2, sem perder tempo com conteúdo desnecessário.
          </p>
        </div>

        {/* Method Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {methodFeatures.map((feature, index) => (
            <Card key={index} className="p-6 text-center spanish-hover bg-gradient-subtle border-0">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-3">{feature.description}</p>
              <div className="bg-secondary/20 text-secondary-dark px-3 py-1 rounded-full text-sm font-medium">
                {feature.highlight}
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Por que escolher minha preparação?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary-dark mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in">
            <Card className="p-8 bg-gradient-gold text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Garantia de Qualidade
              </h3>
              <p className="text-muted-foreground mb-6">
                Mais de 11 anos de experiência vivendo na Espanha me permitiram 
                desenvolver uma metodologia única, focada especificamente nas 
                necessidades de brasileiros que buscam a nacionalidade espanhola.
              </p>
              <div className="bg-white/80 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">A2</div>
                <div className="text-sm text-muted-foreground">
                  Nível garantido para sua nacionalidade
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 spanish-accent">
            Como funciona o processo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold mb-2">Avaliação Inicial</h4>
              <p className="text-sm text-muted-foreground">
                Conversamos para entender seu nível atual e objetivos específicos
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-dark">2</span>
              </div>
              <h4 className="font-semibold mb-2">Plano Personalizado</h4>
              <p className="text-sm text-muted-foreground">
                Monto um cronograma de estudos adaptado à sua rotina e necessidades
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold mb-2">Preparação Intensiva</h4>
              <p className="text-sm text-muted-foreground">
                Aulas focadas, simulados reais e acompanhamento até o dia da prova
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;