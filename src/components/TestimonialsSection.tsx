import { Card } from "@/components/ui/card";
import { CheckCircle, Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Elizabeth Freitas, 55 anos",
      location: "Dublin - Irlanda",
      content: "Você acredita que passei? Desculpa qualquer coisa e muito obrigado pelo que você me ensinou ficou gravado na minha mente da primeira vez que fiz a prova estava muito nervosa a segunda já fui mais calma e graças a Deus consegui. Ah, a Juliana também passou! Que Deus continue te abençoando e te dando paciência com umas pessoas iguais a mim kkkkkkk bjs ótima semana 🥰🥰",
      rating: 5,
      status: "Aprovada no DELE A2"
    },
    {
      name: "João Camargo, 26 anos", 
      location: "São Paulo - Brasil",
      content: "Escrevo para agradecer imensamente pelas aulas de espanhol. Elas foram excelentes e consegui melhorar muito, tanto na pronúncia quanto na gramática. Seu trabalho foi fundamental para que eu também aprendesse sobre a cultura espanhola e a vida na Europa. Agradeço sua dedicação e a forma como conduziu as aulas.",
      rating: 5,
      status: "Aprovado no DELE A2"
    },
    {
      name: "Dunya Graciana, 33 anos",
      location: "Marbella - Espanha", 
      content: "Queria muito agradecer pela sua paciência e por ser tão acolhedora. Confesso que tenho um pouco de dificuldade para aprender, mas você me deixou tão à vontade que não tive receio de perguntar nada. O processo foi super tranquilo e leve. Fico muito feliz em dizer que, com a sua ajuda, consegui alcançar exatamente o resultado que eu precisava. A forma como você ensina realmente fez a diferença.",
      rating: 5,
      status: "Aprovada no DELE A2"
    }
  ];

  return (
    <section id="testimonials" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Star className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Depoimentos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 spanish-accent">
            Histórias de sucesso
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Veja o que meus alunos dizem sobre a preparação que os levou à aprovação no DELE A2
          </p>
        </div>

        {/* Stats */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center gold-hover bg-card/80 backdrop-blur">
              <div className="bg-secondary/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-10 w-10 text-secondary-dark" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div> */}

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 spanish-hover bg-card/90 backdrop-blur relative">
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground mb-2">{testimonial.location}</div>
                <div className="flex items-center gap-2 bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-medium w-fit">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  {testimonial.status}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center max-w-4xl mx-auto">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-4">
            Metodologia Comprovada
          </h3>
          <p className="text-muted-foreground text-lg mb-6">
            Todos esses resultados foram alcançados com a mesma metodologia personalizada 
            que você receberá. Sua aprovação no DELE A2 está ao seu alcance!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex fles-col gap-2 bg-white px-4 py-2 rounded-full shadow-sm items-center justify-center">
              <CheckCircle className="h-4 w-4 text-primary" />
              Preparação individualizada
            </div>
            <div className="flex fles-col gap-2 bg-white px-4 py-2 rounded-full shadow-sm items-center justify-center">
            <CheckCircle className="h-4 w-4 text-primary" />
              Simulados reais
            </div>
            <div className="flex fles-col gap-2 bg-white px-4 py-2 rounded-full shadow-sm items-center justify-center">
              <CheckCircle className="h-4 w-4 text-primary" />
              Suporte contínuo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;