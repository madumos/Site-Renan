import { motion } from "motion/react";
import { Youtube, Music, Radio } from "lucide-react";

const videos = [
  {
    id: "1",
    title: "Nocturne in Blue - Live Performance",
    thumbnail: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&h=400&fit=crop",
    duration: "4:32",
  },
  {
    id: "2",
    title: "Bossa Nova Medley",
    thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
    duration: "6:15",
  },
  {
    id: "3",
    title: "Choro Improvisation",
    thumbnail: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=600&h=400&fit=crop",
    duration: "3:48",
  },
];

const streamingPlatforms = [
  { name: "Spotify", icon: Music, color: "#1DB954", url: "#" },
  { name: "SoundCloud", icon: Radio, color: "#FF7700", url: "#" },
  { name: "YouTube", icon: Youtube, color: "#FF0000", url: "#" },
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
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl mb-8 flex items-center gap-3" style={{ fontFamily: "var(--font-serif)" }}>
            <Youtube className="w-7 h-7 text-[#FF0000]" />
            Vídeos Recentes
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-[#FF0000] flex items-center justify-center transition-all duration-300">
                      <div className="w-0 h-0 border-l-[16px] border-l-black group-hover:border-l-white border-y-[10px] border-y-transparent ml-1 transition-colors" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs" style={{ fontFamily: "var(--font-sans)" }}>
                    {video.duration}
                  </div>
                </div>
                <h4 className="text-lg group-hover:text-[#3a5a7a] transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                  {video.title}
                </h4>
              </motion.div>
            ))}
          </div>
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
