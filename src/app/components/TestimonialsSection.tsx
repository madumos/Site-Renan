import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Renan tem uma sensibilidade musical única. Sua capacidade de improvisar e criar atmosferas emocionantes ao piano é impressionante. Foi uma honra tê-lo no meu álbum.",
    author: "Maria Silva",
    role: "Cantora e Compositora",
  },
  {
    text: "Um pianista de refinamento técnico excepcional. Renan domina tanto a linguagem do jazz quanto a tradição erudita, criando pontes musicais fascinantes.",
    author: "João Costa",
    role: "Saxofonista e Arranjador",
  },
  {
    text: "Profissionalismo e talento em igual medida. Renan sempre eleva o nível de qualquer projeto musical que participa.",
    author: "Ana Rodrigues",
    role: "Produtora Musical",
  },
  {
    text: "A musicalidade do Renan transcende gêneros. Ele entende profundamente a linguagem do jazz brasileiro e sabe como dialogar com diferentes estilos.",
    author: "Pedro Almeida",
    role: "Contrabaixista",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="min-h-screen py-12 px-4 md:py-32 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
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
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-12 h-12 bg-[#1a3d5c] rounded-full flex items-center justify-center group-hover:bg-[#2a4a6a] transition-colors">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Testimonial text */}
              <p className="text-lg text-[#f5f5f0]/80 leading-relaxed mb-6 mt-4 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <div className="text-xl mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                  {testimonial.author}
                </div>
                <div className="text-sm text-[#9ca3af]" style={{ fontFamily: "var(--font-sans)" }}>
                  {testimonial.role}
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-4 right-4 w-20 h-20 border border-[#1a3d5c]/30 rounded-full -z-10 group-hover:scale-110 transition-transform" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
