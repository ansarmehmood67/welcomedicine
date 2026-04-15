import { motion } from "framer-motion";
import { Mail, MessageCircle, Video, FileText, Stethoscope, Users, DatabaseZap, Headphones, Receipt, FolderHeart, ScanSearch, Smartphone, UserCog, ArrowRight, ClipboardCheck, UsersRound, CalendarCheck } from "lucide-react";
import mobileApp from "@/assets/Home-medico-New-2.png";

// Card accanto al telefono
const heroFeatures = [
  { icon: MessageCircle, title: "Chat, chiamate e video illimitate", desc: "Con un click dalla piattaforma, senza numero visibile e con gestione flessibile. Comunica con pazienti e colleghi in modo sicuro.", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: FileText, title: "Scambio documentale conforme", desc: "Emetti documenti firmati digitalmente e condividili in un click. Conservazione a norma di legge garantita.", color: "text-rose-500", bg: "bg-rose-500/10" },
];

// 9 card in griglia 3×3
const gridFeatures = [
  { icon: Mail, title: "Email Organizer", desc: "Le email dei pazienti arrivano organizzate e storicizzate direttamente in piattaforma. Niente più caos nella casella di posta.", color: "text-violet-500", bg: "bg-violet-500/10" },
  { icon: Video, title: "Telemedicina e videoconsulti", desc: "Offri consulenze a distanza in modo sicuro e professionale. Fatturazione automatica e refertazione integrata.", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: Stethoscope, title: "Referti e ricette digitali", desc: "Firma digitale di referti e ricette con archivio documentale sempre disponibile per tutte le tue visite.", color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { icon: FolderHeart, title: "Fascicolo Clinico digitale", desc: "Cronologia completa di documenti, referti e note per ogni paziente in un'unica scheda. Il tuo repository clinico sempre aggiornato.", color: "text-pink-500", bg: "bg-pink-500/10" },
  { icon: ScanSearch, title: "DICOM Viewer integrato", desc: "Visualizza immagini radiologiche direttamente in piattaforma, senza USB o WeTransfer. Medical Device classe 2B certificato.", color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { icon: CalendarCheck, title: "Agenda e promemoria", desc: "Calendario prestazioni e promemoria automatici per esami e terapie. I tuoi pazienti non dimenticano più nulla.", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { icon: Smartphone, title: "App mobile dedicata", desc: "Welmed Pro per medici e Welcomedicine per pazienti. Notifiche push, accesso ovunque, sincronizzazione in tempo reale.", color: "text-teal-500", bg: "bg-teal-500/10" },
  { icon: UserCog, title: "Gestione segretaria", desc: "Delega risposte, gestione appuntamenti e smistamento richieste a un account segreteria dedicato.", color: "text-orange-500", bg: "bg-orange-500/10" },
  { icon: Users, title: "Collaborazione multidisciplinare", desc: "Lavora in team con i colleghi, senza limiti di formato o spazio. Condividi e scambia pazienti in un ambiente riservato.", color: "text-amber-500", bg: "bg-amber-500/10" },
  { icon: Receipt, title: "Fatturazione automatica", desc: "Gestione automatica di bollo, invio alla Tessera Sanitaria e fatturazione elettronica. Zero burocrazia.", color: "text-fuchsia-500", bg: "bg-fuchsia-500/10" },
  { icon: DatabaseZap, title: "Importazione dati pazienti", desc: "Servizio gestito di importazione del tuo database pazienti esistente (add-on). Nessun paziente perso nella transizione.", color: "text-lime-500", bg: "bg-lime-500/10" },
  { icon: Headphones, title: "Assistenza tecnica dedicata", desc: "Supporto telefonico per te e per i tuoi pazienti. Mai soli nell'utilizzo della piattaforma.", color: "text-sky-500", bg: "bg-sky-500/10" },
];
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
        <a href="#cta-finale" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          Prova gratis <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
