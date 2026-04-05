import { motion } from "framer-motion";

const steps = [
  { num: "1", title: "Registrati in 2 minuti", desc: "Crea il tuo profilo professionale verificato. Nessuna carta di credito richiesta per i primi 30 giorni." },
  { num: "2", title: "Configura i tuoi canali", desc: "Imposta orari di disponibilità, tariffe per consulti e preferenze di comunicazione con pazienti e colleghi." },
  { num: "3", title: "Inizia a comunicare", desc: "Ricevi messaggi, effettua videoconsulti, condividi documenti e gestisci tutto dalla tua dashboard professionale." },
];

const HowItWorksSection = () => (
  <section id="come-funziona" className="py-16 md:py-24 scroll-mt-20">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">Come funziona</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Inizia in tre semplici passi</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map(({ num, title, desc }, i) => (
          <motion.div key={num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center">
            <div className="w-14 h-14 rounded-2xl cta-gradient mx-auto mb-5 flex items-center justify-center text-primary-foreground text-xl font-extrabold">
              {num}
            </div>
            <h3 className="font-bold text-foreground mb-2 text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Demo reinforcement */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 rounded-2xl bg-accent/50 border border-primary/10 p-8 md:p-12 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Vuoi vedere la piattaforma in azione?</h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">Prenota una demo personalizzata con il nostro team. Ti mostreremo come Welcome Medicine può trasformare la tua pratica quotidiana.</p>
        <a href="#cta-finale" className="inline-flex items-center h-12 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          Prenota una demo gratuita
        </a>
      </motion.div>
    </div>
  </section>
);

export default HowItWorksSection;
