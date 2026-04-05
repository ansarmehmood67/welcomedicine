import { motion } from "framer-motion";
import { Mail, MessageCircle, Video, FileText, Stethoscope, Users } from "lucide-react";

const features = [
  { icon: Mail, title: "E-mail Organizer", desc: "Gestisci tutte le comunicazioni e-mail professionali da un unico pannello, con risposte rapide e categorizzazione automatica." },
  { icon: MessageCircle, title: "Chat illimitate", desc: "Messaggistica sicura e tracciabile con pazienti e colleghi. Niente più WhatsApp: ogni messaggio è documentato." },
  { icon: Video, title: "Chiamate e videochiamate", desc: "Videoconsulti HD integrati con possibilità di registrazione, condivisione schermo e fatturazione automatica." },
  { icon: FileText, title: "Scambio documentale avanzato", desc: "Condividi referti, consensi informati e documenti clinici con firma digitale e tracciamento completo." },
  { icon: Stethoscope, title: "Prestazioni di telemedicina", desc: "Eroga prestazioni a distanza in modo conforme, con ricevute, refertazione integrata e archiviazione sicura." },
  { icon: Users, title: "Condivisione con colleghi", desc: "Collabora con specialisti, condividi casi clinici e richiedi secondi pareri in un ambiente riservato e professionale." },
];

const FeaturesSection = () => (
  <section id="funzioni" className="py-16 md:py-24 scroll-mt-20">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">Funzionalità</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Tutto ciò che ti serve, in un'unica piattaforma</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Strumenti progettati da medici per medici, per una comunicazione professionale senza compromessi.</p>
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
