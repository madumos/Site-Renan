import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aboutImage from "./images/about.jpg";
import { useCsvData } from "../../hooks/useCsvData";
import { CSV_URLS } from "../../config/csvUrls";

// ============================================================
// INTERFACE — Deve refletir exatamente as colunas da aba "Sobre"
// Coluna esperada na planilha:
//   biography | Texto completo (pode ter múltiplos parágrafos separados por \n)
// ============================================================
interface SobraRow {
  biography: string;
}

// Skeleton de carregamento para a biography
function BiographySkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="h-4 bg-white/10 rounded w-full" />
          <div className="h-4 bg-white/10 rounded w-5/6" />
          <div className="h-4 bg-white/10 rounded w-4/6" />
        </div>
      ))}
    </div>
  );
}

export function AboutSection() {
  // ============================================================
  // BUSCA DOS DADOS DO CSV
  // Configure a URL em src/config/csvUrls.ts → CSV_URLS.SOBRE
  // ============================================================
  const { data, loading, error } = useCsvData<SobraRow>(
    CSV_URLS.SOBRE,
    // Validação: mantém apenas linhas com biography não vazia
    (row) => typeof row.biography === "string" && row.biography.trim() !== ""
  );

  // Junta todos os parágrafos da coluna biography em ordem
  const paragraphs = data.map((row) => row.biography.trim()).filter(Boolean);

  return (
    <section
      id="sobre"
      className="min-h-screen py-12 px-4 md:py-32 md:px-16 relative overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-7xl mb-16 text-center"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Sobre
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Imagem — permanece estática/local */}
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

            {/* Biografia — carregada dinamicamente do CSV */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Estado de carregamento */}
              {loading && <BiographySkeleton />}

              {/* Estado de erro */}
              {!loading && error && (
                <p className="text-sm text-[#9ca3af] italic">
                  {error}
                </p>
              )}

              {/* Parágrafos da biography — cada linha do CSV vira um <p> */}
              {!loading && !error && paragraphs.length > 0 &&
                paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-[#f5f5f0]/80 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))
              }

              {/* Fallback: CSV configurado mas sem dados */}
              {!loading && !error && paragraphs.length === 0 && (
                <p className="text-sm text-[#9ca3af] italic">
                  Nenhum texto encontrado no CSV.
                </p>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
