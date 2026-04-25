import { motion } from "framer-motion";
import { Bell, RefreshCw, Fingerprint, KeyRound, Apple, Smartphone } from "lucide-react";
import devicesImage from "@/assets/app-welmed-pro-devices.png";

const features = [
  {
    icon: Bell,
    title: "Notifiche push in tempo reale",
    desc: "Ricevi aggiornamenti di Pazienti e Colleghi con anteprima del mittente e del messaggio.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: RefreshCw,
    title: "Integrata e sincronizzata",
    desc: "App e Piattaforma dialogano tra loro: massima potenzialità se usate in maniera combinata.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Fingerprint,
    title: "Firma biometrica",
    desc: "Firma ed emetti ricette e referti tramite impronta digitale o riconoscimento facciale, senza app esterne.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: KeyRound,
    title: "Codice PIN alternativo",
    desc: "Imposta un PIN personale se preferisci o se il cellulare non supporta il riconoscimento biometrico.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

const AppWelmedProSection = () => (
  <section className="py-20 md:py-32 section-alt overflow-hidden">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <img
            src={devicesImage}
            alt="App Welmed Pro su tablet, laptop e smartphone"
            loading="lazy"
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">
            App mobile
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 leading-tight">
            L'App <span className="text-primary">Welmed Pro</span> per i Professionisti Sanitari
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Disponibile per Android e iOS, ti aiuta a tenere sempre sott'occhio tutte le attività della Piattaforma e a lavorare in mobilità.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {features.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-2xl bg-card border border-border p-5 card-elevated"
              >
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                  <Icon size={22} className={color} strokeWidth={2} />
                </div>
                <h3 className="font-bold text-foreground text-base mb-1.5">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="https://apps.apple.com/it/app/welmed-pro/id1530821702"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 h-14 px-5 rounded-xl bg-foreground text-background hover:opacity-90 transition-opacity"
              aria-label="Scarica Welmed Pro su App Store"
            >
              <Apple size={26} strokeWidth={1.5} fill="currentColor" />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wide opacity-80">Scarica su</span>
                <span className="text-base font-bold">App Store</span>
              </span>
            </motion.a>
            <motion.a
              href="https://play.google.com/store/apps/details?id=it.welmed.welmedpro"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 h-14 px-5 rounded-xl cta-gradient text-primary-foreground hover:opacity-90 transition-opacity"
              aria-label="Scarica Welmed Pro su Google Play"
            >
              <Smartphone size={26} strokeWidth={1.5} />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wide opacity-90">Disponibile su</span>
                <span className="text-base font-bold">Google Play</span>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AppWelmedProSection;
