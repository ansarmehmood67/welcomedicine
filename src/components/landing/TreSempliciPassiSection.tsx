import { motion } from "framer-motion";

const steps = [
  {
    n: 1,
    title: "Registrati in 2 minuti",
    desc: "Noi pensiamo a creare il tuo profilo e a personalizzarlo con te in una call di onboarding gratuita.",
  },
  {
    n: 2,
    title: "Configura i tuoi canali",
    desc: "Imposta orari, tariffe e preferenze di comunicazione con pazienti e colleghi.",
  },
  {
    n: 3,
    title: "Inizia a comunicare",
    desc: "Ricevi messaggi, videoconsulti, condividi documenti dalla tua dashboard.",
  },
];

const TreSempliciPassiSection = () => (
  <section className="py-20 md:py-32 dark-section overflow-hidden">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-foreground/10 text-primary-foreground/80 mb-5 uppercase tracking-wide">
          Come funziona
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight">
          Inizia in <span className="text-primary">tre semplici passi</span>
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Dalla registrazione alla prima videovisita, tutto è pensato per essere rapido e intuitivo.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-center">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-8 lg:p-10 backdrop-blur-sm hover:bg-primary-foreground/[0.07] transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl cta-gradient flex items-center justify-center mb-6 shadow-lg mx-auto">
              <span className="text-primary-foreground font-extrabold text-xl">{s.n}</span>
            </div>
            <h3 className="font-extrabold text-primary-foreground text-xl mb-3">{s.title}</h3>
            <p className="text-primary-foreground/70 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TreSempliciPassiSection;
