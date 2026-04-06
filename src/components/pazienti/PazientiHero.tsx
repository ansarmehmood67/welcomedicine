import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import heroImage from "@/assets/pazienti-hero.jpg";

const PazientiHero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Full background image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Paziente in videochiamata con medico"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(216,43%,8%)/0.95] via-[hsl(216,43%,10%)/0.92] to-[hsl(216,43%,12%)/0.80]" />
    </div>

    <div className="container max-w-6xl mx-auto px-4 relative z-10 py-32 md:py-40">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <span className="bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
            Per i pazienti
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] text-primary-foreground mb-4 drop-shadow-lg"
        >
          Hai un problema<br />di salute?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6 drop-shadow-md"
        >
          Il tuo Specialista, ovunque tu sia.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary-foreground/90 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl drop-shadow-sm font-medium"
        >
          Cerca, comunica e resta in contatto con gli Specialisti di Welcomedicine.
          Prenota videoconsulti e visite online da computer o smartphone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl overflow-hidden mb-8 shadow-2xl max-w-xl"
        >
          <div className="flex items-center gap-3 px-5 flex-1">
            <Search size={20} className="text-primary-foreground/50 shrink-0" />
            <input
              type="text"
              placeholder="Specializzazione, patologia o sintomo..."
              className="w-full bg-transparent py-5 text-base text-primary-foreground placeholder:text-primary-foreground/40 outline-none"
            />
          </div>
          <button className="h-full px-8 py-5 cta-gradient text-primary-foreground font-bold text-base hover:opacity-90 transition-opacity flex items-center gap-2">
            Cerca
            <ArrowRight size={18} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 text-primary-foreground/70 text-sm"
        >
          <span>
            Oppure{" "}
            <a href="https://app.welmed.it/welcomedicine/login" className="text-primary hover:underline font-semibold">Accedi</a>
            {" "}o{" "}
            <a href="https://app.welmed.it/welcomedicine/registration/patient" className="text-primary hover:underline font-semibold">Registrati</a>
          </span>
          <span className="hidden sm:inline text-primary-foreground/30">|</span>
          <span>Gratuito • Nessuna carta richiesta</span>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PazientiHero;
