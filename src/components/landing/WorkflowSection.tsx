import { motion } from "framer-motion";
import { UserPlus, PenTool, Send, Network, ArrowRight } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Aggiungi i tuoi pazienti", desc: "Inserisci i pazienti in piattaforma o richiedi il servizio gestito di importazione dati (add-on)." },
  { icon: PenTool, title: "Visita e refertazione", desc: "Il medico visita il paziente e referta digitalmente in piattaforma con firma elettronica." },
  { icon: Send, title: "Consegna e follow-up", desc: "Il paziente riceve il referto firmato e può scrivere al medico per il follow-up direttamente dalla piattaforma." },
  { icon: Network, title: "Smistamento intelligente", desc: "L'assistente di piattaforma smista le richieste: segreteria, chat gratuita o prestazione a pagamento." },
];

const WorkflowSection = () => (
  <section id="come-funziona" className="py-20 md:py-32 dark-section scroll-mt-20 overflow-hidden">
    <div className="container max-w-5xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-foreground/10 text-primary-foreground/80 mb-4 uppercase tracking-wide">Workflow</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight">
          Come funziona{" "}
          <span className="text-shimmer inline-block">in pratica</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-primary-foreground font-semibold">Il flusso quotidiano: dalla visita al Follow up.<br />Tutto in un unica piattaforma.</p>
      </motion.div>

      <div className="relative">
        <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-primary-foreground/20 z-0" />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 40, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl cta-gradient flex items-center justify-center mb-5 shadow-lg">
                <Icon size={28} className="text-primary-foreground" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-bold text-primary mb-1">Step {i + 1}</span>
              <h3 className="font-extrabold text-primary-foreground mb-2 text-lg">{title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
        <a href="https://www.welcomedicineonline.it/product/abbonamento-welcomedicine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          Prova gratis <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default WorkflowSection;
