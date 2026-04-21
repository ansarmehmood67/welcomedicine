import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// URL dei loghi forniti — ordine richiesto
const allPartners = [
  { name: "IRCCS Ospedale San Raffaele", logo: "https://wp-uploads.welmed.it/uploads/sites/5/2024/01/Osr.png", large: true },
  { name: "Gruppo San Donato (GSD)", logo: "https://media.licdn.com/dms/image/v2/C560BAQFLj9aZzXzm3A/company-logo_200_200/company-logo_200_200/0/1630642272943/grupposandonato_logo?e=2147483647&v=beta&t=l_9IUk4jgJqTxCtVfHytprNmSQZCSWEf5jRKW2PkRrA", large: true },
  { name: "GVM Care & Research", logo: "https://www.gvmnet.it/App_Themes/GVMNet/images/gruppovillamaria_logo.png", large: false },
  { name: "Campus Bio-Medico", logo: "https://wp-uploads.welmed.it/uploads/sites/4/2024/09/Logo-Big.svg", large: true },
  { name: "CDI Centro Diagnostico", logo: "https://wp-uploads.welmed.it/uploads/sites/10/2024/05/CDI_logo.svg", large: true },
  { name: "Casa della Salute", logo: "https://cds.it/wp-content/uploads/2023/02/CDS_Logo.svg", large: false },
  { name: "San Raffaele Roma", logo: "https://wp-uploads.welmed.it/uploads/sites/11/2024/06/Logo_SRRoma.svg", large: false },
  { name: "Ospedale San Carlo di Nancy", logo: "https://wp-uploads.welmed.it/uploads/sites/12/2024/09/Logo-Horizontal.svg", large: false },
  { name: "Tiberia Hospital", logo: "https://wp-uploads.welmed.it/uploads/sites/7/2024/04/tiberia.svg", large: false },
  { name: "Maria Cecilia Hospital", logo: "https://wp-uploads.welmed.it/uploads/sites/13/2024/10/Maria-Cecilia-Hospital.svg", large: false },
  { name: "Santa Maria Hospital", logo: "https://wp-uploads.welmed.it/uploads/sites/15/2026/02/Progetto-senza-titolo-2.svg", large: false },
  { name: "Italsalute", logo: "https://wp-uploads.welmed.it/uploads/sites/14/2025/12/logo_itsalute.png", large: false },
  { name: "Asti Clinic", logo: "https://www.asticlinic.it/wp-content/uploads/2022/11/logo_asti-clinic.png", large: false },
  { name: "Polimedico", logo: "https://wp-uploads.welmed.it/uploads/sites/8/2024/05/Logo-Polimedico.svg", large: false },
  { name: "Virtual Hospital", logo: "https://www.virtualhosp.it/assets/images/svg/logo.svg", large: false },
  { name: "Welcare CAR-T", logo: "https://www.wel-care.it/car-t/img/logo.svg", large: false },
  { name: "Welcare Melanoma", logo: "https://www.wel-care.it/melanoma/img/logo.svg", large: false },
];

const primaryStats = [
  { value: 4500, prefix: "+", suffix: "", label: "Professionisti" },
  { value: 100, prefix: "+", suffix: "", label: "Strutture" },
  { value: 1, prefix: "+", suffix: "MM", label: "Prestazioni sanitarie" },
];

const secondaryStats = [
  { value: 35, prefix: "+", suffix: "", label: "Specialità" },
  { value: 5000, prefix: "+", suffix: "", label: "Accessi giornalieri" },
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
  <>
    {/* SEZIONE 1: Partner — loghi */}
    <section className="py-16 md:py-24 overflow-hidden section-alt bg-primary-foreground">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Ecosistema Welmed
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            La tecnologia già scelta <span className="text-primary"><br />dalle migliori strutture sanitarie in Italia</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-sm text-muted-foreground mb-14 max-w-lg mx-auto font-medium"
        >
          Pensato dai Medici. Per i Medici. Welcomedicine porta la stessa tecnologia ospedaliera collaudata direttamente al professionista.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {allPartners.map(({ name, logo, large }, i) => {
            const isThirdToLast = i === allPartners.length - 3;
            // 18 loghi su griglia a 5 colonne: ultima riga ha 3 elementi → centrali (col 2,3,4)
            const offsetClass = isThirdToLast ? "lg:col-start-2" : "";
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`flex flex-col items-center justify-center p-4 ${offsetClass}`}
                title={name}
              >
                <img
                  src={logo}
                  alt={name}
                  loading="lazy"
                  className={`${large ? "h-16 md:h-20" : "h-12 md:h-16"} w-auto object-contain mb-3`}
                />
                <span className="text-[10px] sm:text-xs text-muted-foreground font-medium text-center leading-tight line-clamp-2">
                  {name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>

    {/* SEZIONE 2: Ecosistema — numeri */}
    <section className="py-24 md:py-36 overflow-hidden relative" style={{ background: "linear-gradient(135deg, hsl(210 87% 15%) 0%, hsl(216 43% 12%) 50%, hsl(220 40% 18%) 100%)" }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(210 87% 63% / 0.15), transparent 50%), radial-gradient(circle at 80% 20%, hsl(210 87% 63% / 0.1), transparent 40%)" }} />
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Ecosistema Welmed
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            I numeri del nostro{" "}
            <span className="text-primary">ecosistema</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 mt-4 max-w-2xl mx-auto">
            Un network in crescita costante di strutture, professionisti e pazienti che ogni giorno scelgono Welmed per la gestione della salute.
          </p>
        </motion.div>

        {/* Primary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-8 mb-12"
        >
          {primaryStats.map(({ value, prefix, suffix, label }) => (
            <div key={label} className="text-center">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary">
                <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
              </p>
              <p className="text-sm sm:text-base text-white/70 mt-2 font-medium">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Secondary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto"
        >
          {secondaryStats.map(({ value, prefix, suffix, label }) => (
            <div key={label} className="text-center rounded-xl border border-white/10 bg-white/5 py-5 px-3">
              <p className="text-xl sm:text-2xl font-bold text-white">
                <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
              </p>
              <p className="text-xs text-white/50 mt-1">{label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  </>
);

export default TrustBar;