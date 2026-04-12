import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const textTestimonials = [
  { quote: "Con Welcomedicine ho finalmente separato la vita privata da quella professionale. I pazienti mi contattano nei canali giusti, negli orari giusti.", name: "Dr. Marco Bianchi", role: "Medico di base", initials: "MB" },
  { quote: "Il fascicolo clinico digitale è una svolta. Ho tutto lo storico del paziente in un unico posto, accessibile in un click durante la visita.", name: "Dott.ssa Elena Rossi", role: "Dermatologa", initials: "ER" },
  { quote: "La fatturazione automatica mi ha fatto risparmiare ore ogni settimana. Bollo, Tessera Sanitaria, fattura elettronica: tutto gestito dalla piattaforma.", name: "Dr. Alessandro Conti", role: "Ortopedico", initials: "AC" },
  { quote: "I miei pazienti apprezzano tantissimo poter comunicare direttamente con me in modo sicuro, senza dover usare WhatsApp o email personali.", name: "Dott.ssa Giulia Ferretti", role: "Cardiologa", initials: "GF" },
];

const QuotesSection = () => (
  <section className="py-20 md:py-32 bg-background overflow-hidden">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">La voce dei medici</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
          Risultati <span className="text-primary">concreti</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Ecco come i professionisti descrivono l'impatto quotidiano di Welcomedicine.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {textTestimonials.map(({ quote, name, role, initials }, i) => (
          <motion.div key={name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="rounded-2xl border border-border p-5 card-elevated flex flex-col bg-secondary-foreground text-primary-foreground">
            <Quote size={20} className="mb-3 text-primary-foreground" fill="currentColor" />
            <p className="text-sm leading-relaxed mb-4 flex-1 text-primary-foreground">"{quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-destructive-foreground bg-primary">{initials}</div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">{name}</p>
                <p className="text-xs text-primary-foreground">{role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default QuotesSection;
