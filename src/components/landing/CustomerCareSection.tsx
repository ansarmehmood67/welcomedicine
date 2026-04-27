import { motion } from "framer-motion";
import { Phone, MessageCircle, Users } from "lucide-react";
import customerCareImg from "@/assets/customer-care.jpg";

const pills = [
  { label: "Numero dedicato", icon: Phone },
  { label: "Risposte immediate", icon: MessageCircle },
  { label: "Supporto anche ai tuoi pazienti", icon: Users },
];

const CustomerCareSection = () => (
  <section className="py-20 md:py-28 overflow-hidden relative">
    {/* Warm gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-secondary" />

    <div className="container max-w-6xl mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={customerCareImg}
            alt="Team di supporto Welcomedicine"
            loading="lazy"
            width={640}
            height={640}
            className="w-full max-w-md mx-auto lg:mx-0 h-auto rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 max-w-md mx-auto lg:mx-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6 text-center lg:text-left"
        >
          <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-pill-bg text-pill-fg uppercase tracking-wide">
            customer care dedicato
          </span>
          <h2 className="text-5xl sm:text-5xl lg:text-5xl font-black sm:font-extrabold text-foreground leading-tight">
            Un team dedicato,{" "}
            <span className="text-primary">al tuo fianco</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Un numero dedicato per ogni esigenza operativa. Risposte immediate
            per non interrompere il tuo flusso di lavoro e garantire la massima
            efficacia nella gestione dei pazienti. Il supporto si estende anche
            ai tuoi pazienti, per un'esperienza senza attriti.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
            {pills.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-card border border-border text-foreground shadow-sm"
              >
                <Icon size={16} className="text-primary" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CustomerCareSection;
