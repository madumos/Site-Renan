import { motion } from "motion/react";
import { Music2 } from "lucide-react";
import { useCsvData } from "../../hooks/useCsvData";
import { CSV_URLS } from "../../config/csvUrls";


interface PortfolioRow {
  show: string;
  genre: string;
  album: string;
  role: string;
}


function PortfolioSkeleton() {
  return (
    <div className="space-y-6">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="h-24 bg-white/5 border border-white/10 rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
}

export function PortfolioSection() {

  const { data: projects, loading, error } = useCsvData<PortfolioRow>(
    CSV_URLS.PORTFOLIO,

    (row) => row.show?.trim() !== "" && row.role?.trim() !== ""
  );

  return (
    <section
      id="portfolio"
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
          Portfólio
        </motion.h2>

        {/* Carregando */}
        {loading && <PortfolioSkeleton />}

        {/* Erro */}
        {!loading && error && (
          <p className="text-center text-sm text-[#9ca3af] italic">{error}</p>
        )}

        {/* Lista de projetos */}
        {!loading && !error && (
          <div className="space-y-6">
            {projects.length === 0 ? (
              <p className="text-center text-sm text-[#9ca3af] italic">
                Nenhum projeto encontrado no CSV.
              </p>
            ) : (
              projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-[#141824] border border-white/10 rounded-lg hover:border-[#1a3d5c] transition-all duration-300 cursor-default group-hover:translate-x-2">

                    {/* Lado Esquerdo */}
                    <div className="flex-1 min-w-[280px]">
                      <div className="flex flex-wrap items-center gap-3 mb-2">

                        {/* Título*/}
                        <h4
                          className="text-2xl md:text-3xl text-white group-hover:text-[#3a5a7a] transition-colors"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {project.show}
                        </h4>

                        {/* Gênero Musical — só renderiza se "genre" estiver preenchido */}
                        {project.genre?.trim() && (
                          <span
                            className="inline-flex items-center text-xs px-2.5 py-0.5 rounded-full bg-[#1a3d5c]/25 text-[#7aa2c7] border border-[#1a3d5c]/40 font-medium"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {project.genre}
                          </span>
                        )}
                      </div>

                      {/* Álbum — só renderiza se "album" estiver preenchido */}
                      {project.album?.trim() && (
                        <p
                          className="text-sm md:text-base text-[#9ca3af] italic"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {project.album}
                        </p>
                      )}
                    </div>

                    {/* Lado Direito */}
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
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}