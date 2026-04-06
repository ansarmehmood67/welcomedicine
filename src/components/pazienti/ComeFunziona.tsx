import { motion } from "framer-motion";
import { Search, MessageCircle, FileText, FolderOpen, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Cerca",
    description: "sulla Piattaforma un Professionista, una Specializzazione, una patologia o un sintomo.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: MessageCircle,
    title: "Scrivi",
    description: "al Professionista nella Chat gratuita per descrivere il tuo problema di salute e farti orientare alla Prestazione più adatta a te.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: FileText,
    title: "Ricevi",
    description: "il parere clinico del Professionista all'interno di una Prestazione di Videovisita o Consulto scritto, da eseguire sulla Piattaforma.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: FolderOpen,
    title: "Archivia",
    description: "documenti clinici, esami, referti, ricette o piani terapeutici all'interno del tuo Fascicolo Clinico Sanitario sulla Piattaforma.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: HeartHandshake,
    title: "Resta in contatto",
    description: "con il Medico durante tutto il tuo percorso di cura!",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

const ComeFunziona = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-foreground mb-14"
      >
        Come funziona?
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl card-elevated bg-card"
          >
            <div className={`w-14 h-14 rounded-xl ${step.bg} flex items-center justify-center mb-4`}>
              <step.icon size={28} className={step.color} />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ComeFunziona;
