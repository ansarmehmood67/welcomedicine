import { motion } from "framer-motion";
import { Mail, MessageCircle, Video, FileText, Stethoscope, Users, DatabaseZap, Headphones, Receipt, FolderHeart, ScanSearch, Smartphone, UserCog, ArrowRight, CalendarCheck } from "lucide-react";
import mobileApp from "@/assets/app-paziente.png";

const features = [
  // Riga 1: Comunicazione
  { icon: MessageCircle, title: "Chat, chiamate e video illimitate", desc: "Con un click dalla piattaforma, senza numero visibile e con gestione flessibile. Comunica con pazienti e colleghi in modo sicuro.", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Mail, title: "Email Organizer", desc: "Le email dei pazienti arrivano organizzate e storicizzate direttamente in piattaforma. Niente più caos nella casella di posta.", color: "text-violet-500", bg: "bg-violet-500/10" },
  { icon: Video, title: "Telemedicina e videoconsulti", desc: "Offri consulenza a distanza in modo sicuro e professionale: agenda appuntamenti, refertazione, pagamenti online e fatturazione ai pazienti integrati.", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  // Riga 2: Clinica
  { icon: FileText, title: "Scambio documentale conforme", desc: "Emetti documenti firmati digitalmente e condividili in un click. Conservazione a norma di legge garantita.", color: "text-rose-500", bg: "bg-rose-500/10" },
  { icon: Stethoscope, title: "Referti e ricette digitali", desc: "Firma digitale di referti e ricette con archivio documentale sempre disponibile per tutte le tue visite.", color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { icon: FolderHeart, title: "Fascicolo Clinico digitale", desc: "Cronologia completa di documenti, referti e note per ogni paziente in un'unica scheda. Il tuo repository clinico sempre aggiornato.", color: "text-pink-500", bg: "bg-pink-500/10" },
  // Riga 3: Strumenti digitali
  { icon: ScanSearch, title: "DICOM Viewer integrato", desc: "Visualizza immagini radiologiche direttamente in piattaforma, senza USB o WeTransfer. Medical Device classe 2B certificato.", color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { icon: CalendarCheck, title: "Agenda e promemoria", desc: "Calendario prestazioni e promemoria automatici per esami e terapie. I tuoi pazienti non dimenticano più nulla.", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { icon: Smartphone, title: "App mobile dedicata", desc: "Welmed Pro per medici e Welcomedicine per pazienti. Notifiche push, accesso ovunque, sincronizzazione in tempo reale.", color: "text-teal-500", bg: "bg-teal-500/10" },
  // Riga 4: Gestione e amministrazione
  { icon: UserCog, title: "Gestione segretaria", desc: "Delega risposte, gestione appuntamenti e smistamento richieste a un account segreteria dedicato.", color: "text-orange-500", bg: "bg-orange-500/10" },
  { icon: Users, title: "Collaborazione multidisciplinare", desc: "Lavora in team con i colleghi, senza limiti di formato o spazio. Condividi e scambia pazienti in un ambiente riservato.", color: "text-amber-500", bg: "bg-amber-500/10" },
  { icon: Receipt, title: "Fatturazione automatica", desc: "Gestione automatica di bollo, invio alla Tessera Sanitaria e fatturazione elettronica. Zero burocrazia.", color: "text-fuchsia-500", bg: "bg-fuchsia-500/10" },
  { icon: DatabaseZap, title: "Importazione dati pazienti", desc: "Servizio gestito di importazione del tuo database pazienti esistente (add-on). Nessun paziente perso nella transizione.", color: "text-lime-500", bg: "bg-lime-500/10" },
  { icon: Headphones, title: "Assistenza tecnica dedicata", desc: "Supporto telefonico per te e per i tuoi pazienti. Mai soli nell'utilizzo della piattaforma.", color: "text-sky-500", bg: "bg-sky-500/10" },
];

const FeatureCard = ({ icon: Icon, title, desc, color, bg, i }: { icon: any; title: string; desc: string; color: string; bg: string; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
    className="rounded-2xl bg-card border border-border p-6 card-elevated"
  >
    <div className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center mb-4`}>
      <Icon size={28} className={color} fill="currentColor" fillOpacity={0.2} strokeWidth={2} />
    </div>
    <h3 className="font-bold text-foreground text-lg mb-2">{title}</h3>
    <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
  </motion.div>
);

const FeaturesSection = () => (
  <section id="funzioni" className="py-20 md:py-32 section-alt scroll-mt-20 overflow-hidden">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">Le Funzionalità</span>
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
          Siamo un <span className="text-primary">poliambulatorio autorizzato</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">In ambulatorio o in mobilità, hai tutte le informazioni organizzate e a portata di mano in un unico strumento, sicuro e integrato.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }} className="flex justify-start md:-ml-16 lg:-ml-32">
          <img src={mobileApp} alt="App Welcomedicine — vista paziente" className="w-[520px] h-auto drop-shadow-2xl" />
        </motion.div>
        <div className="flex flex-col gap-6">
          <FeatureCard {...features[0]} i={0} />
          <FeatureCard {...features[3]} i={1} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.filter((_, idx) => idx !== 0 && idx !== 3).map((f, i) => (
          <FeatureCard key={f.title} {...f} i={i} />
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
        <a href="https://www.welcomedicineonline.it/product/abbonamento-welcomedicine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          Prova gratis <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
