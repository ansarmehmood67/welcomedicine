import { motion } from "framer-motion";
import { ArrowRight, Shield, MessageSquare, Video, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/LP_Medico.png";

const pills = [
  { icon: MessageSquare, label: "Chat illimitate" },
  { icon: Video, label: "Videoconsulti" },
  { icon: FileCheck, label: "Scambio documenti" },
  { icon: Shield, label: "Conforme GDPR" },
];

const HeroSection = () => (
  <section className="hero-gradient pt-36 pb-16 md:pt-48 md:pb-28 overflow-hidden py-[230px]">
    <div className="container max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      {/* Left */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-5 tracking-wide uppercase">
          Welmed — Poliambulatorio autorizzato
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-foreground mb-6">
          Smetti di lavorare gratis{" "}
          <span className="text-primary">fuori dall'ambulatorio.</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
          Mai più messaggi dei pazienti sui tuoi canali personali. Centralizza le comunicazioni medico-paziente in un'unica piattaforma sicura, già usata da +4.500 professionisti.
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          <motion.a
            href="#cta-finale"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 h-13 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Prova gratis <ArrowRight size={16} />
          </motion.a>
          <Link to="/pazienti" className="inline-flex items-center gap-2 h-13 px-8 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary/5 transition-colors">
            Per i pazienti
          </Link>
        </div>

        <p className="text-xs text-muted-foreground/70 mb-6">
          Carta richiesta, nessun addebito il primo mese • 4.500+ medici attivi • Onboarding assistito dal team
        </p>

        <div className="flex flex-wrap gap-2">
          {pills.map(({ icon: Icon, label }, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-pill-bg text-pill-fg"
            >
              <Icon size={14} /> {label}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:block"
      >
        <img
          src={heroImage}
          alt="Piattaforma Welcome Medicine — vista desktop e mobile"
          className="w-full h-auto rounded-2xl shadow-2xl"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
