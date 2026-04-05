import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";

const testimonials = [
  {
    quote: "Da quando uso Welcome Medicine mi sono sentita di nuovo una professionista felice. Ho ripreso il controllo del mio tempo e della mia comunicazione.",
    name: "Dott.ssa Maria Rossi",
    role: "Dermatologa — Milano",
    initials: "MR",
    hasVideo: true,
  },
  {
    quote: "Ricevevo oltre 100 email al giorno. Ora gestisco tutto in metà del tempo e i pazienti sono più soddisfatti perché ricevono risposte rapide e organizzate.",
    name: "Dott. Luca Bianchi",
    role: "Cardiologo — Ospedale San Raffaele",
    initials: "LB",
    hasVideo: false,
  },
  {
    quote: "Il fatto di poter monetizzare i consulti online e condividere referti in modo sicuro ha cambiato completamente il mio modo di lavorare.",
    name: "Dott.ssa Elena Conti",
    role: "Ortopedica — Gruppo San Donato",
    initials: "EC",
    hasVideo: true,
  },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">
          Testimonianze
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
