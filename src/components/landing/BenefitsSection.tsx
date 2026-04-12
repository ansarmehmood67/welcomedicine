import { motion } from "framer-motion";
import { Briefcase, Heart, ArrowRight } from "lucide-react";
import sectionImage from "@/assets/section-benefits.jpg";

const perTe = [
  "Più ordine nella gestione quotidiana",
  "Meno tempo perso in comunicazioni frammentate",
  "Più controllo clinico ed economico sulla tua attività",
  "I ricavi delle tue prestazioni restano a te, al netto del 3%",
];

const perPazienti = [
  "Più continuità nel percorso di cura",
  "Più attenzione e risposte rapide dal proprio medico",
  "Più qualità percepita dell'esperienza sanitaria",
];

const BenefitsSection = () => (
  <section id="vantaggi" className="py-20 md:py-32 section-alt scroll-mt-20 overflow-hidden">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: -2 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative order-2 lg:order-1">
          <img src={sectionImage} alt="Relazione medico-paziente digitale" loading="lazy" className="w-full h-auto rounded-2xl shadow-2xl" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="order-1 lg:order-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 uppercase tracking-wide">Vantaggi</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 leading-tight">
            Perchè i professionisti scelgono,<br />
            <span className="text-primary">Welcome medicine</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Welcomedicine migliora la vita professionale del medico e l'esperienza del paziente. Allo stesso tempo. Entra nell'ecosistema Welmed e organizza il tuo Ambulatorio virtuale sempre a disposizione.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Per te */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl bg-card border border-border p-8 space-y-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center">
              <Briefcase size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-extrabold text-xl text-foreground">Per te</h3>
          </div>
          {perTe.map((item, i) => (
            <motion.div key={item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <p className="text-base leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Per i tuoi pazienti */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="rounded-2xl bg-card border border-border p-8 space-y-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center">
              <Heart size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-extrabold text-xl text-foreground">Per i tuoi pazienti</h3>
          </div>
          {perPazienti.map((item, i) => (
            <motion.div key={item} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <p className="text-base leading-relaxed">{item}</p>
            </motion.div>
          ))}
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

export default BenefitsSection;
