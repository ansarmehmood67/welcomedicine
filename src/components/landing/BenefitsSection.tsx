import { motion } from "framer-motion";
import { ShieldCheck, Columns2, Wallet, Heart, LayoutGrid, BrainCircuit, KeyRound } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Tutela medico-legale", desc: "Ogni comunicazione è tracciata, archiviata e conforme al GDPR. Proteggi te stesso e i tuoi pazienti." },
  { icon: Columns2, title: "Separazione professionale/privato", desc: "Mai più messaggi dei pazienti sul tuo telefono personale. Orari personalizzabili e canali dedicati." },
  { icon: Wallet, title: "Valorizza il tuo tempo", desc: "Monetizza consulti telefonici, pareri specialistici e videochiamate. Il tuo tempo ha un valore." },
  { icon: Heart, title: "Fidelizza i tuoi pazienti", desc: "Non perdere più pazienti per mancanza di comunicazione. Follow-up automatici e canale diretto dedicato." },
  { icon: LayoutGrid, title: "Organizzazione superiore", desc: "Un'unica dashboard per messaggi, documenti, appuntamenti e videoconsulti. Tutto sotto controllo." },
  { icon: BrainCircuit, title: "Rapidità con l'AI", desc: "L'AI estrae dati da documenti scannerizzati, compila referti e organizza esami automaticamente. Meno tempo sulla burocrazia, più tempo per i pazienti." },
  { icon: KeyRound, title: "Controllo totale sui tuoi dati", desc: "Proprietà di dati, referti e pazienti sempre nelle tue mani, indipendentemente dalle strutture in cui lavori." },
];

const BenefitsSection = () => (
  <section id="vantaggi" className="py-16 md:py-24 section-alt scroll-mt-20">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">Vantaggi</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Perché i professionisti scelgono Welcome Medicine</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Entra nell'ecosistema WellMed e collabora con specialisti delle migliori strutture d'Italia.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-4 p-6 rounded-2xl bg-card border border-border card-elevated">
            <div className="w-12 h-12 rounded-xl cta-gradient flex items-center justify-center shrink-0">
              <Icon size={22} className="text-primary-foreground" fill="currentColor" fillOpacity={0.3} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
