import teacherImage from "@/assets/teacher-profile.png";
import CtaButton from "@/components/CtaButton";
import { Card } from "@/components/ui/card";
import { Award, Globe, GraduationCap, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      text: "+10 anos de experiência em ensino de linguagens"
    },
    {
      icon: Globe,
      text: "11 anos vivendo na Espanha"
    },
    {
      icon: Users,
      text: "Mais de mil alunos ao redor do mundo"
    },
    {
      icon: Award,
      text: "Metodologia focada em resultados"
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex flex-col order-2 lg:order-1 fade-in items-center">
            <div className="relative mb-8">
              <img 
                src={teacherImage}
                alt="Stephanie - Professora de preparação DELE A2"
                className="rounded-2xl shadow-soft w-full max-w-md mx-auto lg:mx-0"
              />
            </div>
            
            {/* Citação abaixo da foto */}
            <div className="bg-accent/50 p-6 rounded-xl border-l-4 border-primary">
              <i className="text-foreground font-medium">
                "Meu objetivo é que você conquiste sua nacionalidade espanhola com confiança e segurança, 
                dominando não apenas o idioma, mas também a estratégia do exame."
              </i>
              <p className="mt-2">- Stephanie Fiori</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 spanish-accent">
              Sobre mim
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Olá! Sou Stephanie Fiori, professora especializada em preparação para o DELE A2. 
              <strong className="text-foreground"> Morei 11 anos na Espanha</strong>, onde 
              fui alfabetizada e como nativa e desenvolvi fluência completa no idioma e conhecimento profundo da cultura espanhola.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Conheço o exame DELE de perto e sei exatamente o que você precisa para ser aprovado. 
              Minha metodologia é focada em <strong className="text-foreground">resultados práticos</strong> 
              {' '}e adaptada especialmente para <strong className="text-foreground">brasileiros que vivem no exterior</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <Card key={index} className="p-4 gold-hover">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <CtaButton>
                Quero conquistar minha nacionalidade! 🇪🇸
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;