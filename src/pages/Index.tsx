import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CatalogPreview } from "@/components/CatalogPreview";
import { ServiceSection } from "@/components/ServiceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CatalogPreview />
      <ServiceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;