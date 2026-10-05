import { motion } from "motion/react";
import { Music2, Users } from "lucide-react";

const soloProjects = [
  {
    title: "Nocturnes & Improvisations",
    year: "2024",
    description: "Álbum autoral explorando a fusão entre jazz e música erudita brasileira.",
  },
  {
    title: "Bossa Sessions",
    year: "2023",
    description: "Releituras contemporâneas de clássicos da Bossa Nova.",
  },
  {
    title: "Piano Solo: Live at Blue Note",
    year: "2022",
    description: "Registro ao vivo de apresentação intimista no Blue Note SP.",
  },
];

const sidemanProjects = [
  {
    artist: "Maria Silva",
    project: "Canções de Amor",
    year: "2024",
    role: "Piano e arranjos",
  },
  {
    artist: "João Costa Trio",
    project: "Brasil Jazz",
    year: "2023",
    role: "Piano",
  },
  {
    artist: "Ana Rodrigues",
    project: "Sambajazz",
    year: "2023",
    role: "Piano e direção musical",
  },
  {
    artist: "Pedro Almeida Quartet",
    project: "Choro Moderno",
    year: "2022",
    role: "Piano",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="min-h-screen py-32 px-8 md:px-16 relative bg-[#0f1419]">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid md:grid-cols-2 gap-16">
          {/* Solo Projects */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#1a3d5c] flex items-center justify-center">
                <Music2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl" style={{ fontFamily: "var(--font-serif)" }}>
                Projetos Solo
              </h3>
            </div>

            <div className="space-y-6">
              {soloProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-[#141824] border border-white/10 rounded-lg hover:border-[#1a3d5c] transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl group-hover:text-[#3a5a7a] transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                      {project.title}
                    </h4>
                    <span className="text-sm text-[#9ca3af]" style={{ fontFamily: "var(--font-sans)" }}>
                      {project.year}
                    </span>
                  </div>
                  <p className="text-[#9ca3af] leading-relaxed">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sideman Projects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#2a4a6a] flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl" style={{ fontFamily: "var(--font-serif)" }}>
                Trabalhos como Acompanhante
              </h3>
            </div>

            <div className="space-y-4">
              {sidemanProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-5 bg-[#141824] border border-white/10 rounded-lg hover:border-[#2a4a6a] transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg group-hover:text-[#3a5a7a] transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                        {project.artist}
                      </h4>
                      <p className="text-sm text-[#9ca3af] italic">{project.project}</p>
                    </div>
                    <span className="text-sm text-[#9ca3af]" style={{ fontFamily: "var(--font-sans)" }}>
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-[#9ca3af]/80">{project.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
