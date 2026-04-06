import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";

const testimonials = [
  {
    quote: "L'adozione di Welcomedicine ha migliorato la gestione dei controlli, della documentazione clinica e della relazione medico-paziente. Finalmente ho confini chiari tra attività professionale e tempo personale.",
    name: "Dr. Claudio Cusini",
    role: "Endocrinologo",
    initials: "CC",
    hasVideo: true,
  },
  {
    quote: "La piattaforma ha migliorato la continuità di cura dei pazienti cronici, ridotto la frammentazione delle informazioni cliniche e alleggerito il carico invisibile del medico.",
    name: "Dott.ssa Daniela Agrimi",
    role: "Endocrinologa",
    initials: "DA",
    hasVideo: true,
  },
  {
    quote: "Ora posso organizzare i controlli in modo strutturato, recuperare rapidamente referti e analisi e centralizzare tutto in un'unica cartella clinica informatizzata.",
    name: "Dr. Giovanni Rossini",
    role: "Endocrinologo",
    initials: "GR",
    hasVideo: true,
  },
];

const TestimonialsSection = () => (
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
        {testimonials.map(({ quote, name, role, initials, hasVideo }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative flex flex-col p-6 rounded-2xl bg-card border border-border card-elevated"
          >
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

            {hasVideo && (
              <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Play size={14} className="text-primary ml-0.5" />
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
