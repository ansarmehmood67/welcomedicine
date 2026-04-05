import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  "100+ email al giorno senza filtro né priorità",
  "Pazienti che scrivono su WhatsApp a qualsiasi ora",
  "Scambio referti via chiavetta USB o email non protetta",
  "Pazienti persi per mancanza di follow-up organizzato",
  "Nessuna tracciabilità medico-legale delle comunicazioni",
];

const solutions = [
  "50% del tempo in meno nella gestione delle email",
  "Canali professionali dedicati con orari personalizzabili",
  "Scambio documentale sicuro, conforme GDPR, senza USB",
  "Fidelizzazione automatica: i tuoi pazienti restano tuoi",
  "Ogni comunicazione tracciata e archiviata a norma di legge",
];

const ProblemSection = () => (
  <section className="py-16 md:py-24 section-alt">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Il problema che risolviamo</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Ogni giorno perdi ore preziose in comunicazioni frammentate, non protette e non retribuite.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl bg-card border border-destructive/20 p-6 space-y-4">
          <h3 className="font-bold text-foreground flex items-center gap-2"><XCircle className="text-destructive" size={20} /> Senza Welcome Medicine</h3>
          {problems.map((p) => (
            <div key={p} className="flex items-start gap-2 text-sm text-muted-foreground"><XCircle size={16} className="text-destructive/60 mt-0.5 shrink-0" /> {p}</div>
          ))}
        </motion.div>

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
