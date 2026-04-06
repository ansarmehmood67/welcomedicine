import { motion } from "framer-motion";
import sectionImage from "@/assets/section-howit.jpg";

const steps = [
  { num: "1", title: "Registrati in 2 minuti", desc: "Crea il tuo profilo professionale verificato. Nessuna carta di credito richiesta per i primi 30 giorni." },
  { num: "2", title: "Configura i tuoi canali", desc: "Imposta orari di disponibilità, tariffe per consulti e preferenze di comunicazione con pazienti e colleghi." },
  { num: "3", title: "Inizia a comunicare", desc: "Ricevi messaggi, effettua videoconsulti, condividi documenti e gestisci tutto dalla tua dashboard professionale." },
];

const HowItWorksSection = () => (
  <section id="come-funziona" className="py-20 md:py-32 scroll-mt-20 overflow-hidden">
    <div className="container max-w-6xl mx-auto px-4">
      {/* Header with image */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">Come funziona</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 leading-tight">
            Inizia in{" "}
            <span className="text-primary">tre semplici passi</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Dalla registrazione alla prima videovisita, tutto è pensato per essere rapido e intuitivo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={sectionImage}
            alt="Medico che utilizza laptop con piattaforma telemedicina"
            loading="lazy"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
        </motion.div>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map(({ num, title, desc }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="relative text-center p-8 rounded-2xl bg-card border border-border card-elevated"
          >
            <div className="w-16 h-16 rounded-2xl cta-gradient mx-auto mb-5 flex items-center justify-center text-primary-foreground text-2xl font-extrabold shadow-lg">
              {num}
            </div>
            <h3 className="font-extrabold text-foreground mb-2 text-xl">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Demo CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 rounded-2xl bg-accent/50 border border-primary/10 p-8 md:p-12 text-center"
      >
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">Vuoi vedere la piattaforma in azione?</h3>
        <p className="text-muted-foreground text-base mb-6 max-w-lg mx-auto">Prenota una demo personalizzata con il nostro team. Ti mostreremo come Welcome Medicine può trasformare la tua pratica quotidiana.</p>
        <a href="#cta-finale" className="inline-flex items-center h-12 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          Prenota una demo gratuita
        </a>
      </motion.div>
    </div>
  </section>
);

export default HowItWorksSection;
