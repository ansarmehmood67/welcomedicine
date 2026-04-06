import { motion } from "framer-motion";
import { ClipboardCheck, Send, GitFork, CheckCheck } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Visita e refertazione", desc: "Il medico visita il paziente e referta digitalmente in piattaforma con firma elettronica." },
  { icon: Send, title: "Consegna e follow-up", desc: "Il paziente riceve il referto firmato e può scrivere al medico per il follow-up direttamente dalla piattaforma." },
  { icon: GitFork, title: "Smistamento intelligente", desc: "L'assistente di piattaforma smista le richieste: segreteria, chat gratuita o prestazione a pagamento." },
  { icon: CheckCheck, title: "Chiusura tracciata", desc: "Il medico risponde, firma e chiude la prestazione. Tutto tracciato e archiviato a norma medico-legale." },
];

const WorkflowSection = () => (
  <section className="py-16 md:py-24">
    <div className="container max-w-5xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">Workflow</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Come funziona in pratica</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Il flusso quotidiano dalla visita alla chiusura della prestazione, tutto in piattaforma.</p>
      </motion.div>

      <div className="relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl cta-gradient flex items-center justify-center mb-4 shadow-lg">
                <Icon size={26} className="text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-primary mb-1">Step {i + 1}</span>
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WorkflowSection;
