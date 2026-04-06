import { motion } from "framer-motion";
import { Mail, MessageCircle, Video, FileText, Stethoscope, Users } from "lucide-react";

const features = [
  { icon: MessageCircle, title: "Chat, chiamate e video illimitate", desc: "Con un click dalla piattaforma, senza numero visibile e con gestione flessibile. Comunica con pazienti e colleghi in modo sicuro." },
  { icon: Mail, title: "Email Organizer", desc: "Le email dei pazienti arrivano organizzate e storicizzate direttamente in piattaforma. Niente più caos nella casella di posta." },
  { icon: Video, title: "Telemedicina e videoconsulti", desc: "Offri consulenze a distanza in modo sicuro e professionale. Fatturazione automatica e refertazione integrata." },
  { icon: Users, title: "Collaborazione multidisciplinare", desc: "Lavora in team con i colleghi, senza limiti di formato o spazio. Condividi e scambia pazienti in un ambiente riservato." },
  { icon: FileText, title: "Scambio documentale conforme", desc: "Emetti documenti firmati digitalmente e condividili in un click. Conservazione a norma di legge garantita." },
  { icon: Stethoscope, title: "Referti e ricette digitali", desc: "Firma digitale di referti e ricette con archivio documentale sempre disponibile per tutte le tue visite." },
];

const FeaturesSection = () => (
  <section id="funzioni" className="py-16 md:py-24 scroll-mt-20">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">Le Funzionalità</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Tutto ciò che ti serve, in un'unica piattaforma</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">In ambulatorio o in mobilità, hai tutte le informazioni organizzate e a portata di mano in un unico strumento, sicuro e integrato.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl bg-card border border-border p-6 card-elevated">
            <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4">
              <Icon size={22} className="text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
