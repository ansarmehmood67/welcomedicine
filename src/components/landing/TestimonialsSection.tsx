import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Play, X } from "lucide-react";

const testimonials = [
  {
    quote: "L'adozione di Welcomedicine ha migliorato la gestione dei controlli, della documentazione clinica e della relazione medico-paziente. Finalmente ho confini chiari tra attività professionale e tempo personale.",
    name: "Dr. Claudio Cusini",
    role: "Endocrinologo",
    initials: "CC",
    videoId: "2F6UM4lBwnc",
  },
  {
    quote: "La piattaforma ha migliorato la continuità di cura dei pazienti cronici, ridotto la frammentazione delle informazioni cliniche e alleggerito il carico invisibile del medico.",
    name: "Dott.ssa Daniela Agrimi",
    role: "Endocrinologa",
    initials: "DA",
    videoId: "kk6boeGyOvM",
  },
  {
    quote: "Ora posso organizzare i controlli in modo strutturato, recuperare rapidamente referti e analisi e centralizzare tutto in un'unica cartella clinica informatizzata.",
    name: "Dr. Giovanni Rossini",
    role: "Endocrinologo",
    initials: "GR",
    videoId: "b4DHRYQPKts",
  },
];

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section id="testimonianze" className="py-16 md:py-24 bg-background scroll-mt-20">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">
              I medici dicono di noi
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Cosa dicono i professionisti che lo usano
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Medici e specialisti raccontano come Welcome Medicine ha trasformato la loro pratica quotidiana.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role, initials, videoId }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col rounded-2xl bg-card border border-border card-elevated overflow-hidden"
              >
                {/* Video thumbnail */}
                <button
                  onClick={() => setActiveVideo(videoId)}
                  className="relative w-full aspect-video bg-muted group cursor-pointer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt={`Video testimonianza ${name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full cta-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={22} className="text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </button>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">"{quote}"</p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full cta-gradient flex items-center justify-center text-primary-foreground text-xs font-bold">
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{name}</p>
                      <p className="text-xs text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Link to all testimonials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <a
              href="https://www.youtube.com/@welmed1329"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Vedi tutte le testimonianze dei medici →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-background/20 flex items-center justify-center text-background hover:bg-background/30 transition-colors z-10"
            >
              <X size={18} />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title="Video testimonianza"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsSection;
