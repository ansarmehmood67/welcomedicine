import { motion } from "framer-motion";
import { Bell, RefreshCw, Fingerprint, KeyRound, Apple, Smartphone } from "lucide-react";
import devicesImage from "@/assets/app-welmed-pro-devices.png";

const features = [
  {
    icon: Bell,
    title: "Notifiche push in tempo reale",
    desc: "Aggiornamenti di Pazienti e Colleghi con anteprima del mittente e del messaggio.",
  },
  {
    icon: RefreshCw,
    title: "Integrata e sincronizzata",
    desc: "App e Piattaforma dialogano tra loro: massima potenzialità se usate in maniera combinata.",
  },
  {
    icon: Fingerprint,
    title: "Firma biometrica",
    desc: "Firma ricette e referti con impronta o riconoscimento facciale, senza app esterne.",
  },
  {
    icon: KeyRound,
    title: "Codice PIN alternativo",
    desc: "Imposta un PIN personale se preferisci o se il device non supporta il biometrico.",
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
          className="relative order-2 lg:order-1 lg:col-span-5"
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
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2 lg:col-span-7"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">
            App mobile
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground mb-4 leading-[1.15]">
            L'App <span className="text-primary">Welmed Pro</span> per i Professionisti Sanitari
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
            Disponibile per Android e iOS, ti aiuta a tenere sempre sott'occhio le attività della Piattaforma e a lavorare in mobilità.
          </p>

          {/* Compact feature list */}
          <ul className="space-y-4 mb-8">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                className="flex items-start gap-4 group"
              >
                <div className="shrink-0 w-11 h-11 rounded-full border border-border bg-background flex items-center justify-center transition-colors group-hover:border-primary group-hover:bg-primary/5">
                  <Icon size={20} className="text-foreground group-hover:text-primary transition-colors" strokeWidth={1.75} />
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
              href="https://apps.apple.com/it/app/welmed-pro/id1530821702"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 h-12 px-4 rounded-xl bg-foreground text-background hover:opacity-90 transition-opacity"
              aria-label="Scarica Welmed Pro su App Store"
            >
              <Apple size={22} strokeWidth={1.5} fill="currentColor" />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wide opacity-80">Scarica su</span>
                <span className="text-sm font-bold">App Store</span>
              </span>
            </motion.a>
            <motion.a
              href="https://play.google.com/store/apps/details?id=it.welmed.welmedpro"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 h-12 px-4 rounded-xl cta-gradient text-primary-foreground hover:opacity-90 transition-opacity"
              aria-label="Scarica Welmed Pro su Google Play"
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
