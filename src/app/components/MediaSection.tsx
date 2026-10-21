import { motion } from "motion/react";
import { Youtube, Music } from "lucide-react";

const videos = [
  {
    id: "n0ssdt-K2l8",
    title: "Vídeo 1 do YouTube",
  },
  {
    id: "zYY_GDcYuMw",
    title: "Vídeo 2 do YouTube",
  },
  {
    id: "yT4WC_mBd5I",
    title: "Vídeo 3 do YouTube",
  },
];

const streamingPlatforms = [
  { name: "Spotify", icon: Music, color: "#1DB954", url: "https://open.spotify.com/intl-pt/artist/2PXz3LMrL9Wo5YPHQ0Pq47?si=B_KMa4NYQeuDjcEFts78ng" },
  { name: "YouTube", icon: Youtube, color: "#FF0000", url: "https://www.youtube.com/@renanfrancioni652" },
];

export function MediaSection() {
  return (
    <section id="midia" className="min-h-screen py-12 px-4 md:py-32 md:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl mb-20 text-center"
          style={{ fontFamily: "var(--font-serif)" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Mídia
        </motion.h2>

        {/* Video Gallery */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="aspect-video overflow-hidden rounded-lg">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Spotify Embed — funciona em produção; em localhost exibe card de link para evitar timeout */}
        <motion.div
          className="mb-32 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {typeof window !== "undefined" && !window.location.hostname.includes("localhost") ? (
            /* Embed real — carregado apenas em produção */
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px", border: 0 }}
              src="https://open.spotify.com/embed/playlist/0N9t5juez4oNQDYl4MdR7H?utm_source=generator&si=3cc643aae57a49b5"
              width="100%"
              height="520"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          ) : (
            /* Card de link elegante — exibido em localhost para evitar timeout do Spotify */
            <a
              href="https://open.spotify.com/playlist/0N9t5juez4oNQDYl4MdR7H"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-4 w-full h-40 rounded-xl border border-white/10 bg-[#141824] hover:border-[#1DB954]/50 hover:bg-[#141824]/80 transition-all duration-300 group"
              style={{ textDecoration: "none" }}
            >
              <svg viewBox="0 0 24 24" className="w-12 h-12 group-hover:scale-110 transition-transform" fill="#1DB954">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              <span className="text-[#1DB954] font-medium tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>
                Ouvir no Spotify
              </span>
              <span className="text-xs text-[#9ca3af]" style={{ fontFamily: "var(--font-sans)" }}>
                (embed disponível em produção)
              </span>
            </a>
          )}
        </motion.div>

        {/* Streaming Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl mb-8 text-center" style={{ fontFamily: "var(--font-serif)" }}>
            Ouça nas Plataformas
          </h3>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6">
            {streamingPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                className="flex items-center gap-3 px-8 py-4 bg-[#141824] border border-white/10 rounded-full hover:border-white/30 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <platform.icon className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: platform.color }} />
                <span className="tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>{platform.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}