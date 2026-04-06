import { motion } from "framer-motion";

import logoSanRaffaele from "@/assets/logos/san-raffaele.png";
import logoGSD from "@/assets/logos/gruppo-san-donato.png";
import logoCDI from "@/assets/logos/cdi.png";
import logoHumanitas from "@/assets/logos/humanitas.png";
import logoICCS from "@/assets/logos/iccs.png";

const hospitals = [
  { name: "Ospedale San Raffaele", logo: logoSanRaffaele },
  { name: "Gruppo San Donato", logo: logoGSD },
  { name: "CDI - Centro Diagnostico Italiano", logo: logoCDI },
  { name: "Humanitas", logo: logoHumanitas },
  { name: "Istituto Clinico Città Studi", logo: logoICCS },
];

const stats = [
  { value: "+100", label: "Strutture Sanitarie" },
  { value: "+250.000", label: "Pazienti gestiti" },
  { value: "+900.000", label: "Prestazioni eseguite" },
  { value: "+4.500", label: "Professionisti sanitari" },
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

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
      >
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-primary">{value}</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* Logos */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
      >
        {hospitals.map(({ name, logo }) => (
          <div
            key={name}
            className="flex items-center justify-center px-4 py-3 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            title={name}
          >
            <img
              src={logo}
              alt={name}
              loading="lazy"
              className="h-10 md:h-14 w-auto object-contain"
            />
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
        Pensato dai Medici. Per i Medici. Welcome Medicine porta la stessa tecnologia ospedaliera collaudata direttamente al professionista.
      </motion.p>
    </div>
  </section>
);

export default TrustBar;
