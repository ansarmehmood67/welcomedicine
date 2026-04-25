import { motion } from "framer-motion";
import {
  MessageSquare,
  PhoneCall,
  Video,
  FileText,
  FolderHeart,
  BellRing,
  Apple,
  Smartphone,
  Fingerprint,
  KeyRound,
} from "lucide-react";
import devicesImage from "@/assets/app-welmed-pro-devices.png";

const features = [
  {
    icon: MessageSquare,
    title: "Chat con Pazienti e Colleghi",
    desc: "Sostituisci email e WhatsApp con una chat professionale. Discuti casi clinici con i Colleghi da remoto.",
  },
  {
    icon: PhoneCall,
    title: "Chiamate senza numero visibile",
    desc: "Telefona ai tuoi Pazienti direttamente dall'App, mantenendo privato il tuo numero personale.",
  },
  {
    icon: Video,
    title: "Videoconsulti integrati",
    desc: "Effettua videochiamate con i Pazienti per consulti a distanza, in modo semplice e sicuro.",
  },
  {
    icon: FileText,
    title: "Referti, ricette e documenti",
    desc: "Emetti referti e ricette, scambia documentazione clinica senza limiti di formato — incluse immagini radiologiche.",
  },
  {
    icon: FolderHeart,
    title: "Storico Pazienti sempre con te",
    desc: "Accedi in qualsiasi momento al fascicolo completo dei tuoi Pazienti, ovunque ti trovi.",
  },
  {
    icon: BellRing,
    title: "Notifiche push e promemoria",
    desc: "Ricevi aggiornamenti in tempo reale e imposta promemoria per non perdere nessuna attività.",
  },
  {
    icon: Fingerprint,
    title: "Firma biometrica integrata",
    desc: "Firma ed emetti ricette e referti con impronta o riconoscimento facciale, senza app esterne.",
  },
  {
    icon: KeyRound,
    title: "Codice PIN alternativo",
    desc: "Preferisci non usare il biometrico o il device non lo supporta? Imposta un PIN personale per la firma.",
  },
];

const AppWelmedProSection = () => (
  <section className="py-16 md:py-24 section-alt overflow-hidden">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative order-2 lg:order-1 lg:col-span-5 lg:-ml-10"
        >
          <img
            src={devicesImage}
            alt="WelMed Pro su tablet, laptop e smartphone"
            loading="lazy"
            className="w-full h-auto drop-shadow-2xl scale-110 origin-left"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2 lg:col-span-7"
        >
          <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-pill-bg text-pill-fg uppercase tracking-wide mb-4">
            App mobile · Gratuita
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground mb-4 leading-[1.15]">
            <span className="text-primary">WelMed Pro</span>: tutti i canali con i tuoi Pazienti in un'unica App
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
            App e Piattaforma dialogano e si sincronizzano in tempo reale: insieme esprimono il massimo della loro potenzialità, sempre con te su iPhone e Android.
          </p>

          {/* Compact feature list */}
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="flex items-start gap-3 group"
              >
                <div className="shrink-0 w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center transition-colors group-hover:border-primary group-hover:bg-primary/5">
                  <Icon size={18} className="text-foreground group-hover:text-primary transition-colors" strokeWidth={1.75} />
                </div>
                <div className="pt-0.5">
                  <h3 className="font-semibold text-foreground text-[15px] leading-snug mb-0.5">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Store badges */}
          <div className="flex flex-wrap gap-3">
            <motion.a
              href="https://apps.apple.com/it/app/welmed-pro/id1635162198"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 h-12 px-4 rounded-xl bg-foreground text-background hover:opacity-90 transition-opacity"
              aria-label="Scarica WelMed Pro su App Store"
            >
              <Apple size={22} strokeWidth={1.5} fill="currentColor" />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wide opacity-80">Scarica su</span>
                <span className="text-sm font-bold">App Store</span>
              </span>
            </motion.a>
            <motion.a
              href="https://play.google.com/store/apps/details?id=it.welmed.welmedpro&_gl=1*1rfycy*_up*MQ..&gclid=CjwKCAjwzLHPBhBTEiwABaLsStiwkHM2rl4M4CYoYQimNjo9xt4yPiol1l_AtygEZMEwj2UqsVRSghoCvosQAvD_BwE&utm_source=emea_Med"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 h-12 px-4 rounded-xl cta-gradient text-primary-foreground hover:opacity-90 transition-opacity"
              aria-label="Scarica WelMed Pro su Google Play"
            >
              <Smartphone size={22} strokeWidth={1.5} />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wide opacity-90">Disponibile su</span>
                <span className="text-sm font-bold">Google Play</span>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AppWelmedProSection;
