import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Check, Wallet, Shield, Globe, Video, MessageSquare, FileText, Stethoscope, HardDrive, PenTool, UserCog, Headphones, CreditCard } from "lucide-react";

function AnimatedCounter({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration, ease: "easeOut" });
    }
  }, [isInView, target, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const included = [
  { label: "Accesso completo a tutte le funzionalità", icon: Shield },
  { label: "Chat illimitate con Pazienti e Colleghi", icon: MessageSquare },
  { label: "Videochiamate e chiamate VoIP illimitate", icon: Video },
  { label: "Scambio documentale avanzato senza limiti", icon: FileText },
  { label: "Prestazioni di Telemedicina monetizzabili", icon: Stethoscope },
  { label: "Repository Pazienti in cloud sicuro", icon: HardDrive },
  { label: "Firma digitale di referti e ricette", icon: PenTool },
  { label: "Configurazione guidata del profilo", icon: UserCog },
  { label: "Sito web professionale dedicato", icon: Globe },
  { label: "Assistenza tecnica sempre disponibile", icon: Headphones },
  { label: "Pagamenti online inclusi", icon: CreditCard },
];

const PricingDetailsSection = () => (
  <section className="py-20 md:py-28 overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-secondary" />
    <div className="container max-w-6xl mx-auto px-4 relative z-10">
      {/* Revenue callout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="w-16 h-16 rounded-2xl cta-gradient flex items-center justify-center mx-auto mb-6">
          <Wallet size={28} className="text-primary-foreground" />
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
          I ricavi restano <span className="text-primary">tuoi</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
          Trattenuta solo del 3% per spese bancarie e gestione amministrativa. Il 97% di ogni consulto è tuo.
        </p>
        <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/5 border border-primary/15">
          <span className="text-4xl font-extrabold text-primary"><AnimatedCounter target={97} />%</span>
          <span className="text-sm text-muted-foreground text-left leading-tight">dei ricavi delle tue<br />prestazioni è tuo</span>
        </div>
      </motion.div>

      {/* Cosa comprende */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-10">
          Cosa comprende il tuo abbonamento?
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {included.map(({ label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="flex items-center gap-3 rounded-xl bg-card border border-border p-4 shadow-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground leading-snug">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingDetailsSection;
