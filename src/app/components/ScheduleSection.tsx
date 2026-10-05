import { motion } from "motion/react";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    date: "28 Mai",
    year: "2026",
    title: "Blue Note São Paulo",
    location: "São Paulo, SP",
    time: "21h00",
    type: "Solo",
  },
  {
    date: "05 Jun",
    year: "2026",
    title: "Festival de Jazz de Santos",
    location: "Santos, SP",
    time: "19h30",
    type: "Trio",
  },
  {
    date: "15 Jun",
    year: "2026",
    title: "SESC Pompeia - Bossa Sessions",
    location: "São Paulo, SP",
    time: "20h00",
    type: "Solo",
  },
  {
    date: "22 Jun",
    year: "2026",
    title: "Casa de Francisca",
    location: "São Paulo, SP",
    time: "21h30",
    type: "Quintet",
  },
];

export function ScheduleSection() {
  return (
    <section id="agenda" className="min-h-screen py-32 px-8 md:px-16 relative bg-[#0f1419]">
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
              <div className="flex gap-6 p-6 bg-[#141824] border border-white/10 rounded-lg hover:border-[#1a3d5c] transition-all duration-300 cursor-pointer group-hover:translate-x-2">
                {/* Date */}
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="text-3xl mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                    {event.date.split(" ")[0]}
                  </div>
                  <div className="text-sm text-[#9ca3af] uppercase tracking-wider" style={{ fontFamily: "var(--font-sans)" }}>
                    {event.date.split(" ")[1]}
                  </div>
                  <div className="text-xs text-[#9ca3af]/60 mt-1">{event.year}</div>
                </div>

                {/* Divider */}
                <div className="w-px bg-white/10" />

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

                {/* Arrow */}
                <div className="flex-shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full border border-[#1a3d5c] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#3a5a7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#9ca3af] mb-6">Acompanhe as próximas apresentações</p>
          <motion.button
            className="px-8 py-3 bg-[#1a3d5c] hover:bg-[#2a4a6a] rounded-full transition-colors"
            style={{ fontFamily: "var(--font-sans)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver calendário completo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
