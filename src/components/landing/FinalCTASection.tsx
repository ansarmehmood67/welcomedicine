import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => (
  <section id="cta-finale" className="dark-section py-16 md:py-24">
    <div className="container max-w-4xl mx-auto px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-4">
          Unisciti all'ecosistema già scelto dai migliori ospedali d'Italia
        </h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto text-base sm:text-lg">
          Migliaia di professionisti della salute usano già la tecnologia WellMed. Inizia la tua prova gratuita e riprendi il controllo della tua comunicazione.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 h-13 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Prova gratis 30 giorni <ArrowRight size={16} />
          </a>
          <a href="#" className="inline-flex items-center gap-2 h-13 px-8 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:border-primary-foreground/60 transition-colors">
            Prenota una demo
          </a>
        </div>
        <p className="text-primary-foreground/50 text-xs mt-6">Nessuna carta di credito richiesta • Cancella quando vuoi • Assistenza dedicata</p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
