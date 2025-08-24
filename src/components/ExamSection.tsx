import { Card } from "@/components/ui/card";
import { BookOpen, Headphones, MessageCircle, PenTool, Target, Award } from "lucide-react";

const ExamSection = () => {
  const examSkills = [
    {
      icon: BookOpen,
      title: "Leitura e Compreensão",
      description: "Textos práticos do dia a dia espanhol",
      color: "text-primary"
    },
    {
      icon: PenTool,
      title: "Expressão Escrita",
      description: "Cartas, emails e textos formais",
      color: "text-secondary-dark"
    },
    {
      icon: Headphones,
      title: "Compreensão Auditiva",
      description: "Áudios com sotaques regionais da Espanha",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "Expressão Oral",
      description: "Conversação e apresentação de temas",
      color: "text-secondary-dark"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Exame DELE A2</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 spanish-accent">
            O que é o DELE A2 e por que ele é essencial?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            O DELE (Diploma de Español como Lengua Extranjera) é o diploma oficial de espanhol 
            reconhecido internacionalmente. Para a nacionalidade espanhola, o nível A2 é 
            <strong className="text-foreground"> obrigatório e indispensável</strong>.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {examSkills.map((skill, index) => (
            <Card key={index} className="p-6 text-center spanish-hover bg-card/80 backdrop-blur">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4 ${skill.color}`}>
                <skill.icon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>

        {/* Key Points */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="p-8 text-center gold-hover">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Diploma Oficial</h3>
            <p className="text-muted-foreground">
              Reconhecido pelo Ministério da Educação da Espanha e aceito em todo o mundo
            </p>
          </Card>

          <Card className="p-8 text-center gold-hover">
            <Target className="h-12 w-12 text-secondary-dark mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Nível A2 Essencial</h3>
            <p className="text-muted-foreground">
              Requisito obrigatório para solicitar a nacionalidade espanhola
            </p>
          </Card>

          <Card className="p-8 text-center gold-hover">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Comunicação Real</h3>
            <p className="text-muted-foreground">
              Capacidade de se comunicar em situações cotidianas na Espanha
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 fade-in">
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              👉 Minha preparação ensina exatamente o que você precisa para ser aprovado
            </h3>
            <p className="text-muted-foreground text-lg">
              Com metodologia comprovada e experiência real na Espanha, 
              você estará preparado para todas as partes do exame.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamSection;