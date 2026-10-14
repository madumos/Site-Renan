import { motion } from "motion/react";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";

const events = [
  {
    date: "28 Mai",
    year: "2026",
    title: "Blue Note São Paulo",
    location: "São Paulo, SP",
    time: "21h00",
    type: "Solo",
    ticketUrl: "https://bluenoterio.com.br/",
  },
  {
    date: "05 Jun",
    year: "2026",
    title: "Festival de Jazz de Santos",
    location: "Santos, SP",
    time: "19h30",
    type: "Trio",
    ticketUrl: null,
  },
  {
    date: "15 Jun",
    year: "2026",
    title: "SESC Pompeia - Bossa Sessions",
    location: "São Paulo, SP",
    time: "20h00",
    type: "Solo",
    ticketUrl: null,
  },
  {
    date: "22 Jun",
    year: "2026",
    title: "Casa de Francisca",
    location: "São Paulo, SP",
    time: "21h30",
    type: "Quintet",
    ticketUrl: null,
  },
];

export function ScheduleSection() {
  return (
    <section id="agenda" className="min-h-screen py-12 px-4 md:py-32 md:px-16 relative bg-[#0f1419]">
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
                {/* Date */}
                <div className="flex-shrink-0 md:w-24 text-left md:text-center">
                  <div className="text-3xl mb-1 inline-block md:block mr-2 md:mr-0" style={{ fontFamily: "var(--font-serif)" }}>
                    {event.date.split(" ")[0]}
                  </div>
                  <div className="text-sm text-[#9ca3af] uppercase tracking-wider inline-block md:block mr-2 md:mr-0" style={{ fontFamily: "var(--font-sans)" }}>
                    {event.date.split(" ")[1]}
                  </div>
                  <div className="text-xs text-[#9ca3af]/60 mt-1 inline-block md:block">{event.year}</div>
                </div>

                {/* Divider */}
                <div className="h-px w-full md:w-px md:h-auto bg-white/10" />

                {/* Event details */}
                <div className="flex-1">
                  <h4 className="text-2xl mb-3 group-hover:text-[#3a5a7a] transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                    {event.title}
                  </h4>
                  <div className="flex flex-wrap gap-6 text-sm text-[#9ca3af]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.type}</span>
                    </div>
                  </div>
                </div>

                {/* Ticket button or arrow */}
                <div className="flex-shrink-0 flex items-center">
                  {event.ticketUrl ? (
                    <a
                      href={event.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-4 py-2 bg-[#1a3d5c] hover:bg-[#2a5a8c] text-white text-sm rounded-full transition-all duration-300 hover:scale-105"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      <Ticket className="w-4 h-4" />
                      Ingressos
                    </a>
                  ) : (
                    <div className="hidden md:flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full border border-[#1a3d5c] flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#3a5a7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
