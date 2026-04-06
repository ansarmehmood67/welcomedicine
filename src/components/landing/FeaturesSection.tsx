import { motion } from "framer-motion";
import { Mail, MessageCircle, Video, FileText, Stethoscope, Users, DatabaseZap, Headphones, Receipt, FolderHeart, ScanSearch, Smartphone, UserCog } from "lucide-react";
import mobileApp from "@/assets/Home-medico-New-2.png";

const features = [
  { icon: MessageCircle, title: "Chat, chiamate e video illimitate", desc: "Con un click dalla piattaforma, senza numero visibile e con gestione flessibile. Comunica con pazienti e colleghi in modo sicuro." },
  { icon: Mail, title: "Email Organizer", desc: "Le email dei pazienti arrivano organizzate e storicizzate direttamente in piattaforma. Niente più caos nella casella di posta." },
  { icon: Video, title: "Telemedicina e videoconsulti", desc: "Offri consulenze a distanza in modo sicuro e professionale. Fatturazione automatica e refertazione integrata." },
  { icon: Users, title: "Collaborazione multidisciplinare", desc: "Lavora in team con i colleghi, senza limiti di formato o spazio. Condividi e scambia pazienti in un ambiente riservato." },
  { icon: FileText, title: "Scambio documentale conforme", desc: "Emetti documenti firmati digitalmente e condividili in un click. Conservazione a norma di legge garantita." },
  { icon: Stethoscope, title: "Referti e ricette digitali", desc: "Firma digitale di referti e ricette con archivio documentale sempre disponibile per tutte le tue visite." },
  { icon: FolderHeart, title: "Fascicolo Clinico digitale", desc: "Cronologia completa di documenti, referti e note per ogni paziente in un'unica scheda. Il tuo repository clinico sempre aggiornato." },
  { icon: ScanSearch, title: "DICOM Viewer integrato", desc: "Visualizza immagini diagnostiche direttamente in piattaforma, senza USB o WeTransfer. Medical Device classe 2B certificato." },
  { icon: Smartphone, title: "App mobile dedicata", desc: "WelMed Pro per medici e Welcome Medicine per pazienti. Notifiche push, accesso ovunque, sincronizzazione in tempo reale." },
  { icon: UserCog, title: "Gestione segretaria", desc: "Delega risposte, gestione appuntamenti e smistamento richieste a un account segreteria dedicato." },
  { icon: DatabaseZap, title: "Import repository pazienti", desc: "Importa il tuo database pazienti esistente in pochi click. Nessun paziente perso nella transizione." },
  { icon: Headphones, title: "Assistenza tecnica dedicata", desc: "Supporto telefonico per te e per i tuoi pazienti. Mai soli nell'utilizzo della piattaforma." },
  { icon: Receipt, title: "Fatturazione automatica", desc: "Gestione automatica di bollo, invio alla Tessera Sanitaria e fatturazione elettronica. Zero burocrazia." },
];

const half = Math.ceil(features.length / 2);

const FeaturesSection = () => (
  <section id="funzioni" className="py-16 md:py-24 scroll-mt-20">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">Le Funzionalità</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Tutto ciò che ti serve, in un'unica piattaforma</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">In ambulatorio o in mobilità, hai tutte le informazioni organizzate e a portata di mano in un unico strumento, sicuro e integrato.</p>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
        {/* Left column */}
        <div className="space-y-6">
          {features.slice(0, half).map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl bg-card border border-border p-6 card-elevated">
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Center — mobile mockup */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="hidden lg:flex justify-center">
          <img src={mobileApp} alt="App Welcomedicine — vista mobile" className="w-[260px] h-auto drop-shadow-2xl" />
        </motion.div>

        {/* Right column */}
        <div className="space-y-6">
          {features.slice(half).map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl bg-card border border-border p-6 card-elevated">
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: show phone image */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex lg:hidden justify-center mt-10">
        <img src={mobileApp} alt="App Welcomedicine — vista mobile" className="w-[220px] h-auto drop-shadow-2xl" />
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
