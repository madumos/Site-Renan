import { useEffect, useState } from "react";
import { PianoNavigation } from "./components/PianoNavigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { MediaSection } from "./components/MediaSection";
import { ScheduleSection, type AgendaRow, } from "./components/ScheduleSection";
import { TestimonialsSection, useCsvData, CSV_URLS, type DepoimentoRow } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  const [cachedSchedule] = useState<boolean | null>(() => {
    const item = localStorage.getItem("rf_has_schedule");
    return item !== null ? item === "true" : null;
  });

  const [cachedTestimonials] = useState<boolean | null>(() => {
    const item = localStorage.getItem("rf_has_testimonials");
    return item !== null ? item === "true" : null;
  });

  const {
    data: scheduleEvents,
    loading: scheduleLoading,
    error: scheduleError,
  } = useCsvData<AgendaRow>(
    CSV_URLS.AGENDA,
    (row: any) => {
      const date = row.date ?? row.Date ?? row.data ?? row.Data;
      const title = row.title ?? row.Title ?? row.titulo ?? row.Titulo;
      return (
        typeof date === "string" &&
        date.trim() !== "" &&
        typeof title === "string" &&
        title.trim() !== ""
      );
    }
  );

  const {
    data: testimonials,
    loading: testimonialsLoading,
    error: testimonialsError,
  } = useCsvData<DepoimentoRow>(
    CSV_URLS.DEPOIMENTOS,
    (row: any) => {
      const text = row.text ?? row.Text ?? row.depoimento ?? row.Depoimento ?? row.texto ?? row.Texto;
      const author = row.author ?? row.Author ?? row.autor ?? row.Autor ?? row.nome ?? row.Nome;
      return (
        typeof text === "string" &&
        text.trim() !== "" &&
        typeof author === "string" &&
        author.trim() !== ""
      );
    }
  );

  useEffect(() => {
    if (!scheduleLoading && scheduleEvents) {
      localStorage.setItem("rf_has_schedule", String(scheduleEvents.length > 0));
    }
  }, [scheduleLoading, scheduleEvents]);

  useEffect(() => {
    if (!testimonialsLoading && testimonials) {
      localStorage.setItem("rf_has_testimonials", String(testimonials.length > 0));
    }
  }, [testimonialsLoading, testimonials]);

  const hasCache = cachedSchedule !== null && cachedTestimonials !== null;
  const isNetworkLoading = scheduleLoading || testimonialsLoading;
  const shouldBlockScreen = !hasCache && isNetworkLoading;


  const showSchedule = !scheduleLoading
    ? Boolean(scheduleEvents && scheduleEvents.length > 0)
    : Boolean(cachedSchedule);

  const showTestimonials = !testimonialsLoading
    ? Boolean(testimonials && testimonials.length > 0)
    : Boolean(cachedTestimonials);

  useEffect(() => {
    if (shouldBlockScreen) return;

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
  }, [shouldBlockScreen, showSchedule, showTestimonials]);

  if (shouldBlockScreen) {
    return <div className="min-h-screen bg-[#0a0e1a]" />;
  }

  return (
    <div className="relative min-h-screen bg-[#0a0e1a] text-[#f5f5f0] overflow-x-hidden">
      <PianoNavigation
        showSchedule={showSchedule}
        showTestimonials={showTestimonials}
        isLoading={false}
        agenda={scheduleEvents}
        depoimentos={testimonials}
      />

      <main className="md:ml-64">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <MediaSection />

        {showSchedule && (
          <ScheduleSection
            events={scheduleEvents}
            loading={scheduleLoading}
            error={scheduleError}
          />
        )}

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