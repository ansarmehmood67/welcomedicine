import { motion } from "framer-motion";
import { Briefcase, Heart, ArrowRight } from "lucide-react";

const doctors = [
  { name: "Dott. Carmelo Morana", videoId: "AqXS8FVX_t0" },
  { name: "Dr. Claudio Cusini", videoId: "2F6UM4lBwnc" },
  { name: "Dr. Alberto Frazin", videoId: "7h5p7rnTYes" },
  { name: "Dr. Stefano Romanò", videoId: "Btb1UiWtFPA" },
  { name: "Dr. Giovanni Rossini", videoId: "b4DHRYQPKts" },
  { name: "Dr. Gionata Fiorino", videoId: "kdHIkzkhTxk" },
  { name: "Dr.ssa Daniela Agrimi", videoId: "kk6boeGyOvM" },
  { name: "Dr.ssa Chiara Boschetto", videoId: "vKgg-Va0ujE" },
  { name: "Dr. Piero Picozzi", videoId: "pUxVRwPii_s" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

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
  <section id="vantaggi" className="py-20 md:py-32 bg-white scroll-mt-20 overflow-hidden">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 order-2 lg:order-1 bg-white rounded-2xl p-6"
        >
          {doctors.map((doc) => (
            <motion.div key={doc.name} variants={itemVariants} className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border border-border overflow-hidden mb-2 shadow-sm">
                <img
                  src={`https://img.youtube.com/vi/${doc.videoId}/hqdefault.jpg`}
                  alt={doc.name}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] md:text-xs font-semibold text-foreground text-center leading-tight">{doc.name}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="order-1 lg:order-2">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary mb-4 uppercase tracking-wide">Vantaggi</span>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-foreground mb-5 leading-tight">
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
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl bg-card border border-border p-8 space-y-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center">
              <Briefcase size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-extrabold text-xl text-foreground">Per te</h3>
          </div>
          {perTe.map((item, i) => (
            <motion.div key={item} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.3 }} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <p className="text-base leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Per i tuoi pazienti */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl bg-card border border-border p-8 space-y-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center">
              <Heart size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-extrabold text-xl text-foreground">Per i tuoi pazienti</h3>
          </div>
          {perPazienti.map((item, i) => (
            <motion.div key={item} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.3 }} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <p className="text-base leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="text-center mt-12">
        <a href="https://www.welcomedicineonline.it/product/abbonamento-welcomedicine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          Prova gratis <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default BenefitsSection;
