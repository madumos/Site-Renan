import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="sobre" className="min-h-screen py-12 px-4 md:py-32 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl mb-16 text-center" style={{ fontFamily: "var(--font-serif)" }}>
            Sobre
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1552422530-9b41dc72286b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Renan Francioni ao piano"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#1a3d5c] rounded-lg -z-10" />
            </motion.div>

            {/* Biography */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg text-[#f5f5f0]/80 leading-relaxed">
                Renan Francioni é um pianista brasileiro com formação erudita e profunda paixão pelo Jazz,
                Bossa Nova e MPB. Sua trajetória musical é marcada pela versatilidade e pela busca constante
                de novas sonoridades.
              </p>
              <p className="text-lg text-[#f5f5f0]/80 leading-relaxed">
                Formado em Piano Erudito pelo Conservatório Dramático e Musical de São Paulo, Renan
                desenvolveu uma linguagem única que transita entre o clássico e o popular, sempre com
                refinamento técnico e sensibilidade artística.
              </p>
              <p className="text-lg text-[#f5f5f0]/80 leading-relaxed">
                Com mais de uma década de experiência, atua tanto em projetos autorais quanto como sideman,
                tendo acompanhado diversos artistas da cena musical brasileira em estúdios e palcos pelo país.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl mb-2" style={{ fontFamily: "var(--font-serif)" }}>10+</div>
                  <div className="text-sm text-[#9ca3af] tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>Anos de experiência</div>
                </div>
                <div>
                  <div className="text-3xl mb-2" style={{ fontFamily: "var(--font-serif)" }}>50+</div>
                  <div className="text-sm text-[#9ca3af] tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>Apresentações</div>
                </div>
                <div>
                  <div className="text-3xl mb-2" style={{ fontFamily: "var(--font-serif)" }}>3</div>
                  <div className="text-sm text-[#9ca3af] tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>Álbuns gravados</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
