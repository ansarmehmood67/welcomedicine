import { motion } from "framer-motion";
import { Shield, Clock, CreditCard, MessageSquareHeart, ArrowDown } from "lucide-react";

const benefits = [
  { icon: MessageSquareHeart, label: "Comunicazioni centralizzate" },
  { icon: Shield, label: "Compliance GDPR" },
  { icon: Clock, label: "Risparmio di tempo" },
  { icon: CreditCard, label: "Monetizza le consulenze" },
];

const ValuePropositionSection = () => (
  <section className="dark-section py-14 md:py-20">
    <div className="container max-w-4xl mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-4 leading-tight"
      >
        Un unico strumento per gestire pazienti,{" "}
        <span className="text-primary">consulenze e documenti.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-primary-foreground/70 text-base sm:text-lg mb-10 max-w-2xl mx-auto"
      >
        Proteggi la tua professione, risparmia ore ogni settimana e trasforma ogni interazione con il paziente in valore.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {benefits.map(({ icon: Icon, label }, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium"
          >
            <Icon size={16} className="text-primary" /> {label}
          </motion.span>
        ))}
      </div>

      <motion.a
        href="#funzioni"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 h-12 px-8 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
      >
        Scopri di più <ArrowDown size={16} />
      </motion.a>
    </div>
  </section>
);

export default ValuePropositionSection;
