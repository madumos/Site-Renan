import { motion } from "motion/react";
import { useState } from "react";

interface PianoKey {
  id: string;
  label: string;
  section: string;
  hasBlackKeyBelow?: boolean;
}

// Teclas base fixas
const BASE_PIANO_KEYS: PianoKey[] = [
  { id: "home", label: "Home", section: "home", hasBlackKeyBelow: true },
  { id: "sobre", label: "Sobre", section: "sobre", hasBlackKeyBelow: true },
  { id: "portfolio", label: "Portfólio", section: "portfolio", hasBlackKeyBelow: true },
  { id: "midia", label: "Mídia", section: "midia", hasBlackKeyBelow: false },
];

const AGENDA_KEY: PianoKey = {
  id: "agenda",
  label: "Agenda",
  section: "agenda",
  hasBlackKeyBelow: true,
};

const TESTIMONIAL_KEY: PianoKey = {
  id: "depoimentos",
  label: "Depoimentos",
  section: "depoimentos",
  hasBlackKeyBelow: true,
};

const CONTACT_KEY: PianoKey = {
  id: "contato",
  label: "Contato",
  section: "contato",
  hasBlackKeyBelow: false,
};

interface PianoNavigationProps {
  /** Controla se a Agenda e Depoimentos aparece no menu */
  showSchedule?: boolean;
  showTestimonials?: boolean;
  isLoading?: boolean;
  agenda?: unknown[];
  depoimentos?: unknown[];
}

export function PianoNavigation({
  showSchedule,
  showTestimonials,
  isLoading = false,
  agenda,
  depoimentos,
}: PianoNavigationProps) {
  const [activeKey, setActiveKey] = useState("home");

  // Validação segura com Optional Chaining
  const temAgenda = Boolean(!isLoading && agenda && agenda.length > 0);
  const temDepoimentos = Boolean(!isLoading && depoimentos && depoimentos.length > 0);

  // Se showSchedule/showTestimonials forem passados diretamente, respeita-os; senão usa a validação segura
  const isScheduleVisible = showSchedule !== undefined ? showSchedule : temAgenda;
  const isTestimonialsVisible = showTestimonials !== undefined ? showTestimonials : temDepoimentos;

  console.log("DEBUG MENU:", { 
    loading: isLoading, 
    temAgenda: agenda?.length, 
    temDepoimentos: depoimentos?.length 
  });

  const pianoKeys: PianoKey[] = [
    ...BASE_PIANO_KEYS,
    ...(isScheduleVisible ? [AGENDA_KEY] : []),
    ...(isTestimonialsVisible ? [TESTIMONIAL_KEY] : []),
    CONTACT_KEY,
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveKey(sectionId);
    }
  };

  return (
    <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col z-50">
      {/* Ajuste de Altura */}
      <div
        className="flex flex-col w-full h-full relative"
        style={{
          border: "4px solid #000000",
          background: "#f5f5f5",
        }}
      >
        {pianoKeys.map((key, index) => (

          <div key={key.id} className="relative flex-1 flex flex-col">
            {/* Tecla Branca */}
            <motion.button
              onClick={() => scrollToSection(key.section)}
              className="w-full flex-1 h-full relative group overflow-hidden"
              style={{
                background: activeKey === key.id
                  ? "linear-gradient(to bottom, #e0e0d8 0%, #d0d0c8 100%)"
                  : "linear-gradient(to bottom, #fffffb 0%, #f5f5f0 100%)",
                borderBottom: "3px solid #000000",
                boxShadow: activeKey === key.id
                  ? "inset 0 3px 8px rgba(0,0,0,0.15)"
                  : "inset 0 1px 3px rgba(255,255,255,0.9)",
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.99 }}
            >
              <div
                className="absolute inset-x-0 top-0 h-6 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
                }}
              />

              {/* Texto */}
              <span
                className={`absolute inset-0 flex items-center justify-center pr-4 transition-all duration-300 ${activeKey === key.id
                  ? "text-[#1a3d5c]"
                  : "text-[#4a4a48] group-hover:text-[#2a2a28]"
                  }`}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "19px",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  textShadow: "0 1px 2px rgba(255,255,255,0.7)",
                }}
              >
                {key.label}
              </span>

              {/* Indicador*/}
              {activeKey === key.id && (
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-12 rounded-l-full"
                  style={{
                    background: "linear-gradient(to bottom, #3a5a7a 0%, #1a3d5c 50%, #3a5a7a 100%)",
                    boxShadow: "-2px 0 12px rgba(26,61,92,0.6)",
                  }}
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>

            {/* Tecla Preta*/}
            {key.hasBlackKeyBelow && (
              <motion.div
                className="absolute left-0 bottom-0 translate-y-1/2 w-[35%] h-12 pointer-events-none z-10"
                style={{
                  background: "linear-gradient(to right, #0a0a0a 0%, #1a1a1a 70%, #2a2a2a 100%)",
                  border: "3px solid #000000",
                  boxShadow: "4px 4px 12px rgba(0,0,0,0.7), inset 2px 0 6px rgba(0,0,0,0.9)",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 + 0.15, duration: 0.5 }}
              >
                <div
                  className="absolute top-1 right-1 bottom-1 w-1"
                  style={{
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)",
                  }}
                />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
