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
import logoRAF from "@/assets/logos/partners/raf-first-clinic.png";
import logoSanCarloNancy from "@/assets/logos/partners/san-carlo-nancy.png";
import logoTiberia from "@/assets/logos/partners/tiberia-hospital.png";
import logoMariaCecilia from "@/assets/logos/partners/maria-cecilia.png";
import logoSantaMaria from "@/assets/logos/partners/santa-maria.png";
import logoWelcare from "@/assets/logos/partners/welcare-melanoma.png";

const allPartners = [
  { name: "IRCCS Ospedale San Raffaele", logo: logoSanRaffaele, large: true },
  { name: "Gruppo San Donato", logo: logoGSD, large: true },
  { name: "CDI Centro Diagnostico", logo: logoCDI, large: true },
  { name: "Istituto Clinico Città Studi", logo: logoICCS, large: true },
  { name: "GVM Care & Research", logo: logoGVM, large: false },
  { name: "San Raffaele Roma", logo: logoSanRaffaeleRoma, large: false },
  { name: "Campus Bio-Medico", logo: logoCampusBioMedico, large: false },
  { name: "Casa della Salute", logo: logoCasaDellaSalute, large: false },
  { name: "Polimedico", logo: logoPolimedico, large: false },
  { name: "Asti Clinic", logo: logoAstiClinic, large: false },
  { name: "Virtual Hospital", logo: logoVirtualHospital, large: false },
  { name: "Itsalute", logo: logoItsalute, large: false },
  { name: "RAF First Clinic", logo: logoRAF, large: false },
  { name: "San Carlo di Nancy", logo: logoSanCarloNancy, large: false },
  { name: "Tiberia Hospital", logo: logoTiberia, large: false },
  { name: "Maria Cecilia Hospital", logo: logoMariaCecilia, large: false },
  { name: "Santa Maria Hospital", logo: logoSantaMaria, large: false },
  { name: "Welcare Melanoma", logo: logoWelcare, large: false },
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
  <section className="py-20 md:py-32 dark-section overflow-hidden">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60 mb-2">
          Ecosistema WellMed
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
          La tecnologia già scelta dalle{" "}
          <span className="text-primary">migliori strutture sanitarie</span> d'Italia
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
            <p className="text-xs sm:text-sm text-primary-foreground/60 mt-1">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* All logos in a static grid */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
      >
        {allPartners.map(({ name, logo, large }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="flex flex-col items-center justify-center rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 hover:border-primary/40 hover:bg-primary-foreground/10 transition-all aspect-square"
            title={name}
          >
            <img
              src={logo}
              alt={name}
              loading="lazy"
              className={`${large ? "h-12 md:h-16" : "h-8 md:h-10"} w-auto object-contain mb-2`}
            />
            <span className="text-[10px] sm:text-xs text-primary-foreground/70 font-medium text-center leading-tight line-clamp-2">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-sm text-primary-foreground/60 mt-8 max-w-lg mx-auto font-medium"
      >
        Pensato dai Medici. Per i Medici. Welcome Medicine porta la stessa tecnologia ospedaliera collaudata direttamente al professionista.
      </motion.p>
    </div>
  </section>
);

export default TrustBar;
