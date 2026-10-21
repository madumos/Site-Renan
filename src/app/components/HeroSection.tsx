import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "./images/hero.jpg";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1624088798012-7eabdb19cf90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Grand Piano"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/90 via-[#0a0e1a]/70 to-[#0a0e1a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Artist Photo */}
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Photo frame */}
              <div className="absolute inset-0 border-4 border-[#1a3d5c] rounded-lg -rotate-2 z-0" />
              <div className="relative overflow-hidden rounded-lg shadow-2xl rotate-1">
                <ImageWithFallback
                  src={heroImage}
                  alt="Renan Francioni"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/60 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-[#2a4a6a] rounded-lg -z-10 rotate-6" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1a3d5c]/30 rounded-full -z-10 blur-xl" />
            </div>
          </motion.div>

          {/* Right: Name and Title */}
          <motion.div
            className="text-center md:text-left order-1 md:order-2 mt-24 md:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight leading-none"
              style={{ fontFamily: "var(--font-serif)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Renan
              <br />
              <span className="text-[#3a5a7a]">Francioni</span>
            </motion.h1>

            <motion.div
              className="space-y-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <div className="h-[2px] w-24 bg-gradient-to-r from-[#1a3d5c] to-[#3a5a7a] mb-6 mx-auto md:mx-0" />

              <p
                className="text-xl md:text-2xl text-[#f5f5f0] tracking-wide leading-relaxed"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Pianista
              </p>
              <p
                className="text-lg md:text-xl text-[#9ca3af] tracking-wide"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Jazz Instrumental · Bossa Nova · MPB
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-[#3a5a7a] rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#3a5a7a] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
