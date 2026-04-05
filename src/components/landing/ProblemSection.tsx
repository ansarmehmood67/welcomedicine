import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  "Messaggi dei pazienti su WhatsApp a ogni ora",
  "Nessuna tracciabilità medico-legale",
  "Impossibile valorizzare il proprio tempo",
  "Comunicazioni private e professionali mescolate",
];

const solutions = [
  "Canali professionali dedicati, con orari personalizzabili",
  "Ogni comunicazione è documentata e conforme",
  "Monetizza consulti, videochiamate e pareri",
  "Separazione netta tra vita privata e professionale",
];

const ProblemSection = () => (
  <section className="py-16 md:py-24 section-alt">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Il problema che risolviamo</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">La comunicazione professionale in sanità è frammentata, non protetta e spesso non retribuita.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Problems */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl bg-card border border-destructive/20 p-6 space-y-4">
          <h3 className="font-bold text-foreground flex items-center gap-2"><XCircle className="text-destructive" size={20} /> Senza Welcome Medicine</h3>
          {problems.map((p) => (
            <div key={p} className="flex items-start gap-2 text-sm text-muted-foreground"><XCircle size={16} className="text-destructive/60 mt-0.5 shrink-0" /> {p}</div>
          ))}
        </motion.div>

        {/* Solutions */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl bg-card border border-primary/20 p-6 space-y-4 card-elevated">
          <h3 className="font-bold text-foreground flex items-center gap-2"><CheckCircle className="text-primary" size={20} /> Con Welcome Medicine</h3>
          {solutions.map((s) => (
            <div key={s} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> {s}</div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
