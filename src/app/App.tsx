import { useEffect } from "react";
import { PianoNavigation } from "./components/PianoNavigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { MediaSection } from "./components/MediaSection";
import {
  ScheduleSection,
  type AgendaRow,
} from "./components/ScheduleSection";
import {
  TestimonialsSection,
  useCsvData,
  CSV_URLS,
  type DepoimentoRow,
} from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  const {
    data: scheduleEvents,
    loading: scheduleLoading,
    error: scheduleError,
  } = useCsvData<AgendaRow>(
    CSV_URLS.AGENDA,
    (row) =>
      typeof row.date === "string" &&
      row.date.trim() !== "" &&
      typeof row.title === "string" &&
      row.title.trim() !== ""
  );


  const showSchedule = scheduleLoading || scheduleEvents.length > 0;

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

  const showTestimonials = testimonialsLoading || testimonials.length > 0;

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "sobre",
        "portfolio",
        "midia",
        ...(showSchedule ? ["agenda"] : []),
        ...(showTestimonials ? ["depoimentos"] : []),
        "contato",
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
  }, [showSchedule, showTestimonials]);

  return (
    <div className="relative min-h-screen bg-[#0a0e1a] text-[#f5f5f0] overflow-x-hidden">
      {/* Menu lateral*/}
      <PianoNavigation
        showSchedule={showSchedule}
        showTestimonials={showTestimonials}
      />

      <main className="md:ml-64">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <MediaSection />

        {/* Agenda*/}
        {showSchedule && (
          <ScheduleSection
            events={scheduleEvents}
            loading={scheduleLoading}
            error={scheduleError}
          />
        )}

        {/* Depoimentos*/}
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
