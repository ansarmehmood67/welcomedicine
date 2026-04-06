import { motion } from "framer-motion";
import { ShieldCheck, Columns2, Wallet, Heart, LayoutGrid, BrainCircuit, KeyRound } from "lucide-react";
import sectionImage from "@/assets/section-benefits.jpg";

const benefits = [
  { icon: ShieldCheck, title: "Tutela medico-legale", desc: "Ogni comunicazione è tracciata, archiviata e conforme al GDPR. Proteggi te stesso e i tuoi pazienti." },
  { icon: Columns2, title: "Separazione professionale/privato", desc: "Mai più messaggi dei pazienti sul tuo telefono personale. Orari personalizzabili e canali dedicati." },
  { icon: Wallet, title: "Valorizza il tuo tempo", desc: "Monetizza consulti telefonici, pareri specialistici e videochiamate. Il tuo tempo ha un valore." },
  { icon: Heart, title: "Fidelizza i tuoi pazienti", desc: "Non perdere più pazienti per mancanza di comunicazione. Follow-up automatici e canale diretto dedicato." },
  { icon: LayoutGrid, title: "Organizzazione superiore", desc: "Un'unica dashboard per messaggi, documenti, appuntamenti e videoconsulti. Tutto sotto controllo." },
  { icon: BrainCircuit, title: "Rapidità con l'AI", desc: "L'AI estrae dati da documenti scannerizzati, compila referti e organizza esami automaticamente." },
  { icon: KeyRound, title: "Controllo totale sui tuoi dati", desc: "Proprietà di dati, referti e pazienti sempre nelle tue mani, indipendentemente dalle strutture in cui lavori." },
];

const BenefitsSection = () => (
  <section id="vantaggi" className="py-20 md:py-32 dark-section scroll-mt-20 overflow-hidden">
    <div className="container max-w-6xl mx-auto px-4">
      {/* Header with image — reversed layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <img
            src={sectionImage}
            alt="Team medico in collaborazione digitale"
            loading="lazy"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary-foreground/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-foreground/10 text-primary-foreground/80 mb-4 uppercase tracking-wide">
            Vantaggi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-5 leading-tight">
            Perché i professionisti scelgono{" "}
            <span className="text-primary">Welcome Medicine</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
            Entra nell'ecosistema WellMed e collabora con specialisti delle migliori strutture d'Italia.
          </p>
        </motion.div>
      </div>

      {/* Benefit cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex gap-4 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-primary/40 hover:bg-primary-foreground/10 transition-all"
          >
            <div className="w-12 h-12 rounded-xl cta-gradient flex items-center justify-center shrink-0">
              <Icon size={22} className="text-primary-foreground" fill="currentColor" fillOpacity={0.3} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-primary-foreground mb-1">{title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a href="#cta-finale" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          Provalo gratis per 30 giorni →
        </a>
      </motion.div>
    </div>
  </section>
);

export default BenefitsSection;
