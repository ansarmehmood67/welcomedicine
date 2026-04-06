import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const included = [
  "Accesso completo a tutte le funzionalità",
  "Chat illimitate con Pazienti e Colleghi",
  "Videochiamate e chiamate VoIP illimitate",
  "Scambio documentale avanzato senza limiti",
  "Prestazioni di Telemedicina a pagamento",
  "Repository Pazienti in cloud sicuro",
  "Firma digitale di referti e ricette",
  "Configurazione guidata del profilo",
  "Sito web professionale dedicato",
  "Assistenza tecnica sempre disponibile",
];

const plans = [
  {
    name: "Piano Mensile",
    price: "49",
    unit: "€/mese",
    billing: "Pagamento e fatturazione mensile",
    period: "Abbonamento di 6 mesi",
    highlighted: false,
  },
  {
    name: "Piano Semestrale",
    price: "250",
    unit: "€/6 mesi",
    billing: "Pagamento e fatturazione semestrale",
    period: "Abbonamento di 6 mesi",
    savings: "Risparmi 44€",
    highlighted: true,
  },
];

const PricingSection = () => (
  <section id="prezzi" className="py-16 md:py-24 scroll-mt-20">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">
          Piani e Prezzi
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Scegli il piano più adatto a te
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Inizia con la prova gratuita di 30 giorni: zero costi, zero rischi, disdici quando vuoi.
        </p>
      </motion.div>

      {/* Plans */}
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
        {plans.map(({ name, price, unit, billing, period, savings, highlighted }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl p-8 flex flex-col items-center text-center ${
              highlighted
                ? "bg-card border-2 border-primary card-elevated"
                : "bg-card border border-border card-elevated"
            }`}
          >
            {savings && (
              <span className="absolute -top-3 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold cta-gradient text-primary-foreground">
                <Sparkles size={12} /> {savings}
              </span>
            )}
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              {name}
            </p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-foreground">{price}</span>
              <span className="text-lg font-semibold text-muted-foreground">{unit}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-1">{period}</p>
            <p className="text-xs text-muted-foreground mb-6">{billing}</p>
            <p className="text-xs font-medium text-primary mb-6">Prova gratuita di 30 giorni inclusa</p>
            <a
              href="#"
              className={`inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl font-semibold text-sm transition-all ${
                highlighted
                  ? "cta-gradient text-primary-foreground hover:opacity-90"
                  : "border-2 border-primary text-primary hover:bg-primary/5"
              }`}
            >
              Attiva la prova gratuita <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>

      {/* What's included */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h3 className="text-xl font-bold text-foreground text-center mb-8">
          Cosa comprende l'abbonamento?
        </h3>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {included.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check size={12} className="text-primary" />
              </div>
              <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Demo CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-muted-foreground text-sm mb-4">
          Vuoi scoprire come Welcomedicine si adatta alla tua pratica clinica?
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 h-11 px-7 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary/5 transition-colors"
        >
          Prenota una demo
        </a>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
