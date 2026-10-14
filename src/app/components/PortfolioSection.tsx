import { motion } from "motion/react";
import { Music2 } from "lucide-react";

const mainProjects = [
  {
    artist: "AC Jazz Special Quartet",
    genre: "Jazz Fusion",
    show: null,
    role: "Pianista, tecladista e arranjador",
  },
  {
    artist: "Pé do Ouvido",
    genre: "Sambajazz",
    show: null,
    role: "Pianista",
  },
  {
    artist: "Rick Michael (EUA)",
    genre: null,
    show: 'Show "Sinatra Forever", com Orquestra MPB Jazz',
    role: "Pianista",
  },
  {
    artist: "Yumi Park",
    genre: "Sambajazz / MPB",
    show: "Projeto (des)Construção",
    role: "Pianista e arranjador",
  },
  {
    artist: "Ninah Jô",
    genre: "MPB",
    show: 'Show "Doce Presença - Tributo a Ivan Lins"',
    role: "Pianista",
  },
  {
    artist: "Maurício Einhorn",
    genre: "Música Instrumental Brasileira",
    show: "Diversas Apresentações",
    role: "Pianista",
  },
  {
    artist: "Victor Biglione",
    genre: "Música Instrumental Brasileira",
    show: 'Show "Tributo a Sérgio Mendes"',
    role: "Pianista",
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
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-[#141824] border border-white/10 rounded-lg hover:border-[#1a3d5c] transition-all duration-300 cursor-pointer group-hover:translate-x-2">
                {/* Lado Esquerdo: Artista + Gênero em destaque */}
                <div className="flex-1 min-w-[280px]">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h4
                      className="text-2xl md:text-3xl text-white group-hover:text-[#3a5a7a] transition-colors"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {project.artist}
                    </h4>
                    {project.genre && (
                      <span
                        className="inline-flex items-center text-xs px-2.5 py-0.5 rounded-full bg-[#1a3d5c]/25 text-[#7aa2c7] border border-[#1a3d5c]/40 font-medium"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {project.genre}
                      </span>
                    )}
                  </div>

                  {project.show && (
                    <p
                      className="text-sm md:text-base text-[#9ca3af] italic"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {project.show}
                    </p>
                  )}
                </div>

                {/* Lado Direito: Atuação / Função com ícone e seta interativa no hover */}
                <div className="flex items-center justify-between md:justify-end gap-6 md:shrink-0 pt-3 md:pt-0 border-t border-white/5 md:border-t-0">
                  <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/5">
                    <Music2 className="w-4 h-4 text-[#3a5a7a] shrink-0" />
                    <span
                      className="text-sm text-[#e2e8f0]/90"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {project.role}
                    </span>
                  </div>

                  {/* Seta indicativa no hover para dar dinamismo */}
                  <div className="hidden md:flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full border border-[#1a3d5c] flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#3a5a7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
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
