import { Card } from "@/components/ui/card";
import { BookOpen, Headphones, MessageCircle, PenTool } from "lucide-react";
import CtaButton from "./CtaButton";

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
    <section id="exam" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Exame DELE A2</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 spanish-accent">
            O que é o DELE?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            O DELE (Diploma de Español como Lengua Extranjera) é o teste oficial de espanhol 
            reconhecido internacionalmente. Para a nacionalidade espanhola, deve-se obter no mínimo o nível A2 é 
            <strong className="text-foreground"> obrigatório e indispensável</strong>. Esta prova avalia as seguintes competências:
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

        <div className="text-center mb-16 fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">

          </h3>
        </div>

        <div className="text-center mb-16 fade-in">          
          <h3 className="text-xl md:text-2xl font-bold mb-6 ">
          Minha preparação é focada para alunos brasileiros de qualquer idade
          </h3>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Com metodologia comprovada e experiência real na Espanha, 
            você estará <strong className="text-foreground">preparado para todas as partes do exame</strong>.
          </p>

          <CtaButton>
            Fale comigo e garanta sua preparação
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default ExamSection;