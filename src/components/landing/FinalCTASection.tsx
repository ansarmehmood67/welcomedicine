import { motion } from "framer-motion";
import { ArrowRight, Users, Building2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Users, value: "4.500+", label: "Medici attivi" },
  { icon: Building2, value: "100+", label: "Strutture sanitarie" },
  { icon: ShieldCheck, value: "100%", label: "Conforme GDPR" },
];

const FinalCTASection = () => (
  <section id="cta-finale" className="py-20 md:py-32 section-alt overflow-hidden">
    <div className="container max-w-4xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
  <h2 className="text-5xl sm:text-5xl lg:text-5xl font-black sm:font-extrabold text-foreground mb-5 leading-tight">
          Inizia oggi,{" "}
          <span className="text-primary">prova gratis per 30 giorni</span>
        </h2>
        <p className="text-muted-foreground mb-4 max-w-xl mx-auto text-base sm:text-lg">
          Unisciti ai migliori professionisti della salute che hanno già scelto Welcomedicine per la loro pratica clinica.
        </p>

        {/* Urgency */}
        <p className="text-sm font-semibold text-primary mb-8">
          onboarding assistito con il nostro team
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg cta-gradient flex items-center justify-center">
                <Icon size={18} className="text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-lg font-extrabold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.welcomedicineonline.it/product/abbonamento-welcomedicine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Prova gratis <ArrowRight size={16} />
          </a>
        </div>
        <p className="text-muted-foreground/60 text-xs mt-6">Nessun addebito il primo mese • Disdetta tramite customer care • I tuoi dati restano tuoi</p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
