import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const hospitals = [
  { name: "Ospedale San Raffaele", initials: "SR" },
  { name: "Gruppo San Donato", initials: "GSD" },
  { name: "CDI - Centro Diagnostico Italiano", initials: "CDI" },
  { name: "Humanitas", initials: "HU" },
  { name: "Istituto Clinico Città Studi", initials: "ICCS" },
];

const TrustBar = () => (
  <section className="py-12 md:py-16 bg-background border-b border-border">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Ecosistema WellMed
        </p>
        <h2 className="text-lg sm:text-xl font-bold text-foreground">
          La tecnologia già scelta dalle migliori strutture sanitarie d'Italia
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
      >
        {hospitals.map(({ name, initials }) => (
          <div
            key={name}
            className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-muted/50 border border-border"
            title={name}
          >
            <Building2 size={18} className="text-primary shrink-0" />
            <span className="text-sm font-semibold text-foreground whitespace-nowrap">
              {initials}
            </span>
            <span className="hidden sm:inline text-xs text-muted-foreground truncate max-w-[140px]">
              {name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-xs text-muted-foreground mt-6 max-w-lg mx-auto"
      >
        Welcome Medicine porta la stessa tecnologia ospedaliera collaudata direttamente al professionista.
      </motion.p>
    </div>
  </section>
);

export default TrustBar;
