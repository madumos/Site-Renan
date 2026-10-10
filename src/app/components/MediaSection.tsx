import { motion } from "motion/react";
import { Youtube, Music } from "lucide-react";

const videos = [
  {
    id: "n0ssdt-K2l8",
    title: "Vídeo 1 do YouTube",
  },
  {
    id: "-zKBv3yUCW8",
    title: "Vídeo 2 do YouTube",
  },
  {
    id: "4MD2dGfC7Ig",
    title: "Vídeo 3 do YouTube",
  },
];

const streamingPlatforms = [
  { name: "Spotify", icon: Music, color: "#1DB954", url: "https://open.spotify.com/intl-pt/artist/2PXz3LMrL9Wo5YPHQ0Pq47?si=B_KMa4NYQeuDjcEFts78ng" },
  { name: "YouTube", icon: Youtube, color: "#FF0000", url: "https://www.youtube.com/@renanfrancioni652" },
];

export function MediaSection() {
  return (
    <section id="midia" className="min-h-screen py-32 px-8 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
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

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
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

        {/* Spotify Embed */}
        <motion.div
          className="mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px", border: 0 }}
            src="https://open.spotify.com/embed/artist/2PXz3LMrL9Wo5YPHQ0Pq47?utm_source=generator&theme=0&si=b740c679746d47d9"
            width="100%"
            height="630"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
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

          <div className="flex flex-wrap justify-center gap-6">
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