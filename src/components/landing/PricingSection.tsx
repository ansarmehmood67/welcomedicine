import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const included = [
  "Accesso completo a tutte le funzionalità",
  "Chat illimitate con Pazienti e Colleghi",
  "Videochiamate e chiamate VoIP illimitate",
  "Scambio documentale avanzato senza limiti",
  "Prestazioni di Telemedicina monetizzabili",
  "Repository Pazienti in cloud sicuro",
  "Firma digitale di referti e ricette",
  "Configurazione guidata del profilo",
  "Sito web professionale dedicato",
  "Assistenza tecnica sempre disponibile",
  "Pagamenti online inclusi",
];

const plans = [
  { name: "Piano Mensile", price: "49", unit: "€/mese", billing: "Pagamento e fatturazione mensile", period: "Abbonamento di 6 mesi", highlighted: false },
  { name: "Piano Semestrale", price: "250", unit: "€/6 mesi", billing: "Pagamento e fatturazione semestrale", period: "Abbonamento di 6 mesi", savings: "Risparmi 44€", highlighted: true },
];

const PricingSection = () => (
  <section id="prezzi" className="py-20 md:py-32 dark-section scroll-mt-20 overflow-hidden">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-foreground/10 text-primary-foreground/80 mb-4 uppercase tracking-wide">Piani e Prezzi</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight">
          Scegli il piano{" "}
          <span className="text-primary">più adatto a te</span>
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
          Prova gratuita di 30 giorni. Carta richiesta, nessun addebito il primo mese. Dopo la prova, vincolo di 6 mesi.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
        {plans.map(({ name, price, unit, billing, period, savings, highlighted }, i) => (
          <motion.div key={name} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }} className={`relative rounded-2xl p-8 flex flex-col items-center text-center ${highlighted ? "bg-card border-2 border-primary card-elevated" : "bg-card border border-border card-elevated"}`}>
            {savings && (
              <span className="absolute -top-3 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold cta-gradient text-primary-foreground">
                <Sparkles size={12} /> {savings}
              </span>
            )}
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">{name}</p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl sm:text-6xl font-extrabold text-foreground">{price}</span>
              <span className="text-lg font-semibold text-muted-foreground">{unit}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-1">{period}</p>
            <p className="text-xs text-muted-foreground mb-6">{billing}</p>
            <p className="text-xs font-medium text-primary mb-4">Prova gratuita di 30 giorni inclusa</p>
            <p className="text-[11px] text-muted-foreground/70 mb-6">Trattenuta del 3% per spese bancarie e amministrative</p>
            <Link to="/abbonamento" className={`inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl font-semibold text-sm transition-all ${highlighted ? "cta-gradient text-primary-foreground hover:opacity-90" : "border-2 border-primary text-primary hover:bg-primary/5"}`}>
              Prova gratis <ArrowRight size={16} />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Social proof */}
      <p className="text-center text-sm text-primary-foreground/50 mb-8">
        📈 Già 237 medici hanno attivato la prova questo mese
      </p>

      {/* Revenue callout */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto mb-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl cta-gradient flex items-center justify-center shrink-0">
          <Wallet size={24} className="text-primary-foreground" />
        </div>
        <div>
          <p className="text-lg font-extrabold text-primary-foreground">I tuoi ricavi restano tuoi.</p>
          <p className="text-sm text-primary-foreground/70">Trattenuta solo del 3% per spese bancarie e gestione amministrativa. Il 97% di ogni consulto è tuo.</p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-extrabold text-primary-foreground text-center mb-8">Cosa comprende l'abbonamento?</h3>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {included.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check size={12} className="text-primary" />
              </div>
              <span className="text-sm text-primary-foreground/70 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
