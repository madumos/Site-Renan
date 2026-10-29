import { motion } from "motion/react";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import { useCsvData } from "../../hooks/useCsvData";
import { CSV_URLS } from "../../config/csvUrls";

export interface AgendaRow {
  date: string;
  month: string;
  year: string;
  title: string;
  location: string;
  time: string;
  type: string;
  link: string;
}

export { useCsvData, CSV_URLS };

function AgendaSkeleton() {
  return (
    <div className="space-y-6">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="h-28 bg-white/5 border border-white/10 rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
}

interface ScheduleSectionProps {
  events: AgendaRow[];
  loading: boolean;
  error: string | null;
}

export function ScheduleSection({ events, loading, error }: ScheduleSectionProps) {
  return (
    <section
      id="agenda"
      className="min-h-screen py-12 px-4 md:py-32 md:px-16 relative bg-[#0f1419] overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl mb-20 text-center"
          style={{ fontFamily: "var(--font-serif)" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Agenda
        </motion.h2>

        {/* Carregando */}
        {loading && <AgendaSkeleton />}

        {/* Erro */}
        {!loading && error && (
          <p className="text-center text-sm text-[#9ca3af] italic">{error}</p>
        )}

        {/* Lista de eventos */}
        {!loading && !error && events.length > 0 && (
          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row gap-6 p-6 bg-[#141824] border border-white/10 rounded-lg hover:border-[#1a3d5c] transition-all duration-300 group-hover:translate-x-2">

                  {/* Bloco de Data*/}
                  <div className="flex-shrink-0 md:w-24 text-left md:text-center">
                    {/* Dia — número grande */}
                    <div
                      className="text-3xl mb-1 inline-block md:block mr-2 md:mr-0"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {event.date}
                    </div>
                    {/* Mês*/}
                    <div
                      className="text-sm text-[#9ca3af] uppercase tracking-wider inline-block md:block mr-2 md:mr-0"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {event.month}
                    </div>
                    {/* Ano*/}
                    <div className="text-xs text-[#9ca3af]/60 mt-1 inline-block md:block">
                      {event.year}
                    </div>
                  </div>

                  {/* Divisor*/}
                  <div className="h-px w-full md:w-px md:h-auto bg-white/10" />

                  {/* Detalhes do evento*/}
                  <div className="flex-1">
                    <h3
                      className="text-2xl mb-3 group-hover:text-[#3a5a7a] transition-colors"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-6 text-sm text-[#9ca3af]">
                      {/* Localização*/}
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>

                      {/* Horário*/}
                      {event.time?.trim() && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                      )}

                      {/* Tipo/Formato */}
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Botão de ingresso — só renderiza se o campo "link" estiver preenchido */}
                  <div className="flex-shrink-0 flex items-center">
                    {event.link?.trim() && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 bg-[#1a3d5c] hover:bg-[#2a5a8c] text-white text-sm rounded-full transition-all duration-300 hover:scale-105"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        <Ticket className="w-4 h-4" />
                        Ingressos
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
