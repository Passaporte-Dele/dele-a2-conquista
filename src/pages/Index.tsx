import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExamSection from "@/components/ExamSection";
import MethodSection from "@/components/MethodSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PlansSection from "@/components/PlansSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExamSection />  
      <MethodSection />
      <TestimonialsSection />
      <PlansSection />
      <ContactSection />
    </main>
  );
};

export default Index;
