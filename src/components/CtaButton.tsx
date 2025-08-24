import { Button } from "@/components/ui/button";


interface CtaButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}
const CtaButton = ({ children, onClick }: CtaButtonProps) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a preparação para o DELE A2 e como conquistar minha nacionalidade espanhola.");
    window.open(`https://wa.me/5562999211504?text=${message}`, '_blank');
  };

  return (
    <Button 
        variant="hero"
        size="xl"
        onClick={onClick || handleWhatsAppClick}
        className="group"
    >
        {children}
    </Button>
  );
};

export default CtaButton;