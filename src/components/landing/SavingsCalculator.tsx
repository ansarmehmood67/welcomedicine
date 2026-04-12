import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp, Mail } from "lucide-react";

const SavingsCalculator = () => {
  const [emails, setEmails] = useState(22);

  // From spreadsheet: 7 min per email, 50% time savings
  const timeSavedMinutesPerDay = emails * 7 * 0.5;
  const timeSavedHoursPerDay = timeSavedMinutesPerDay / 60;
  const timeSavedFormatted = timeSavedHoursPerDay < 1
    ? `${Math.round(timeSavedMinutesPerDay)} min`
    : `${timeSavedHoursPerDay.toFixed(1)}h`;

  // 1/5 of emails convert to consults at €40, 20 working days/month
  const potentialRevenue = Math.round(emails * 20 * (1 / 5) * 40);

  return (
    <section className="py-20 md:py-32 section-alt overflow-hidden">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">Calcola il risparmio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
            Quanto tempo e denaro{" "}
            <span className="text-primary">puoi recuperare?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Inserisci i tuoi dati per scoprire l'impatto di Welcomedicine sulla tua pratica.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="rounded-2xl bg-card border border-border card-elevated p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <Mail size={16} className="text-primary" /> Email ricevute al giorno
                </label>
                <input type="range" min={5} max={60} value={emails} onChange={(e) => setEmails(Number(e.target.value))} className="w-full accent-primary" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>5</span>
                  <span className="text-sm font-bold text-primary">{emails}</span>
                  <span>60</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic">
                Basato su: 7 min per email, 50% risparmio tempo, 1 email su 5 convertibile in consulto a €40.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-5">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <Clock size={28} className="text-primary shrink-0" />
                <div>
                  <p className="text-2xl font-extrabold text-foreground">~{timeSavedFormatted}<span className="text-base font-medium text-muted-foreground"> / giorno</span></p>
                  <p className="text-xs text-muted-foreground">Tempo risparmiato sulla gestione email</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <TrendingUp size={28} className="text-primary shrink-0" />
                <div>
                  <p className="text-2xl font-extrabold text-foreground">+€{potentialRevenue}<span className="text-base font-medium text-muted-foreground"> / mese</span></p>
                  <p className="text-xs text-muted-foreground">Potenziale ricavo da consulti monetizzati</p>
                </div>
              </motion.div>
              <a href="#cta-finale" className="inline-flex items-center justify-center gap-2 h-12 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity mt-2">
                Prova gratis 30 giorni <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
