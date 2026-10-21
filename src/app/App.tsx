import { useEffect } from "react";
import { PianoNavigation } from "./components/PianoNavigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { MediaSection } from "./components/MediaSection";
import { ScheduleSection } from "./components/ScheduleSection";
import {
  TestimonialsSection,
  useCsvData,
  CSV_URLS,
  type DepoimentoRow,
} from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  // ─────────────────────────────────────────────────────────────────
  // Fetch único dos depoimentos — resultado compartilhado entre
  // TestimonialsSection e PianoNavigation (sem double-fetch).
  //
  // Regra de negócio:
  //   • loading = true  → mostra skeleton na seção, tecla visível no menu
  //   • loading = false, data vazio → oculta seção E tecla do menu
  //   • loading = false, data preenchido → exibe seção e tecla normalmente
  // ─────────────────────────────────────────────────────────────────
  const {
    data: testimonials,
    loading: testimonialsLoading,
    error: testimonialsError,
  } = useCsvData<DepoimentoRow>(
    CSV_URLS.DEPOIMENTOS,
    (row) =>
      typeof row.text === "string" &&
      row.text.trim() !== "" &&
      typeof row.author === "string" &&
      row.author.trim() !== ""
  );

  // A tecla "Depoimentos" aparece no menu enquanto carrega (evita salto de layout)
  // e desaparece apenas quando confirmado que o CSV está vazio.
  const showTestimonials = testimonialsLoading || testimonials.length > 0;

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home", "sobre", "portfolio", "midia", "agenda", "depoimentos", "contato",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0e1a] text-[#f5f5f0] overflow-x-hidden">
      {/* Menu lateral — recebe flag de visibilidade dos depoimentos */}
      <PianoNavigation showTestimonials={showTestimonials} />

      <main className="md:ml-64">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <MediaSection />
        <ScheduleSection />

        {/* Seção de depoimentos — só renderiza quando há dados OU enquanto carrega */}
        {showTestimonials && (
          <TestimonialsSection
            testimonials={testimonials}
            loading={testimonialsLoading}
            error={testimonialsError}
          />
        )}

        <ContactSection />
      </main>
    </div>
  );
}