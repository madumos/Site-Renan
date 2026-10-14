import { motion } from "motion/react";
import { Music2 } from "lucide-react";

const mainProjects = [
  {
    artist: "AC Jazz Special Quartet",
    genre: "Jazz Fusion",
    show: null,
    role: "Pianista, tecladista e arranjador",
    year: 2025,
  },
  {
    artist: "Pé do Ouvido",
    genre: "Sambajazz",
    show: null,
    role: "Pianista",
    year: 2022,
  },
  {
    artist: "Rick Michael (EUA)",
    genre: null,
    show: 'Show "Sinatra Forever", com Orquestra MPB Jazz',
    role: "Pianista",
    year: 2026,
  },
  {
    artist: "Yumi Park",
    genre: "Sambajazz / MPB",
    show: "Projeto (des)Construção",
    role: "Pianista e arranjador",
    year: 2026,
  },
  {
    artist: "Ninah Jô",
    genre: "MPB",
    show: 'Show "Doce Presença - Tributo a Ivan Lins"',
    role: "Pianista",
    year: 2025,
  },
  {
    artist: "Maurício Einhorn",
    genre: "Música Instrumental Brasileira",
    show: "Diversas Apresentações",
    role: "Pianista",
    year: 2022,
  },
  {
    artist: "Victor Biglione",
    genre: "Música Instrumental Brasileira",
    show: 'Show "Tributo a Sérgio Mendes"',
    role: "Pianista",
    year: 2022,
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="min-h-screen py-12 px-4 md:py-32 md:px-16 relative bg-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl mb-20 text-center"
          style={{ fontFamily: "var(--font-serif)" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Portfólio
        </motion.h2>

        <div className="space-y-6">
          {mainProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 bg-[#141824] border border-white/10 rounded-lg hover:border-[#1a3d5c] transition-all duration-300 cursor-pointer group-hover:translate-x-2">

                {/* Year column */}
                <div className="flex-shrink-0 md:w-24 flex md:flex-col items-center justify-center text-center">
                  {project.year ? (
                    <div className="text-3xl" style={{ fontFamily: "var(--font-serif)" }}>
                      {project.year}
                    </div>
                  ) : (
                    <div className="text-3xl text-[#9ca3af]/30" style={{ fontFamily: "var(--font-serif)" }}>
                      —
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="h-px w-full md:w-px md:h-auto bg-white/10" />

                {/* Content */}
                <div className="flex-1">
                  <h4
                    className="text-2xl mb-3 group-hover:text-[#3a5a7a] transition-colors"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {project.artist}
                  </h4>

                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#9ca3af]" style={{ fontFamily: "var(--font-sans)" }}>
                    {project.genre && (
                      <span className="italic text-[#3a5a7a]">{project.genre}</span>
                    )}
                    {project.show && (
                      <span>{project.show}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <Music2 className="w-3.5 h-3.5 text-[#1a3d5c] shrink-0" />
                    <span className="text-sm text-[#9ca3af]/80" style={{ fontFamily: "var(--font-sans)" }}>
                      {project.role}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
