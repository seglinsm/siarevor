import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CatalogPreview } from "@/components/CatalogPreview";
import { ServiceSection } from "@/components/ServiceSection";
import { RentalSection } from "@/components/RentalSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CatalogPreview />
      <ServiceSection />
      <RentalSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
