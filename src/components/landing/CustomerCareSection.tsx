import { motion } from "framer-motion";
import { Headphones } from "lucide-react";

const pills = ["Numero dedicato", "Risposte immediate", "Supporto anche ai tuoi pazienti"];

const CustomerCareSection = () => (
  <section className="py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
    <div className="container max-w-5xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
          <Headphones size={36} className="text-primary-foreground" />
        </div>

        <div className="text-center md:text-left space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
            Un team dedicato, al tuo fianco
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl">
            Un numero dedicato per ogni esigenza operativa. Risposte immediate per non interrompere il tuo flusso di lavoro e garantire la massima efficacia nella gestione dei pazienti. Il supporto si estende anche ai tuoi pazienti, per un'esperienza senza attriti.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
            {pills.map((label) => (
              <span
                key={label}
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-foreground/15 text-primary-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CustomerCareSection;
