import { useEffect } from "react";
import { PianoNavigation } from "./components/PianoNavigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { MediaSection } from "./components/MediaSection";
import { ScheduleSection } from "./components/ScheduleSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "sobre", "portfolio", "midia", "agenda", "depoimentos", "contato"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0e1a] text-[#f5f5f0]">
      <PianoNavigation />

      <main className="ml-60">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <MediaSection />
        <ScheduleSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}