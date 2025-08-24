import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExamSection from "@/components/ExamSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MethodSection from "@/components/MethodSection";
import PlansSection from "@/components/PlansSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ExamSection />  
        <MethodSection />
        <PlansSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
