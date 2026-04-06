import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import logoSanRaffaele from "@/assets/logos/san-raffaele.png";
import logoGSD from "@/assets/logos/gruppo-san-donato.png";
import logoCDI from "@/assets/logos/cdi.png";
import logoICCS from "@/assets/logos/iccs.png";
import logoSanRaffaeleRoma from "@/assets/logos/partners/san-raffaele-roma.png";
import logoCampusBioMedico from "@/assets/logos/partners/campus-biomedico.png";
import logoCasaDellaSalute from "@/assets/logos/partners/casa-della-salute.png";
import logoGVM from "@/assets/logos/partners/gvm.png";
import logoPolimedico from "@/assets/logos/partners/polimedico.png";
import logoAstiClinic from "@/assets/logos/partners/asti-clinic.png";
import logoVirtualHospital from "@/assets/logos/partners/virtual-hospital.png";
import logoItsalute from "@/assets/logos/partners/itsalute.png";

const hospitals = [
  { name: "IRCCS Ospedale San Raffaele", logo: logoSanRaffaele, isLarge: true },
  { name: "Gruppo San Donato", logo: logoGSD, isLarge: true },
  { name: "CDI - Centro Diagnostico Italiano", logo: logoCDI, isLarge: true },
  { name: "Istituto Clinico Città Studi", logo: logoICCS, isLarge: true },
  { name: "San Raffaele Roma", logo: logoSanRaffaeleRoma, isLarge: false },
  { name: "Campus Bio-Medico", logo: logoCampusBioMedico, isLarge: false },
  { name: "Casa della Salute", logo: logoCasaDellaSalute, isLarge: false },
  { name: "GVM Care & Research", logo: logoGVM, isLarge: false },
  { name: "Polimedico", logo: logoPolimedico, isLarge: false },
  { name: "Asti Clinic", logo: logoAstiClinic, isLarge: false },
  { name: "Virtual Hospital", logo: logoVirtualHospital, isLarge: false },
  { name: "Itsalute", logo: logoItsalute, isLarge: false },
];

const textPartners = [
  "RAF First Clinic",
  "San Carlo di Nancy",
  "Tiberia Hospital",
  "Maria Cecilia Hospital",
  "Santa Maria Hospital",
  "Welcare Melanoma",
];

const stats = [
  { value: 100, prefix: "+", suffix: "", label: "Strutture Sanitarie" },
  { value: 250000, prefix: "+", suffix: "", label: "Pazienti gestiti" },
  { value: 900000, prefix: "+", suffix: "", label: "Prestazioni eseguite" },
  { value: 4500, prefix: "+", suffix: "", label: "Professionisti sanitari" },
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

      {/* Logo carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="relative overflow-hidden mb-8"
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused] w-max items-center">
          {[...hospitals, ...hospitals, ...hospitals].map(({ name, logo, isLarge }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex flex-col items-center justify-center px-8 md:px-10 py-4 flex-shrink-0 hover:scale-105 transition-all duration-300"
              title={name}
            >
              <img
                src={logo}
                alt={name}
                loading="lazy"
                className={`${isLarge ? "h-16 md:h-24" : "h-10 md:h-14"} w-auto object-contain`}
              />
              {!isLarge && (
                <span className="text-[10px] text-muted-foreground mt-1.5 font-medium max-w-[100px] text-center leading-tight">{name}</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Additional text partners */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {textPartners.map((name) => (
          <span
            key={name}
            className="px-4 py-2 rounded-full border border-border bg-card text-xs font-semibold text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all"
          >
            {name}
          </span>
        ))}
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
