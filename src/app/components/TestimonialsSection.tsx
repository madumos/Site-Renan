import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { useCsvData } from "../../hooks/useCsvData";
import { CSV_URLS } from "../../config/csvUrls";

export interface DepoimentoRow {
  text: string;
  author: string;
  role: string;
}

export { useCsvData, CSV_URLS };

function TestimonialsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="relative p-8 bg-[#141824] border border-white/10 rounded-lg animate-pulse"
        >
          <div className="absolute -top-4 left-8 w-12 h-12 bg-white/10 rounded-full" />
          <div className="space-y-3 mt-4">
            <div className="h-4 bg-white/10 rounded w-full" />
            <div className="h-4 bg-white/10 rounded w-5/6" />
            <div className="h-4 bg-white/10 rounded w-4/6" />
          </div>
          <div className="border-t border-white/10 mt-6 pt-4 space-y-2">
            <div className="h-5 bg-white/10 rounded w-1/3" />
            <div className="h-3 bg-white/10 rounded w-1/4" />
          </div>
        </div>
      ))}
    </div>
  );
}

interface TestimonialsSectionProps {
  testimonials: DepoimentoRow[];
  loading: boolean;
  error: string | null;
}

export function TestimonialsSection({ testimonials, loading, error }: TestimonialsSectionProps) {
  return (
    <section
      id="depoimentos"
      className="min-h-screen py-12 px-4 md:py-32 md:px-16 relative overflow-x-hidden"
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
          Depoimentos
        </motion.h2>

        {/* Estado de carregamento */}
        {loading && <TestimonialsSkeleton />}

        {/* Estado de erro */}
        {!loading && error && (
          <p className="text-center text-sm text-[#9ca3af] italic">{error}</p>
        )}

        {/* Grid de depoimentos */}
        {!loading && !error && testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative p-8 bg-[#141824] border border-white/10 rounded-lg hover:border-[#1a3d5c] transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                {/* Ícone de aspas */}
                <div className="absolute -top-4 left-8 w-12 h-12 bg-[#1a3d5c] rounded-full flex items-center justify-center group-hover:bg-[#2a4a6a] transition-colors">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Texto do depoimento */}
                <p className="text-lg text-[#f5f5f0]/80 leading-relaxed mb-6 mt-4 italic">
                  "{testimonial.text}"
                </p>

                {/* Autor */}
                <div className="border-t border-white/10 pt-4">
                  <div className="text-xl mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[#9ca3af]" style={{ fontFamily: "var(--font-sans)" }}>
                    {testimonial.role}
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
