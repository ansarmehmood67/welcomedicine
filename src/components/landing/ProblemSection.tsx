import { motion } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";
import sectionImage from "@/assets/section-problem.jpg";

const problems = [
  "100+ email a settimana senza filtro né priorità",
  "Pazienti che scrivono su WhatsApp a qualsiasi ora",
  "Scambio referti via USB o email non protetta",
  "Immagini radiologiche inviate via WeTransfer o chiavetta USB",
  "Informazioni cliniche disperse tra canali diversi",
  "Rischio di buchi nella storia clinica del paziente",
  "Nessuna compliance GDPR né tracciabilità medico-legale",
];

const solutions = [
  "Informazioni centralizzate in un unico punto",
  "Compliance GDPR e tutela medico-legale",
  "Continuità clinica e follow-up strutturati",
  "Gestione ordinata con supporto AI",
];

const ProblemSection = () => (
  <section className="py-20 md:py-32 section-alt overflow-hidden">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 leading-tight">
            Il problema che{" "}
            <span className="text-primary">risolviamo</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
            Ogni giorno perdi ore preziose in comunicazioni frammentate, non protette e non retribuite. Mai più messaggi dei pazienti sui tuoi canali personali.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 2 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative">
          <img src={sectionImage} alt="Caos comunicativo: email, WhatsApp e canali disorganizzati" loading="lazy" className="w-full h-auto rounded-2xl shadow-2xl" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl bg-card border border-destructive/20 p-8 space-y-4">
          <h3 className="font-extrabold text-xl text-foreground flex items-center gap-2">
            <XCircle className="text-destructive" size={24} /> Senza Welcome Medicine
          </h3>
          {problems.map((p, i) => (
            <motion.div key={p} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-start gap-3 text-sm text-muted-foreground">
              <XCircle size={16} className="text-destructive/60 mt-0.5 shrink-0" /> {p}
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="pt-4 border-t border-destructive/10">
            <p className="text-base font-bold text-destructive">
              Risultato: perdi tempo, perdi controllo, perdi opportunità cliniche ed economiche.
            </p>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="rounded-2xl bg-card border border-primary/20 p-8 space-y-4 card-elevated">
          <h3 className="font-extrabold text-xl text-foreground flex items-center gap-2">
            <CheckCircle className="text-primary" size={24} /> Come poliambulatorio autorizzato, Welmed garantisce
          </h3>
          {solutions.map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> {s}
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="pt-4 border-t border-primary/10">
            <p className="text-base font-semibold text-primary italic">
              Non è telemedicina. È continuità di cura organizzata.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
        <a href="#cta-finale" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          Prova gratis <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
