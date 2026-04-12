import { motion } from "framer-motion";
import { ArrowRight, Check, Shield, Clock, Headphones, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import heroImage from "@/assets/LP_Medico.png";

const features = [
  { icon: Check, text: "Accesso completo a tutte le funzionalità della piattaforma" },
  { icon: Clock, text: "Prova gratuita di 30 giorni" },
  { icon: Headphones, text: "Configurazione guidata del profilo" },
  { icon: Globe, text: "Sito web dedicato" },
  { icon: Shield, text: "Assistenza tecnica sempre disponibile" },
];

const allIncluded = [
  "Chat illimitate con Pazienti e Colleghi",
  "Videochiamate e chiamate VoIP illimitate",
  "Scambio documentale avanzato senza limiti",
  "Prestazioni di Telemedicina monetizzabili",
  "Repository Pazienti in cloud sicuro",
  "Firma digitale di referti e ricette",
  "Pagamenti online inclusi",
  "Conforme GDPR",
];

const plans = [
  {
    id: "mensile",
    name: "Mensile",
    price: "49",
    unit: "€/mese",
    billing: "Pagamento e fatturazione mensile",
    period: "Abbonamento di 6 mesi",
    highlighted: false,
  },
  {
    id: "semestrale",
    name: "Semestrale",
    price: "250",
    unit: "€/6 mesi",
    billing: "Pagamento e fatturazione semestrale",
    period: "Abbonamento di 6 mesi",
    savings: "Risparmi 44€",
    highlighted: true,
  },
];

const CHECKOUT_URL = "https://www.welcomedicineonline.it/product/abbonamento-welcomedicine";

const Abbonamento = () => (
  <>
    <Navbar />
    {/* Hero */}
    <section className="pt-36 pb-16 md:pt-48 md:pb-24 bg-secondary-foreground overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-5 tracking-wide uppercase">
            Abbonamento Welcome Medicine
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-primary-foreground mb-6">
            Tutto incluso per{" "}
            <span className="text-primary">un'attivazione immediata</span>
          </h1>
          <p className="text-primary-foreground/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            A partire da <strong className="text-primary-foreground">49€/mese</strong> con 1 mese di prova gratuita e 0,10€ di quota di attivazione.
          </p>

          <div className="space-y-3 mb-8">
            {features.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-primary" />
                </div>
                <span className="text-sm text-primary-foreground/80">{text}</span>
              </div>
            ))}
          </div>

          <motion.a
            href="#scegli-piano"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 h-13 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Scegli il tuo piano <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block"
        >
          <img
            src={heroImage}
            alt="Piattaforma Welcome Medicine — vista dell'app"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>

    {/* Plan selection */}
    <section id="scegli-piano" className="py-20 md:py-28 scroll-mt-20">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Scegli il piano <span className="text-primary">più adatto a te</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Prova gratuita di 30 giorni. Carta richiesta, nessun addebito il primo mese.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {plans.map(({ id, name, price, unit, billing, period, savings, highlighted }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
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
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">{name}</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl sm:text-6xl font-extrabold text-foreground">{price}</span>
                <span className="text-lg font-semibold text-muted-foreground">{unit}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-1">{period}</p>
              <p className="text-xs text-muted-foreground mb-6">{billing}</p>
              <p className="text-xs font-medium text-primary mb-4">Prova gratuita di 30 giorni inclusa</p>
              <p className="text-[11px] text-muted-foreground/70 mb-6">
                I ricavi delle consulenze restano al medico — trattenuta del 3% (bancaria + amministrativa)
              </p>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl font-semibold text-sm transition-all ${
                  highlighted
                    ? "cta-gradient text-primary-foreground hover:opacity-90"
                    : "border-2 border-primary text-primary hover:bg-primary/5"
                }`}
              >
                Attiva ora <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* All included */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-extrabold text-foreground text-center mb-8">Cosa comprende l'abbonamento?</h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {allIncluded.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-16">
          <p className="text-xs text-muted-foreground/70 mb-4">
            Nessun addebito il primo mese • Disdetta tramite customer care • I tuoi dati restano tuoi
          </p>
          <Link to="/" className="text-sm text-primary font-semibold hover:underline">
            ← Torna alla home
          </Link>
        </motion.div>
      </div>
    </section>

    <Footer />
  </>
);

export default Abbonamento;
