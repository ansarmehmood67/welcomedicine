import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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
  { value: 100, prefix: "+", suffix: "", label: "Strutture Sanitarie", decimals: false },
  { value: 250000, prefix: "+", suffix: "", label: "Pazienti gestiti", decimals: false },
  { value: 900000, prefix: "+", suffix: "", label: "Prestazioni eseguite", decimals: false },
  { value: 4500, prefix: "+", suffix: "", label: "Professionisti sanitari", decimals: false },
];

function formatNumber(n: number) {
  return n.toLocaleString("it-IT");
}

function AnimatedCounter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (v) => `${prefix}${formatNumber(Math.round(v))}${suffix}`);

  useEffect(() => {
    if (isInView) {
      animate(motionVal, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, motionVal, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const TrustBar = () => (
  <section className="py-14 md:py-20 bg-background border-b border-border">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
          Ecosistema WellMed
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
          La tecnologia già scelta dalle migliori strutture sanitarie d'Italia
        </h2>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
      >
        {stats.map(({ value, prefix, suffix, label }) => (
          <div key={label} className="text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-primary">
              <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* Infinite scrolling carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="relative overflow-hidden"
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {[...hospitals, ...hospitals, ...hospitals].map(({ name, logo }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center px-10 md:px-14 py-5 flex-shrink-0 hover:scale-105 transition-all duration-300"
              title={name}
            >
              <img
                src={logo}
                alt={name}
                loading="lazy"
                className="h-20 md:h-28 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-sm text-muted-foreground mt-8 max-w-lg mx-auto font-medium"
      >
        Pensato dai Medici. Per i Medici. Welcome Medicine porta la stessa tecnologia ospedaliera collaudata direttamente al professionista.
      </motion.p>
    </div>
  </section>
);

export default TrustBar;
