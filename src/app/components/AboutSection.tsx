import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aboutImage from "./images/about.jpg";

export function AboutSection() {
  return (
    <section id="sobre" className="min-h-screen py-12 px-4 md:py-32 md:px-16 relative">
      <div className="max-w-6xl mx-auto">
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
                  src={aboutImage}
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
                Pianista, arranjador e compositor. Bacharel em Piano pela Escola de Música da UFRJ, acompanhou artistas como Jane Duboc, Cláudio Lins, Cris Delanno e Yumi Park.
              </p>
              <p className="text-lg text-[#f5f5f0]/80 leading-relaxed">
                Trabalhou com instrumentistas como Maurício Einhorn, Victor Biglione, Leo Amuedo, Sérgio Barroso, Téo Lima, Márcio Bahia e Itiberê Zwarg, e realizou gravações com nomes como Roberto Menescal e Theo Bial. Em 2023, seu nome passou a fazer parte, como verbete, do Dicionário Cravo Albin da MPB.
              </p>
              <p className="text-lg text-[#f5f5f0]/80 leading-relaxed">
                Já se apresentou em festivais de jazz nacionais, como o Festival Internacional de Jazz de Macaé (RJ), e internacionais, como o Festival Internacional Tucumán Jazz e o Festival Internacional de Jazz de Buenos Aires, ambos na Argentina.
              </p>
              <p className="text-lg text-[#f5f5f0]/80 leading-relaxed">
                É co-produtor e pianista dos álbuns "AC Jazz: Piazzolla Songbook" e “AC Jazz: The Music of Egberto Gismonti” e diretor musical, arranjador, produtor e pianista do álbum “(des)Construção”.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl mb-2" style={{ fontFamily: "var(--font-serif)" }}>20+</div>
                  <div className="text-sm text-[#9ca3af] tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>Anos de experiência</div>
                </div>
                <div>
                  <div className="text-3xl mb-2" style={{ fontFamily: "var(--font-serif)" }}>150+</div>
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
