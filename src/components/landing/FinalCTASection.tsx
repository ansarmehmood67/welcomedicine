import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => (
  <section id="cta-finale" className="py-20 md:py-32 section-alt overflow-hidden">
    <div className="container max-w-4xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 leading-tight">
          Unisciti all'ecosistema già scelto dai{" "}
          <span className="text-primary">migliori ospedali d'Italia</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-base sm:text-lg">
          Migliaia di professionisti della salute usano già la tecnologia WellMed. Inizia la tua prova gratuita e riprendi il controllo della tua comunicazione.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 h-13 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Prova gratis 30 giorni <ArrowRight size={16} />
          </motion.a>
          <a href="#" className="inline-flex items-center gap-2 h-13 px-8 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors">
            Prenota una demo
          </a>
        </div>
        <p className="text-muted-foreground/60 text-xs mt-6">Nessuna carta di credito richiesta • Cancella quando vuoi • Assistenza dedicata</p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
