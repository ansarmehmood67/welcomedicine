import { motion } from "framer-motion";
import { ArrowRight, Shield, MessageSquare, Video, FileCheck } from "lucide-react";
import heroImage from "@/assets/LP_Medico.png";

const pills = [
  { icon: MessageSquare, label: "Chat illimitate" },
  { icon: Video, label: "Videoconsulti" },
  { icon: FileCheck, label: "Scambio documenti" },
  { icon: Shield, label: "Conforme GDPR" },
];

const HeroSection = () => (
  <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
    <div className="container max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      {/* Left */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-5 tracking-wide uppercase">
          A WelMed brand — Tecnologia ospedaliera per il professionista
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground mb-5">
          La medicina non finisce in ambulatorio:{" "}
          <span className="text-primary">continua online con Welcomedicine.</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
          Organizza e remunera la tua attività clinica fuori dall'ambulatorio. Un centro erogatore privato che mette a disposizione dei singoli medici l'esperienza maturata da WelMed nella digitalizzazione delle più moderne strutture sanitarie.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <a href="#cta-finale" className="inline-flex items-center gap-2 h-12 px-7 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            Provalo gratuitamente <ArrowRight size={16} />
          </a>
          <a href="#funzioni" className="inline-flex items-center gap-2 h-12 px-7 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary/5 transition-colors">
            Scopri le funzionalità
          </a>
        </div>

        <div className="flex flex-wrap gap-2">
          {pills.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-pill-bg text-pill-fg">
              <Icon size={14} /> {label}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Right – Dashboard mock */}
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden md:block">
        <div className="rounded-2xl bg-card border border-border card-elevated p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full cta-gradient flex items-center justify-center text-primary-foreground font-bold text-sm">W</div>
            <div>
              <p className="text-sm font-semibold text-foreground">Dashboard Medico</p>
              <p className="text-xs text-muted-foreground">3 nuovi messaggi • 2 videoconsulti oggi</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { title: "Paziente: Maria B.", sub: "Presa visione esami • 10 min fa", color: "bg-primary/10 text-primary" },
              { title: "Collega: Dr. Rossini", sub: "Videoconsulto alle 15:00", color: "bg-accent text-accent-foreground" },
              { title: "Ricetta digitale", sub: "Prescrizione firmata e inviata", color: "bg-pill-bg text-pill-fg" },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold ${item.color}`}>
                  {item.title.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
