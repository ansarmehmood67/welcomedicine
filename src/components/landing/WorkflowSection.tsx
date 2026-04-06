import { motion } from "framer-motion";
import { PenTool, SendHorizonal, Route, BadgeCheck, ArrowRight, UserPlus, Settings, MonitorPlay } from "lucide-react";

const onboardingSteps = [
  { icon: UserPlus, title: "Registrati in 2 minuti", desc: "Crea il tuo profilo professionale verificato. Nessuna carta di credito richiesta." },
  { icon: Settings, title: "Configura i tuoi canali", desc: "Imposta orari, tariffe e preferenze di comunicazione con pazienti e colleghi." },
  { icon: MonitorPlay, title: "Inizia a comunicare", desc: "Ricevi messaggi, videoconsulti, condividi documenti dalla tua dashboard." },
];

const workflowSteps = [
  { icon: PenTool, title: "Visita e refertazione", desc: "Il medico visita il paziente e referta digitalmente in piattaforma con firma elettronica." },
  { icon: SendHorizonal, title: "Consegna e follow-up", desc: "Il paziente riceve il referto firmato e può scrivere al medico per il follow-up direttamente dalla piattaforma." },
  { icon: Route, title: "Smistamento intelligente", desc: "L'assistente di piattaforma smista le richieste: segreteria, chat gratuita o prestazione a pagamento." },
  { icon: BadgeCheck, title: "Chiusura tracciata", desc: "Il medico risponde, firma e chiude la prestazione. Tutto tracciato e archiviato a norma medico-legale." },
];

const WorkflowSection = () => (
  <section id="come-funziona" className="py-20 md:py-32 dark-section scroll-mt-20 overflow-hidden">
    <div className="container max-w-5xl mx-auto px-4">
      {/* Onboarding */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-foreground/10 text-primary-foreground/80 mb-4 uppercase tracking-wide">Come funziona</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight">
          Inizia in{" "}
          <span className="text-primary">tre semplici passi</span>
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">Dalla registrazione alla prima videovisita, tutto è pensato per essere rapido e intuitivo.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {onboardingSteps.map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} className="relative text-center p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <div className="w-16 h-16 rounded-2xl cta-gradient mx-auto mb-5 flex items-center justify-center text-primary-foreground text-2xl font-extrabold shadow-lg">
              {i + 1}
            </div>
            <h3 className="font-extrabold text-primary-foreground mb-2 text-xl">{title}</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs mx-auto">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Workflow quotidiano */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-foreground/10 text-primary-foreground/80 mb-4 uppercase tracking-wide">Workflow</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-4 leading-tight">
          Come funziona{" "}
          <span className="text-primary">in pratica</span>
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">Il flusso quotidiano dalla visita alla chiusura della prestazione, tutto in piattaforma.</p>
      </motion.div>

      <div className="relative">
        <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-primary-foreground/20 z-0" />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {workflowSteps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 40, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl cta-gradient flex items-center justify-center mb-5 shadow-lg">
                <Icon size={28} className="text-primary-foreground" fill="currentColor" fillOpacity={0.3} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-bold text-primary mb-1">Step {i + 1}</span>
              <h3 className="font-extrabold text-primary-foreground mb-2 text-lg">{title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
        <a href="#cta-finale" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          Prova gratis 30 giorni <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default WorkflowSection;
