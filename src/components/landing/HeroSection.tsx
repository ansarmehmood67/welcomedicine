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
  <section className="hero-gradient pt-28 pb-12 md:pt-48 md:pb-28 overflow-hidden w-full max-w-full">
    <div className="container max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      {/* Left */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center lg:text-left min-w-0">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-pill-bg text-pill-fg mb-5 tracking-wide uppercase">
          A Welmed brand — Tecnologia ospedaliera per il professionista
        </span>
        <h1 className="text-5xl sm:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-[1.1] text-foreground mb-6">
          Smetti di lavorare su <span style={{ color: "#25D366" }} className="inline-block animate-wiggle origin-bottom">WhatsApp</span>{" "}
          <span className="text-primary">fuori dall'ambulatorio.</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
          Una piattaforma <span className="font-semibold">conforme GDPR</span> che integra <span className="font-semibold">messaggistica, video e documenti</span>. Usata da <span className="font-semibold">+4.500 medici</span> per offrire un <span className="font-semibold">servizio più strutturato</span> ai propri pazienti.
        </p>

  <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
          <a
            href="https://www.welcomedicineonline.it/product/abbonamento-welcomedicine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-xl cta-gradient text-primary-foreground font-bold text-base hover:opacity-90 transition-opacity sm:h-12 sm:px-7 sm:font-semibold sm:text-sm"
          >
            Prova gratis <ArrowRight size={16} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground/70 mb-6">
          Carta richiesta, nessun addebito il primo mese • 4.500+ medici attivi • Onboarding assistito dal team
        </p>

        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
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
        className="relative"
      >
        <img
          src={heroImage}
          alt="Piattaforma Welcomedicine — vista desktop e mobile"
          loading="lazy"
          className="w-full max-w-md mx-auto h-auto drop-shadow-2xl md:w-[125%] md:max-w-none md:-mr-[25%]"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
