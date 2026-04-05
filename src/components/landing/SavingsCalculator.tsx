import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp, Mail } from "lucide-react";

const SavingsCalculator = () => {
  const [emails, setEmails] = useState(80);
  const [patients, setPatients] = useState(30);

  // Rough estimates inspired by meeting data
  const timeSavedMinutesPerDay = Math.round(emails * 0.6); // ~0.6 min saved per email
  const timeSavedHoursPerWeek = Math.round((timeSavedMinutesPerDay * 5) / 60);
  const potentialRevenue = Math.round(patients * 4 * 15); // 15 € avg per patient interaction saved/monetised per month

  return (
    <section className="py-16 md:py-24 section-alt">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">
            Calcola il risparmio
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Quanto tempo e denaro puoi recuperare?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Inserisci i tuoi dati per scoprire l'impatto di Welcome Medicine sulla tua pratica.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl bg-card border border-border card-elevated p-6 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <Mail size={16} className="text-primary" />
                  Email ricevute al giorno
                </label>
                <input
                  type="range"
                  min={10}
                  max={200}
                  value={emails}
                  onChange={(e) => setEmails(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>10</span>
                  <span className="text-sm font-bold text-primary">{emails}</span>
                  <span>200</span>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <TrendingUp size={16} className="text-primary" />
                  Pazienti a settimana
                </label>
                <input
                  type="range"
                  min={5}
                  max={100}
                  value={patients}
                  onChange={(e) => setPatients(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>5</span>
                  <span className="text-sm font-bold text-primary">{patients}</span>
                  <span>100</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col justify-center gap-5">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <Clock size={28} className="text-primary shrink-0" />
                <div>
                  <p className="text-2xl font-extrabold text-foreground">
                    ~{timeSavedHoursPerWeek}h
                    <span className="text-base font-medium text-muted-foreground"> / settimana</span>
                  </p>
                  <p className="text-xs text-muted-foreground">Tempo risparmiato sulla gestione email</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <TrendingUp size={28} className="text-primary shrink-0" />
                <div>
                  <p className="text-2xl font-extrabold text-foreground">
                    +€{potentialRevenue}
                    <span className="text-base font-medium text-muted-foreground"> / mese</span>
                  </p>
                  <p className="text-xs text-muted-foreground">Potenziale ricavo da consulti monetizzati</p>
                </div>
              </div>

              <a
                href="#cta-finale"
                className="inline-flex items-center justify-center gap-2 h-12 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity mt-2"
              >
                Scopri se fa per te <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
