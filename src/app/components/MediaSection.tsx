import { useState } from "react";
import { motion } from "motion/react";
import { Youtube, Music, Play } from "lucide-react";

const videos = [
  {
    id: "n0ssdt-K2l8",
    title: "Renan Francioni - Apresentação ao Vivo no Piano",
  },
  {
    id: "zYY_GDcYuMw",
    title: "Renan Francioni - Arranjo e Execução Musical",
  },
  {
    id: "yT4WC_mBd5I",
    title: "Renan Francioni - Concerto e Repertório Instrumental",
  },
];

const streamingPlatforms = [
  { name: "Spotify", icon: Music, color: "#1DB954", url: "https://open.spotify.com/intl-pt/artist/2PXz3LMrL9Wo5YPHQ0Pq47?si=B_KMa4NYQeuDjcEFts78ng" },
  { name: "YouTube", icon: Youtube, color: "#FF0000", url: "https://www.youtube.com/@renanfrancioni652" },
];

// Subcomponente de fachada para o YouTube (poupa ~3 MB de scripts iniciais)
function YouTubePlayer({ videoId, title }: { videoId: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className="w-full h-full relative block cursor-pointer group focus:outline-none"
      aria-label={`Reproduzir vídeo: ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        width={480}
        height={360}
      />
      {/* Botão de play central */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/15">
        <div className="w-16 h-16 rounded-full bg-red-600/90 group-hover:bg-red-600 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <Play className="w-7 h-7 text-white fill-white ml-1" />
        </div>
      </div>
    </button>
  );
}

export function MediaSection() {
  const [loadSpotify, setLoadSpotify] = useState(false);

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

        {/* Vídeos do YouTube com fachadas estáticas */}
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
                <div className="aspect-video overflow-hidden rounded-lg bg-black/40 border border-white/10">
                  <YouTubePlayer videoId={video.id} title={video.title} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Spotify Embed montado apenas quando a secção entra no ecrã */}
        <motion.div
          className="mb-32 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          onViewportEnter={() => setLoadSpotify(true)}
          transition={{ duration: 0.8 }}
        >
          {loadSpotify ? (
            <iframe
              title="Playlist oficial de Renan Francioni no Spotify"
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
            <div
              style={{ height: "520px", borderRadius: "12px" }}
              className="w-full bg-[#141824]/40 border border-white/5 animate-pulse"
            />
          )}
        </motion.div>

        {/* Plataformas de Streaming */}
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